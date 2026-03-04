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
const crypto = require('crypto');

const app = express();

const SUBSCRIPTION_STORE_PATH = path.join(__dirname, 'subscription-store.json');

function readSubscriptionStore() {
    try {
        if (!fs.existsSync(SUBSCRIPTION_STORE_PATH)) {
            return { subscriptions: {}, references: {}, subscribers: {} };
        }
        const raw = fs.readFileSync(SUBSCRIPTION_STORE_PATH, 'utf8');
        const parsed = JSON.parse(raw);
        return {
            subscriptions: parsed.subscriptions || {},
            references: parsed.references || {},
            subscribers: parsed.subscribers || {}
        };
    } catch (error) {
        console.error('Failed to read subscription store:', error.message);
        return { subscriptions: {}, references: {}, subscribers: {} };
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

function parseName(fullName) {
    const cleaned = safeString(fullName);
    if (!cleaned) return { firstName: '', lastName: '', fullName: '' };
    const parts = cleaned.split(/\s+/).filter(Boolean);
    const firstName = parts[0] || '';
    const lastName = parts.slice(1).join(' ');
    return { firstName, lastName, fullName: cleaned };
}

function generateActivationCode(length = 8) {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        const index = crypto.randomInt(0, alphabet.length);
        code += alphabet[index];
    }
    return code;
}

function getActivationCodeEmailTemplate({ fullName, activationCode }) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #f3f4f6; color: #111827; margin: 0; padding: 0; }
            .wrap { max-width: 620px; margin: 24px auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e5e7eb; }
            .head { background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%); color: #fff; padding: 28px; text-align: center; }
            .content { padding: 28px; }
            .code-box { margin: 18px 0; padding: 18px; border: 2px dashed #8b5cf6; border-radius: 10px; text-align: center; background: #faf5ff; }
            .code { font-size: 2rem; letter-spacing: 4px; font-weight: 800; color: #5b21b6; }
            .note { color: #6b7280; font-size: 0.92rem; }
            .footer { border-top: 1px solid #e5e7eb; padding: 18px 28px; color: #6b7280; font-size: 0.88rem; text-align: center; }
        </style>
    </head>
    <body>
        <div class="wrap">
            <div class="head">
                <h1 style="margin:0;">ExamVerse Payment Confirmed ✅</h1>
                <p style="margin:10px 0 0;">Your activation code is ready</p>
            </div>
            <div class="content">
                <p>Hi ${fullName || 'ExamVerse Learner'},</p>
                <p>Your one-time subscription payment has been confirmed successfully.</p>
                <p>Please use the activation code below on the ExamVerse home page to unlock your dashboard:</p>
                <div class="code-box">
                    <div class="code">${activationCode}</div>
                </div>
                <p class="note">Enter this code exactly as shown. It can be used once for your account activation.</p>
            </div>
            <div class="footer">
                © 2026 ExamVerse | ConnectMinds IT Tech
            </div>
        </div>
    </body>
    </html>
    `;
}

function getWelcomeSubscriberTemplate({ fullName }) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="font-family:Segoe UI,Arial,sans-serif;background:#f3f4f6;padding:24px;">
        <div style="max-width:620px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
            <div style="background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;padding:24px;text-align:center;">
                <h1 style="margin:0;">Welcome to ExamVerse Premium 🎉</h1>
            </div>
            <div style="padding:24px;color:#111827;line-height:1.6;">
                <p>Hi ${fullName || 'ExamVerse Learner'},</p>
                <p>Congratulations! Your subscription is now fully active.</p>
                <p>You will receive product updates, launch announcements, and important subscriber messages from us.</p>
                <p>Thank you for supporting ExamVerse.</p>
            </div>
        </div>
    </body>
    </html>
    `;
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

async function verifyPaystackTransactionByReference(reference, paystackSecretKey) {
    const verifyResponse = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${paystackSecretKey}`,
            'Content-Type': 'application/json'
        }
    });

    const verifyData = await verifyResponse.json();
    if (!verifyResponse.ok || !verifyData.status) {
        throw new Error(verifyData.message || 'Verification failed');
    }

    return verifyData.data;
}

async function finalizeVerifiedPayment({ transaction, reference, profile = {} }) {
    const paidEmail = normalizeEmail(transaction.customer?.email || profile.email);
    if (!paidEmail) {
        throw new Error('Unable to resolve customer email from Paystack response');
    }

    const store = readSubscriptionStore();
    const subscription = store.subscriptions[paidEmail] || { email: paidEmail };

    let activationCode = subscription.activationCode;
    const shouldIssueCode = !activationCode || subscription.status !== 'paid_pending_activation';

    if (shouldIssueCode) {
        activationCode = generateActivationCode(8);
        await sendActivationCodeEmail({
            email: paidEmail,
            fullName: profile.fullName || subscription.fullName || transaction.customer?.first_name || 'ExamVerse Learner',
            activationCode
        });
    }

    const customerName = profile.fullName || subscription.fullName || transaction.customer?.first_name || '';
    const parsedName = parseName(customerName);
    const phone = safeString(profile.phone || subscription.phone || transaction.customer?.phone);

    store.references[reference] = paidEmail;
    store.subscriptions[paidEmail] = {
        ...subscription,
        email: paidEmail,
        firstName: parsedName.firstName || subscription.firstName || '',
        lastName: parsedName.lastName || subscription.lastName || '',
        fullName: parsedName.fullName || subscription.fullName || '',
        phone,
        reference,
        paystackTransactionId: transaction.id,
        amount: Number(transaction.amount || 0) / 100,
        currency: transaction.currency,
        paidAt: transaction.paid_at || new Date().toISOString(),
        status: 'paid_pending_activation',
        activationCode,
        activationCodeIssuedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    upsertSubscriber(store, paidEmail, {
        firstName: store.subscriptions[paidEmail].firstName,
        lastName: store.subscriptions[paidEmail].lastName,
        fullName: store.subscriptions[paidEmail].fullName,
        phone,
        status: 'paid_pending_activation',
        subscribedToUpdates: true
    });

    writeSubscriptionStore(store);

    return {
        email: paidEmail,
        shouldIssueCode,
        status: 'paid_pending_activation'
    };
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

async function sendActivationCodeEmail({ email, fullName, activationCode }) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'ExamVerse Activation Code',
        html: getActivationCodeEmailTemplate({ fullName, activationCode })
    };

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
    } else {
        console.log(`📧 [EMAIL PREVIEW] Activation code for ${email}: ${activationCode}`);
    }
}

async function sendWelcomeSubscriberEmail({ email, fullName }) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to ExamVerse Premium',
        html: getWelcomeSubscriberTemplate({ fullName })
    };

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
    } else {
        console.log(`📧 [EMAIL PREVIEW] Welcome subscriber email for ${email}`);
    }
}

// ============ Routes ============

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Subscribe to notifications
app.post('/api/subscribe', async (req, res) => {
    try {
        const { email, preferences } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Valid email required' });
        }

        // In production, save to database
        // For now, log to console
        console.log(`✓ New subscription: ${email}`);
        console.log('  Preferences:', preferences);

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
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
            console.log('📧 [EMAIL PREVIEW] Confirmation email would be sent to:', email);
        }

        res.json({
            success: true,
            message: 'Subscription confirmed!',
            email: email
        });
    } catch (error) {
        console.error('Subscription error:', error.message);
        res.status(500).json({
            error: 'Subscription failed',
            details: error.message
        });
    }
});

app.post('/api/paystack/initialize', async (req, res) => {
    try {
        const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
        if (!paystackSecretKey) {
            return res.status(500).json({ error: 'PAYSTACK_SECRET_KEY is not configured on server' });
        }

        const { email, amount, fullName, phone, firstName, lastName } = req.body;
        const normalizedEmail = normalizeEmail(email);
        const numericAmount = Number(amount);

        if (!normalizedEmail || !normalizedEmail.includes('@')) {
            return res.status(400).json({ error: 'Valid email is required' });
        }

        if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
            return res.status(400).json({ error: 'Valid amount is required' });
        }

        const profileFullName = safeString(fullName) || `${safeString(firstName)} ${safeString(lastName)}`.trim();

        const appUrl = process.env.APP_URL || 'http://localhost:5500';
        const callbackUrl = `${appUrl.replace(/\/$/, '')}/subscribe.html?paystack=callback`;
        const reference = `EV-${Date.now()}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

        const payload = {
            email: normalizedEmail,
            amount: Math.round(numericAmount * 100),
            currency: 'NGN',
            reference,
            callback_url: callbackUrl,
            metadata: {
                custom_fields: [
                    {
                        display_name: 'Plan',
                        variable_name: 'plan',
                        value: 'ExamVerse Lifetime Access'
                    },
                    {
                        display_name: 'Subscriber Name',
                        variable_name: 'subscriber_name',
                        value: profileFullName
                    },
                    {
                        display_name: 'Subscriber Phone',
                        variable_name: 'subscriber_phone',
                        value: safeString(phone)
                    }
                ]
            }
        };

        const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${paystackSecretKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const paystackData = await paystackResponse.json();
        if (!paystackResponse.ok || !paystackData.status) {
            return res.status(400).json({
                error: 'Unable to initialize Paystack transaction',
                details: paystackData.message || 'Initialization failed'
            });
        }

        const store = readSubscriptionStore();
        store.references[reference] = normalizedEmail;
        if (!store.subscriptions[normalizedEmail]) {
            store.subscriptions[normalizedEmail] = {
                email: normalizedEmail,
                firstName: safeString(firstName) || parseName(profileFullName).firstName,
                lastName: safeString(lastName) || parseName(profileFullName).lastName,
                fullName: profileFullName,
                phone: safeString(phone),
                status: 'payment_initialized',
                amount: numericAmount,
                createdAt: new Date().toISOString()
            };
        }
        store.subscriptions[normalizedEmail].reference = reference;
        store.subscriptions[normalizedEmail].status = 'payment_initialized';
        store.subscriptions[normalizedEmail].amount = numericAmount;
        store.subscriptions[normalizedEmail].phone = safeString(phone) || store.subscriptions[normalizedEmail].phone || '';
        store.subscriptions[normalizedEmail].firstName = safeString(firstName) || store.subscriptions[normalizedEmail].firstName || '';
        store.subscriptions[normalizedEmail].lastName = safeString(lastName) || store.subscriptions[normalizedEmail].lastName || '';
        store.subscriptions[normalizedEmail].fullName = profileFullName || store.subscriptions[normalizedEmail].fullName || '';
        store.subscriptions[normalizedEmail].updatedAt = new Date().toISOString();

        upsertSubscriber(store, normalizedEmail, {
            firstName: store.subscriptions[normalizedEmail].firstName,
            lastName: store.subscriptions[normalizedEmail].lastName,
            fullName: store.subscriptions[normalizedEmail].fullName,
            phone: store.subscriptions[normalizedEmail].phone,
            status: 'payment_initialized',
            subscribedToUpdates: true
        });

        writeSubscriptionStore(store);

        return res.json({
            success: true,
            authorizationUrl: paystackData.data.authorization_url,
            reference: paystackData.data.reference
        });
    } catch (error) {
        console.error('Paystack initialize error:', error.message);
        return res.status(500).json({ error: 'Failed to initialize payment', details: error.message });
    }
});

app.post('/api/paystack/verify', async (req, res) => {
    try {
        const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
        if (!paystackSecretKey) {
            return res.status(500).json({ error: 'PAYSTACK_SECRET_KEY is not configured on server' });
        }

        const { reference } = req.body;
        if (!reference) {
            return res.status(400).json({ error: 'Transaction reference is required' });
        }

        const transaction = await verifyPaystackTransactionByReference(reference, paystackSecretKey);
        if (transaction.status !== 'success') {
            return res.status(400).json({
                error: 'Payment not successful',
                status: transaction.status
            });
        }

        const paidEmail = normalizeEmail(transaction.customer?.email);
        const store = readSubscriptionStore();
        const existingSubscription = paidEmail ? store.subscriptions[paidEmail] : null;
        if (existingSubscription && existingSubscription.status === 'active') {
            return res.json({
                success: true,
                alreadyActive: true,
                message: 'Subscription is already active'
            });
        }

        const result = await finalizeVerifiedPayment({ transaction, reference });

        return res.json({
            success: true,
            status: 'paid_pending_activation',
            email: result.email,
            message: result.shouldIssueCode
                ? 'Payment verified and activation code sent to subscriber email'
                : 'Payment already verified. Existing activation code is still valid'
        });
    } catch (error) {
        console.error('Paystack verify error:', error.message);
        return res.status(500).json({ error: 'Failed to verify payment', details: error.message });
    }
});

app.post('/api/subscription/activate', (req, res) => {
    try {
        const { email, activationCode } = req.body;
        const normalizedEmail = normalizeEmail(email);
        const normalizedCode = String(activationCode || '').trim().toUpperCase();

        if (!normalizedEmail || !normalizedCode) {
            return res.status(400).json({ error: 'Email and activation code are required' });
        }

        const store = readSubscriptionStore();
        const subscription = store.subscriptions[normalizedEmail];

        if (!subscription) {
            return res.status(404).json({ error: 'No subscription record found for this email' });
        }

        if (subscription.status === 'active') {
            return res.json({ success: true, status: 'active', message: 'Subscription already active' });
        }

        if (subscription.status !== 'paid_pending_activation') {
            return res.status(400).json({ error: 'Payment is not verified yet for this account' });
        }

        if (String(subscription.activationCode || '').toUpperCase() !== normalizedCode) {
            return res.status(400).json({ error: 'Invalid activation code' });
        }

        store.subscriptions[normalizedEmail] = {
            ...subscription,
            status: 'active',
            activatedAt: new Date().toISOString(),
            activationCode: null,
            updatedAt: new Date().toISOString()
        };

        upsertSubscriber(store, normalizedEmail, {
            firstName: store.subscriptions[normalizedEmail].firstName,
            lastName: store.subscriptions[normalizedEmail].lastName,
            fullName: store.subscriptions[normalizedEmail].fullName,
            phone: store.subscriptions[normalizedEmail].phone,
            status: 'active',
            subscribedToUpdates: true
        });

        writeSubscriptionStore(store);

        sendWelcomeSubscriberEmail({
            email: normalizedEmail,
            fullName: store.subscriptions[normalizedEmail].fullName
        }).catch((emailError) => {
            console.error('Welcome subscriber email error:', emailError.message);
        });

        return res.json({ success: true, status: 'active', message: 'Subscription activated successfully' });
    } catch (error) {
        console.error('Activation error:', error.message);
        return res.status(500).json({ error: 'Failed to activate subscription', details: error.message });
    }
});

app.get('/api/subscription/status', (req, res) => {
    try {
        const normalizedEmail = normalizeEmail(req.query.email);
        if (!normalizedEmail) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const store = readSubscriptionStore();
        const subscription = store.subscriptions[normalizedEmail];

        if (!subscription) {
            return res.status(404).json({ error: 'No subscription record found' });
        }

        return res.json({
            success: true,
            status: subscription.status,
            paidAt: subscription.paidAt || null,
            activatedAt: subscription.activatedAt || null,
            email: subscription.email,
            fullName: subscription.fullName || '',
            phone: subscription.phone || ''
        });
    } catch (error) {
        console.error('Status check error:', error.message);
        return res.status(500).json({ error: 'Failed to check subscription status', details: error.message });
    }
});

app.post('/api/subscription/resend-code', async (req, res) => {
    try {
        const normalizedEmail = normalizeEmail(req.body.email);
        if (!normalizedEmail) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const store = readSubscriptionStore();
        const subscription = store.subscriptions[normalizedEmail];
        if (!subscription) {
            return res.status(404).json({ error: 'No subscription found for this email' });
        }

        if (subscription.status !== 'paid_pending_activation') {
            return res.status(400).json({ error: 'Activation code can only be resent after payment verification' });
        }

        let activationCode = subscription.activationCode;
        if (!activationCode) {
            activationCode = generateActivationCode(8);
            store.subscriptions[normalizedEmail].activationCode = activationCode;
            store.subscriptions[normalizedEmail].activationCodeIssuedAt = new Date().toISOString();
            store.subscriptions[normalizedEmail].updatedAt = new Date().toISOString();
            writeSubscriptionStore(store);
        }

        await sendActivationCodeEmail({
            email: normalizedEmail,
            fullName: subscription.fullName || 'ExamVerse Learner',
            activationCode
        });

        return res.json({ success: true, message: 'Activation code resent successfully' });
    } catch (error) {
        console.error('Resend activation code error:', error.message);
        return res.status(500).json({ error: 'Failed to resend activation code', details: error.message });
    }
});

app.post('/api/paystack/webhook', async (req, res) => {
    try {
        const secret = process.env.PAYSTACK_WEBHOOK_SECRET || process.env.PAYSTACK_SECRET_KEY;
        if (!secret) {
            return res.status(500).json({ error: 'PAYSTACK_SECRET_KEY or PAYSTACK_WEBHOOK_SECRET is not configured' });
        }

        const signature = req.headers['x-paystack-signature'];
        const expectedSignature = crypto
            .createHmac('sha512', secret)
            .update(req.rawBody || JSON.stringify(req.body || {}))
            .digest('hex');

        if (!signature || signature !== expectedSignature) {
            return res.status(401).json({ error: 'Invalid webhook signature' });
        }

        const event = req.body;
        if (event?.event !== 'charge.success') {
            return res.json({ success: true, ignored: true, event: event?.event || 'unknown' });
        }

        const data = event.data || {};
        const reference = data.reference;
        if (!reference) {
            return res.status(400).json({ error: 'Webhook payload missing reference' });
        }

        const transaction = await verifyPaystackTransactionByReference(reference, process.env.PAYSTACK_SECRET_KEY);
        if (transaction.status === 'success') {
            await finalizeVerifiedPayment({ transaction, reference });
        }

        return res.json({ success: true, processed: true });
    } catch (error) {
        console.error('Paystack webhook error:', error.message);
        return res.status(500).json({ error: 'Webhook processing failed', details: error.message });
    }
});

app.get('/api/subscribers', (req, res) => {
    try {
        const store = readSubscriptionStore();
        const subscribers = Object.values(store.subscribers || {});
        return res.json({
            success: true,
            total: subscribers.length,
            active: subscribers.filter((s) => s.status === 'active').length,
            subscribers
        });
    } catch (error) {
        console.error('Get subscribers error:', error.message);
        return res.status(500).json({ error: 'Failed to load subscribers', details: error.message });
    }
});

app.post('/api/subscribers/broadcast', async (req, res) => {
    try {
        const { subject, message, onlyActive = true } = req.body;
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
