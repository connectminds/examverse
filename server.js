/**
 * ExamVerse Email Notification Backend
 * Handles app update notifications and exam result emails
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const ADMIN_ACCESS_KEY = process.env.ADMIN_ACCESS_KEY || 'examverse-admin-2026';
const DEFAULT_DASHBOARD_UPDATES = [
    'New subscription verification added for secure dashboard access.',
    'Exam analytics charts improved for better score tracking.',
    'Export now downloads full exam history as CSV.',
    'Mobile dashboard performance and responsiveness optimized.'
];

const SUBSCRIPTION_STORE_PATH = path.join(__dirname, 'subscription-store.json');

function readSubscriptionStore() {
    try {
        if (!fs.existsSync(SUBSCRIPTION_STORE_PATH)) {
            return { subscriptions: {}, references: {}, subscribers: {}, auditLogs: [], appUpdates: [] };
        }
        const raw = fs.readFileSync(SUBSCRIPTION_STORE_PATH, 'utf8');
        const parsed = JSON.parse(raw);
        return {
            subscriptions: parsed.subscriptions || {},
            references: parsed.references || {},
            subscribers: parsed.subscribers || {},
            deviceSubscriptions: parsed.deviceSubscriptions || {},
            auditLogs: Array.isArray(parsed.auditLogs) ? parsed.auditLogs : [],
            appUpdates: Array.isArray(parsed.appUpdates) ? parsed.appUpdates : []
        };
    } catch (error) {
        console.error('Failed to read subscription store:', error.message);
        return { subscriptions: {}, references: {}, subscribers: {}, deviceSubscriptions: {}, auditLogs: [], appUpdates: [] };
    }
}

function writeSubscriptionStore(store) {
    fs.writeFileSync(SUBSCRIPTION_STORE_PATH, JSON.stringify(store, null, 2), 'utf8');
}

function normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
}

function safeString(value) {
    return String(value || '').trim();
}

function normalizeDeviceId(deviceId) {
    return String(deviceId || '').trim();
}

function buildDeviceKey(email, deviceId) {
    const normalizedEmail = normalizeEmail(email);
    const normalizedDeviceId = normalizeDeviceId(deviceId);
    if (!normalizedEmail || !normalizedDeviceId) return '';
    return `${normalizedEmail}::${normalizedDeviceId}`;
}

function upsertDeviceSubscription(store, payload = {}) {
    const email = normalizeEmail(payload.email);
    const deviceId = normalizeDeviceId(payload.deviceId);
    const key = buildDeviceKey(email, deviceId);
    if (!key) return null;

    if (!store.deviceSubscriptions || typeof store.deviceSubscriptions !== 'object') {
        store.deviceSubscriptions = {};
    }

    const existing = store.deviceSubscriptions[key] || {};
    const nextStatus = safeString(payload.status || existing.status || 'pending').toLowerCase();

    const record = {
        email,
        deviceId,
        deviceLabel: safeString(payload.deviceLabel || existing.deviceLabel || ''),
        platform: safeString(payload.platform || existing.platform || ''),
        appChannel: safeString(payload.appChannel || existing.appChannel || ''),
        status: ['pending', 'active', 'inactive'].includes(nextStatus) ? nextStatus : 'pending',
        createdAt: existing.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lastStatusChangeAt: payload.lastStatusChangeAt || existing.lastStatusChangeAt || null,
        lastStatusChangedBy: safeString(payload.lastStatusChangedBy || existing.lastStatusChangedBy || '')
    };

    store.deviceSubscriptions[key] = record;
    return record;
}

function getSubscriberDevices(store, email) {
    const normalizedEmail = normalizeEmail(email);
    const allDeviceSubs = Object.values(store.deviceSubscriptions || {});
    return allDeviceSubs.filter((entry) => normalizeEmail(entry.email) === normalizedEmail);
}

function appendAuditLog(store, entry) {
    if (!Array.isArray(store.auditLogs)) {
        store.auditLogs = [];
    }

    store.auditLogs.push({
        id: `audit-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        timestamp: new Date().toISOString(),
        ...entry
    });

    // Prevent unbounded growth while keeping recent history.
    if (store.auditLogs.length > 5000) {
        store.auditLogs = store.auditLogs.slice(-5000);
    }
}


function getSubscriberBroadcastTemplate({ fullName, message }) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="font-family:Segoe UI,Arial,sans-serif;background:#f8fafc;padding:24px;">
        <div style="max-width:620px;margin:auto;background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;">
            <div style="background:#8b5cf6;color:#fff;padding:20px;text-align:center;">
                <h2 style="margin:0;">ExamVerse Subscriber Update</h2>
            </div>
            <div style="padding:22px;color:#111827;line-height:1.7;">
                <p>Hi ${fullName || 'ExamVerse Subscriber'},</p>
                <p>${message}</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

function upsertSubscriber(store, email, payload = {}) {
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) return;

    const existing = store.subscribers[normalizedEmail] || {};
    const merged = {
        email: normalizedEmail,
        firstName: safeString(payload.firstName || existing.firstName),
        lastName: safeString(payload.lastName || existing.lastName),
        fullName: safeString(payload.fullName || existing.fullName),
        phone: safeString(payload.phone || existing.phone),
        status: safeString(payload.status || existing.status || 'registered'),
        subscribedToUpdates: payload.subscribedToUpdates !== undefined
            ? Boolean(payload.subscribedToUpdates)
            : (existing.subscribedToUpdates !== undefined ? Boolean(existing.subscribedToUpdates) : true),
        createdAt: existing.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    store.subscribers[normalizedEmail] = merged;
}


// ============ Middleware ============
app.use(cors());
app.use(express.json({
    limit: '10mb',
    verify: (req, res, buf) => {
        req.rawBody = buf.toString();
    }
}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(__dirname));

// ============ Email Configuration ============
const emailConfig = {
    service: process.env.EMAIL_SERVICE || 'gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true' || false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
};

const transporter = nodemailer.createTransport(emailConfig);

// Verify email connection on startup
transporter.verify((error, success) => {
    if (error) {
        console.log('⚠️  Email service not configured. Notifications will be logged only.');
        console.log('Configure .env file with email credentials to enable real emails.');
    } else {
        console.log('✓ Email service ready:', success);
    }
});

// ============ Email Templates ============
function getAppUpdateEmailTemplate(updateData) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .feature { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #8b5cf6; border-radius: 4px; }
            .feature h3 { margin-top: 0; color: #8b5cf6; }
            .cta-button { display: inline-block; background: #8b5cf6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin-top: 20px; font-weight: 600; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 0.9rem; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>ExamVerse Update</h1>
                <p>${updateData.version}</p>
            </div>
            <div class="content">
                <h2>Welcome back to ExamVerse!</h2>
                <p>We're excited to announce a new update with amazing features and improvements.</p>
                
                <h3>What's New</h3>
                ${updateData.features.map(f => `
                    <div class="feature">
                        <h3>✨ ${f.title}</h3>
                        <p>${f.description}</p>
                    </div>
                `).join('')}
                
                ${updateData.improvements.length > 0 ? `
                    <h3>Improvements</h3>
                    <ul>
                        ${updateData.improvements.map(imp => `<li>${imp}</li>`).join('')}
                    </ul>
                ` : ''}
                
                <p>Ready to explore the new features? Open ExamVerse and start your next exam!</p>
                <center>
                    <a href="${process.env.APP_URL || 'https://examverse.com'}" class="cta-button">Open ExamVerse</a>
                </center>
            </div>
            <div class="footer">
                <p>&copy; 2026 ExamVerse | ConnectMinds IT Tech</p>
                <p>You received this email because you're registered on ExamVerse.</p>
                <p><a href="${process.env.UNSUBSCRIBE_URL || '#'}">Unsubscribe from updates</a></p>
            </div>
        </div>
    </body>
    </html>
    `;
}

function getExamResultEmailTemplate(examData) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .score-box { background: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; border: 2px solid #8b5cf6; }
            .score-value { font-size: 2.5rem; font-weight: bold; color: #8b5cf6; }
            .stat { display: inline-block; margin: 10px 15px; }
            .stat-label { color: #6b7280; font-size: 0.9rem; }
            .stat-value { font-size: 1.5rem; font-weight: bold; color: #1f2937; }
            .cta-button { display: inline-block; background: #8b5cf6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin-top: 20px; font-weight: 600; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 0.9rem; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Exam Complete! 🎉</h1>
                <p>${examData.subject}</p>
            </div>
            <div class="content">
                <h2>Congratulations on completing your exam!</h2>
                
                <div class="score-box">
                    <div class="score-value">${examData.score}%</div>
                    <p style="margin-top: 0; color: #6b7280;">Your Score</p>
                </div>
                
                <div style="text-align: center;">
                    <div class="stat">
                        <div class="stat-label">Correct</div>
                        <div class="stat-value">${examData.correct}/${examData.total}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Duration</div>
                        <div class="stat-value">${examData.duration} min</div>
                    </div>
                </div>
                
                <h3>Detailed Analysis</h3>
                <p>Your exam results have been saved to your dashboard. View detailed analytics including:</p>
                <ul>
                    <li>Question-by-question breakdown</li>
                    <li>Topic-wise performance analysis</li>
                    <li>Explanations for incorrect answers</li>
                    <li>Difficulty level analysis</li>
                </ul>
                
                <center>
                    <a href="${process.env.APP_URL || 'https://examverse.com'}/dashboard.html" class="cta-button">View Your Results</a>
                </center>
                
                <p style="text-align: center; color: #6b7280; margin-top: 30px;">
                    Keep practicing! The more you improve your weak areas, the better your performance will be. 💪
                </p>
            </div>
            <div class="footer">
                <p>&copy; 2026 ExamVerse | ConnectMinds IT Tech</p>
                <p><a href="${process.env.UNSUBSCRIBE_URL || '#'}">Unsubscribe from exam results emails</a></p>
            </div>
        </div>
    </body>
    </html>
    `;
}

// ============ Routes ============

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Subscribe to notifications
app.post('/api/subscribe', async (req, res) => {
    try {
        const { email, preferences, firstName = '', lastName = '', fullName = '', phone = '' } = req.body;
        const normalizedEmail = normalizeEmail(email);

        if (!normalizedEmail || !normalizedEmail.includes('@')) {
            return res.status(400).json({ error: 'Valid email required' });
        }

        const resolvedFullName = safeString(fullName) || `${safeString(firstName)} ${safeString(lastName)}`.trim();

        const store = readSubscriptionStore();
        upsertSubscriber(store, normalizedEmail, {
            firstName,
            lastName,
            fullName: resolvedFullName,
            phone,
            status: 'active',
            subscribedToUpdates: true
        });
        writeSubscriptionStore(store);

        // In production, save to database
        // For now, log to console
        console.log(`✓ New subscription: ${normalizedEmail}`);
        console.log('  Preferences:', preferences);

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: normalizedEmail,
            subject: 'Welcome to ExamVerse Notifications!',
            html: `
                <h2>Subscription Confirmed ✓</h2>
                <p>Thank you for subscribing to ExamVerse notifications!</p>
                <p>You will now receive:</p>
                <ul>
                    <li>${preferences.appUpdates ? '✓' : '✗'} App updates and new features</li>
                    <li>${preferences.examResults ? '✓' : '✗'} Exam result notifications</li>
                    <li>${preferences.reminders ? '✓' : '✗'} Study reminders</li>
                </ul>
                <p>You can change your preferences anytime from your account settings.</p>
            `
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.log('📧 [EMAIL PREVIEW] Confirmation email would be sent to:', normalizedEmail);
        }

        res.json({
            success: true,
            message: 'Subscription confirmed!',
            email: normalizedEmail
        });
    } catch (error) {
        console.error('Subscription error:', error.message);
        res.status(500).json({
            error: 'Subscription failed',
            details: error.message
        });
    }
});

app.post('/api/subscribers/request-access', (req, res) => {
    try {
        const {
            email,
            firstName = '',
            lastName = '',
            fullName = '',
            phone = '',
            deviceId = '',
            deviceLabel = '',
            platform = '',
            appChannel = ''
        } = req.body;
        const normalizedEmail = normalizeEmail(email);
        const normalizedDeviceId = normalizeDeviceId(deviceId);
        if (!normalizedEmail || !normalizedEmail.includes('@')) {
            return res.status(400).json({ error: 'Valid email is required' });
        }

        if (!normalizedDeviceId) {
            return res.status(400).json({ error: 'Device ID is required for activation request' });
        }

        const store = readSubscriptionStore();
        const existing = store.subscribers[normalizedEmail];
        const deviceKey = buildDeviceKey(normalizedEmail, normalizedDeviceId);
        const existingDevice = (store.deviceSubscriptions || {})[deviceKey];
        const nextStatus = existingDevice?.status === 'active' ? 'active' : 'pending';
        const resolvedFullName = safeString(fullName) || `${safeString(firstName)} ${safeString(lastName)}`.trim();

        upsertSubscriber(store, normalizedEmail, {
            firstName,
            lastName,
            fullName: resolvedFullName,
            phone,
            status: existing?.status || 'pending',
            subscribedToUpdates: existing?.subscribedToUpdates !== undefined ? existing.subscribedToUpdates : true
        });

        const deviceRecord = upsertDeviceSubscription(store, {
            email: normalizedEmail,
            deviceId: normalizedDeviceId,
            deviceLabel,
            platform,
            appChannel,
            status: nextStatus
        });

        appendAuditLog(store, {
            action: 'subscriber-device-request-access',
            actor: 'subscriber',
            email: normalizedEmail,
            deviceId: normalizedDeviceId,
            nextStatus,
            note: `Device access request (${safeString(platform) || 'unknown-platform'})`
        });

        writeSubscriptionStore(store);

        return res.json({
            success: true,
            status: nextStatus,
            device: deviceRecord,
            message: nextStatus === 'active'
                ? 'Subscriber is already active.'
                : 'Payment request recorded. Awaiting owner confirmation.'
        });
    } catch (error) {
        console.error('Request access error:', error.message);
        return res.status(500).json({ error: 'Failed to record subscription request', details: error.message });
    }
});

app.get('/api/subscribers', (req, res) => {
    try {
        const adminKey = req.headers['x-admin-key'] || req.query.adminKey;
        if (adminKey !== ADMIN_ACCESS_KEY) {
            return res.status(401).json({ error: 'Unauthorized: invalid admin key' });
        }

        const store = readSubscriptionStore();
        const subscribers = Object.values(store.subscribers || {}).map((subscriber) => {
            const devices = getSubscriberDevices(store, subscriber.email);
            return {
                ...subscriber,
                devices,
                activeDevices: devices.filter((device) => device.status === 'active').length,
                pendingDevices: devices.filter((device) => device.status === 'pending').length
            };
        });
        return res.json({
            success: true,
            total: subscribers.length,
            active: subscribers.filter((s) => s.status === 'active').length,
            totalDevices: Object.values(store.deviceSubscriptions || {}).length,
            subscribers
        });
    } catch (error) {
        console.error('Get subscribers error:', error.message);
        return res.status(500).json({ error: 'Failed to load subscribers', details: error.message });
    }
});

app.get('/api/subscribers/status', (req, res) => {
    try {
        const normalizedEmail = normalizeEmail(req.query.email);
        const normalizedDeviceId = normalizeDeviceId(req.query.deviceId);
        if (!normalizedEmail || !normalizedEmail.includes('@')) {
            return res.status(400).json({ error: 'Valid email query is required' });
        }

        const store = readSubscriptionStore();
        if (normalizedDeviceId) {
            const deviceKey = buildDeviceKey(normalizedEmail, normalizedDeviceId);
            const deviceSubscription = (store.deviceSubscriptions || {})[deviceKey];

            if (!deviceSubscription) {
                return res.status(404).json({
                    success: false,
                    status: 'not-found',
                    email: normalizedEmail,
                    deviceId: normalizedDeviceId,
                    message: 'Device subscription record not found'
                });
            }

            return res.json({
                success: true,
                email: normalizedEmail,
                deviceId: normalizedDeviceId,
                status: deviceSubscription.status || 'inactive',
                subscriber: store.subscribers[normalizedEmail] || null,
                deviceSubscription
            });
        }

        const subscriber = store.subscribers[normalizedEmail];
        if (!subscriber) {
            return res.status(404).json({
                success: false,
                status: 'not-found',
                email: normalizedEmail,
                message: 'Subscriber record not found'
            });
        }

        return res.json({
            success: true,
            email: normalizedEmail,
            status: subscriber.status || 'inactive',
            subscriber
        });
    } catch (error) {
        console.error('Get subscriber status error:', error.message);
        return res.status(500).json({ error: 'Failed to load subscriber status', details: error.message });
    }
});

app.get('/api/dashboard/updates', (req, res) => {
    try {
        const store = readSubscriptionStore();
        const updates = Array.isArray(store.appUpdates) && store.appUpdates.length > 0
            ? store.appUpdates
            : DEFAULT_DASHBOARD_UPDATES;

        return res.json({
            success: true,
            count: updates.length,
            updates
        });
    } catch (error) {
        console.error('Get dashboard updates error:', error.message);
        return res.status(500).json({ error: 'Failed to load dashboard updates', details: error.message });
    }
});

app.post('/api/dashboard/updates', (req, res) => {
    try {
        const { updates, adminKey, adminIdentity = '' } = req.body;
        if (adminKey !== ADMIN_ACCESS_KEY) {
            return res.status(401).json({ error: 'Unauthorized: invalid admin key' });
        }

        if (!Array.isArray(updates) || updates.length === 0) {
            return res.status(400).json({ error: 'Updates must be a non-empty array of text messages' });
        }

        const sanitizedUpdates = updates
            .filter((item) => typeof item === 'string')
            .map((item) => item.trim())
            .filter((item) => item.length > 0)
            .slice(0, 20);

        if (sanitizedUpdates.length === 0) {
            return res.status(400).json({ error: 'No valid update text provided' });
        }

        const store = readSubscriptionStore();
        store.appUpdates = sanitizedUpdates;

        appendAuditLog(store, {
            action: 'dashboard-updates-change',
            actor: safeString(adminIdentity) || 'owner',
            nextCount: sanitizedUpdates.length,
            note: 'Dashboard marquee updates changed'
        });

        writeSubscriptionStore(store);

        return res.json({
            success: true,
            message: 'Dashboard updates saved successfully',
            count: sanitizedUpdates.length,
            updates: sanitizedUpdates
        });
    } catch (error) {
        console.error('Update dashboard updates error:', error.message);
        return res.status(500).json({ error: 'Failed to save dashboard updates', details: error.message });
    }
});

app.post('/api/subscribers/status', (req, res) => {
    try {
        const {
            email,
            status,
            adminKey,
            adminIdentity = '',
            firstName = '',
            lastName = '',
            fullName = '',
            phone = '',
            deviceId = ''
        } = req.body;
        const normalizedEmail = normalizeEmail(email);
        const normalizedDeviceId = normalizeDeviceId(deviceId);
        const normalizedStatus = safeString(status).toLowerCase();
        const resolvedAdminIdentity = safeString(adminIdentity) || 'owner';
        const allowedStatuses = new Set(['pending', 'active', 'inactive']);

        if (adminKey !== ADMIN_ACCESS_KEY) {
            return res.status(401).json({ error: 'Unauthorized: invalid admin key' });
        }

        if (!normalizedEmail || !normalizedEmail.includes('@')) {
            return res.status(400).json({ error: 'Valid email is required' });
        }

        if (!allowedStatuses.has(normalizedStatus)) {
            return res.status(400).json({ error: 'Status must be pending, active, or inactive' });
        }

        const store = readSubscriptionStore();
        const previousStatus = normalizedDeviceId
            ? (((store.deviceSubscriptions || {})[buildDeviceKey(normalizedEmail, normalizedDeviceId)]?.status) || 'not-registered').toLowerCase()
            : (store.subscribers[normalizedEmail]?.status || 'not-registered').toLowerCase();
        const resolvedFullName = safeString(fullName) || `${safeString(firstName)} ${safeString(lastName)}`.trim();

        if (normalizedDeviceId) {
            upsertSubscriber(store, normalizedEmail, {
                firstName,
                lastName,
                fullName: resolvedFullName,
                phone,
                status: store.subscribers[normalizedEmail]?.status || 'pending'
            });

            const updatedDevice = upsertDeviceSubscription(store, {
                email: normalizedEmail,
                deviceId: normalizedDeviceId,
                status: normalizedStatus,
                lastStatusChangeAt: new Date().toISOString(),
                lastStatusChangedBy: resolvedAdminIdentity
            });

            appendAuditLog(store, {
                action: 'subscriber-device-status-change',
                actor: resolvedAdminIdentity,
                email: normalizedEmail,
                deviceId: normalizedDeviceId,
                previousStatus,
                nextStatus: normalizedStatus,
                note: `Device status changed from ${previousStatus} to ${normalizedStatus}`
            });

            writeSubscriptionStore(store);

            return res.json({
                success: true,
                message: `Subscriber device status updated to ${normalizedStatus}`,
                subscriber: store.subscribers[normalizedEmail],
                deviceSubscription: updatedDevice
            });
        }

        upsertSubscriber(store, normalizedEmail, {
            firstName,
            lastName,
            fullName: resolvedFullName,
            phone,
            status: normalizedStatus
        });

        const subscriber = store.subscribers[normalizedEmail];
        subscriber.lastStatusChangeAt = new Date().toISOString();
        subscriber.lastStatusChangedBy = resolvedAdminIdentity;

        appendAuditLog(store, {
            action: 'subscriber-status-change',
            actor: resolvedAdminIdentity,
            email: normalizedEmail,
            previousStatus,
            nextStatus: normalizedStatus,
            note: `Status changed from ${previousStatus} to ${normalizedStatus}`
        });

        writeSubscriptionStore(store);

        return res.json({
            success: true,
            message: `Subscriber status updated to ${normalizedStatus}`,
            subscriber
        });
    } catch (error) {
        console.error('Update subscriber status error:', error.message);
        return res.status(500).json({ error: 'Failed to update subscriber status', details: error.message });
    }
});

app.post('/api/subscribers/broadcast', async (req, res) => {
    try {
        const { subject, message, onlyActive = true, adminKey } = req.body;
        if (adminKey !== ADMIN_ACCESS_KEY) {
            return res.status(401).json({ error: 'Unauthorized: invalid admin key' });
        }

        if (!subject || !message) {
            return res.status(400).json({ error: 'Subject and message are required' });
        }

        const store = readSubscriptionStore();
        const subscribers = Object.values(store.subscribers || {}).filter((subscriber) => {
            if (!subscriber.email) return false;
            if (subscriber.subscribedToUpdates === false) return false;
            if (!onlyActive) return true;
            return subscriber.status === 'active';
        });

        let successCount = 0;
        let failureCount = 0;

        for (const subscriber of subscribers) {
            try {
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: subscriber.email,
                    subject,
                    html: getSubscriberBroadcastTemplate({
                        fullName: subscriber.fullName || subscriber.firstName,
                        message
                    })
                };

                if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
                    await transporter.sendMail(mailOptions);
                } else {
                    console.log(`📧 [EMAIL PREVIEW] Broadcast to ${subscriber.email}: ${subject}`);
                }

                successCount += 1;
            } catch (err) {
                console.error(`Broadcast failed for ${subscriber.email}:`, err.message);
                failureCount += 1;
            }
        }

        return res.json({
            success: failureCount === 0,
            totalRecipients: subscribers.length,
            successCount,
            failureCount
        });
    } catch (error) {
        console.error('Broadcast error:', error.message);
        return res.status(500).json({ error: 'Failed to broadcast message', details: error.message });
    }
});

// Send app update notification
app.post('/api/notify/update', async (req, res) => {
    try {
        const { recipients, updateData } = req.body;

        if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
            return res.status(400).json({ error: 'Recipients email list required' });
        }

        if (!updateData || !updateData.version) {
            return res.status(400).json({ error: 'Update data with version required' });
        }

        const htmlContent = getAppUpdateEmailTemplate(updateData);
        let successCount = 0;
        let failureCount = 0;

        // Send to each recipient
        for (const email of recipients) {
            try {
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: `ExamVerse ${updateData.version}: ${updateData.title || 'New Update'}`,
                    html: htmlContent
                };

                if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
                    await transporter.sendMail(mailOptions);
                } else {
                    console.log(`📧 [EMAIL PREVIEW] Update notification for ${email}`);
                }

                successCount++;
            } catch (err) {
                console.error(`Failed to send to ${email}:`, err.message);
                failureCount++;
            }
        }

        res.json({
            success: failureCount === 0,
            message: `Sent to ${successCount}/${recipients.length} recipients`,
            successCount,
            failureCount
        });
    } catch (error) {
        console.error('Update notification error:', error.message);
        res.status(500).json({
            error: 'Failed to send update notification',
            details: error.message
        });
    }
});

// Send exam result email
app.post('/api/notify/exam-result', async (req, res) => {
    try {
        const { email, examData } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Valid email required' });
        }

        if (!examData || !examData.subject) {
            return res.status(400).json({ error: 'Exam data required' });
        }

        const htmlContent = getExamResultEmailTemplate(examData);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Exam Result: ${examData.subject} - ${examData.score}%`,
            html: htmlContent
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.log(`📧 [EMAIL PREVIEW] Exam result email for ${email}`);
            console.log('Subject:', mailOptions.subject);
        }

        res.json({
            success: true,
            message: 'Exam result email sent successfully',
            email: email
        });
    } catch (error) {
        console.error('Exam result email error:', error.message);
        res.status(500).json({
            error: 'Failed to send exam result email',
            details: error.message
        });
    }
});

// Send study reminder
app.post('/api/notify/reminder', async (req, res) => {
    try {
        const { email, reminderData } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Valid email required' });
        }

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: 'Segoe UI', Tahoma, sans-serif; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #8b5cf6; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
                .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
                .cta-button { display: inline-block; background: #8b5cf6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Time to Practice! 📚</h1>
                </div>
                <div class="content">
                    <p>Hi there!</p>
                    <p>${reminderData?.message || 'We noticed you haven\'t practiced in a while. Let\'s get back to studying!'}</p>
                    <p>Choose a subject and ${reminderData?.questionCount || 'some'} questions to test your knowledge.</p>
                    <center>
                        <a href="${process.env.APP_URL || 'https://examverse.com'}" class="cta-button">Start Studying Now</a>
                    </center>
                </div>
            </div>
        </body>
        </html>
        `;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: reminderData?.subject || 'Your Daily Study Reminder - ExamVerse',
            html: htmlContent
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.log(`📧 [EMAIL PREVIEW] Reminder email for ${email}`);
        }

        res.json({
            success: true,
            message: 'Reminder email sent successfully',
            email: email
        });
    } catch (error) {
        console.error('Reminder email error:', error.message);
        res.status(500).json({
            error: 'Failed to send reminder email',
            details: error.message
        });
    }
});

// ============ Error Handling ============
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not found',
        path: req.path
    });
});

// ============ Start Server ============
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('\n✅ ExamVerse Email Service Started');
    console.log(`📧 Server running on http://localhost:${PORT}`);
    console.log(`🔗 Health check: GET http://localhost:${PORT}/api/health\n`);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log('⚠️  Note: Email credentials not configured.');
        console.log('   Emails will be logged to console for preview.');
        console.log('   Configure .env file with EMAIL_USER and EMAIL_PASS to send real emails.\n');
    }
});

module.exports = app;
