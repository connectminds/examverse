/**
 * ExamVerse Notification Service (Frontend)
 * Handles email subscriptions and notification preferences
 */

const NotificationService = (() => {
    const API_URL = localStorage.getItem('notificationApiUrl') || 'http://localhost:5000/api';

    // ============ Subscribe to Notifications ============
    async function subscribe(email, preferences = {}) {
        try {
            const response = await fetch(`${API_URL}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    preferences: {
                        appUpdates: preferences.appUpdates !== false,
                        examResults: preferences.examResults !== false,
                        reminders: preferences.reminders !== false
                    }
                })
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Subscription failed');

            // Save preferences to localStorage
            localStorage.setItem('notificationPrefs', JSON.stringify({
                email,
                ...preferences,
                subscribedAt: new Date().toISOString()
            }));

            return { success: true, data };
        } catch (error) {
            console.error('Subscription error:', error);
            return { success: false, error: error.message };
        }
    }

    // ============ Send Exam Result Email ============
    async function notifyExamResult(email, examData) {
        try {
            const response = await fetch(`${API_URL}/notify/exam-result`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    examData: {
                        subject: examData.subject || 'Exam',
                        score: examData.score || 0,
                        correct: examData.correct || 0,
                        total: examData.totalQuestions || 0,
                        duration: examData.duration || 0
                    }
                })
            });

            const data = await response.json();

            if (!response.ok) {
                console.warn('Exam result email failed:', data.error);
                // Don't throw - let exam submission succeed even if email fails
                return { success: false, error: data.error };
            }

            console.log('✓ Exam result email sent:', email);
            return { success: true, data };
        } catch (error) {
            console.warn('Exam notification error:', error.message);
            // Silently fail - don't block exam completion
            return { success: false, error: error.message };
        }
    }

    // ============ Send App Update Notification ============
    async function notifyAppUpdate(recipients, updateData) {
        if (!Array.isArray(recipients) || recipients.length === 0) {
            return { success: false, error: 'Recipients list required' };
        }

        try {
            const response = await fetch(`${API_URL}/notify/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recipients,
                    updateData: {
                        version: updateData.version || 'v1.0',
                        title: updateData.title || 'New Update',
                        features: updateData.features || [],
                        improvements: updateData.improvements || []
                    }
                })
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Update notification failed');

            console.log('✓ Update notification sent to', data.successCount, 'recipients');
            return { success: true, data };
        } catch (error) {
            console.error('Update notification error:', error);
            return { success: false, error: error.message };
        }
    }

    // ============ Send Study Reminder ============
    async function sendReminder(email, reminderData = {}) {
        try {
            const response = await fetch(`${API_URL}/notify/reminder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    reminderData: {
                        subject: reminderData.subject || 'Time to Practice!',
                        message: reminderData.message || 'Keep up your studying momentum!',
                        questionCount: reminderData.questionCount || '10'
                    }
                })
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Reminder failed');

            return { success: true, data };
        } catch (error) {
            console.error('Reminder error:', error);
            return { success: false, error: error.message };
        }
    }

    // ============ Get Stored Preferences ============
    function getPreferences() {
        try {
            const stored = localStorage.getItem('notificationPrefs');
            return stored ? JSON.parse(stored) : null;
        } catch (error) {
            console.error('Error reading preferences:', error);
            return null;
        }
    }

    // ============ Update Preferences ============
    function updatePreferences(preferences) {
        try {
            const current = getPreferences() || {};
            const updated = { ...current, ...preferences, updatedAt: new Date().toISOString() };
            localStorage.setItem('notificationPrefs', JSON.stringify(updated));
            return updated;
        } catch (error) {
            console.error('Error updating preferences:', error);
            return null;
        }
    }

    // ============ Check Email Health ============
    async function checkHealth() {
        try {
            const response = await fetch(`${API_URL}/health`);
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            console.warn('Email service health check failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    // ============ Public API ============
    return {
        subscribe,
        notifyExamResult,
        notifyAppUpdate,
        sendReminder,
        getPreferences,
        updatePreferences,
        checkHealth,
        setApiUrl: (url) => localStorage.setItem('notificationApiUrl', url)
    };
})();

// ============ Auto-send Exam Result Email ============
// Hook into report.js to send exam result emails
function autoNotifyExamResult() {
    try {
        const prefs = NotificationService.getPreferences();
        if (!prefs?.email || !prefs?.examResults) {
            console.log('ℹ️  Exam result emails not enabled');
            return;
        }

        const examResult = {
            subject: localStorage.getItem('selectedSubject') || 'Exam',
            score: parseInt(document.getElementById('scorePercentage')?.textContent) || 0,
            correct: parseInt(document.getElementById('correct')?.textContent) || 0,
            totalQuestions: parseInt(document.getElementById('total')?.textContent) || 0,
            duration: document.getElementById('timeTaken')?.textContent || '00:00'
        };

        NotificationService.notifyExamResult(prefs.email, examResult)
            .then(result => {
                if (result.success) {
                    console.log('✓ Exam result email sent');
                }
            });
    } catch (error) {
        console.warn('Could not auto-notify exam result:', error.message);
    }
}

// Make notification service globally accessible
window.NotificationService = NotificationService;
