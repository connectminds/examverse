# ExamVerse Email Notification Service

Complete email notification system for ExamVerse - handles app updates, exam results, and study reminders.

## Table of Contents
- [Features](#features)
- [Quick Start](#quick-start)
- [Email Providers](#email-providers)
- [API Endpoints](#api-endpoints)
- [Frontend Integration](#frontend-integration)
- [Troubleshooting](#troubleshooting)

## Features

✅ **App Update Notifications** - Announce new features and improvements to users
✅ **Exam Result Emails** - Automatically send exam results with detailed analysis
✅ **Study Reminders** - Optional periodic reminders to keep students motivated
✅ **Email Preferences** - Users can customize notification settings
✅ **Multiple Providers** - Support for Gmail, SendGrid, Mailgun, Office365, etc.
✅ **Professional Templates** - Beautiful, responsive HTML email templates
✅ **Error Handling** - Graceful fallbacks if email service unavailable

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Service

Copy `.env.example` to `.env` and add your email credentials:

```bash
# Copy template
cp .env.example .env

# Edit with your credentials
# nano .env  (or use your editor)
```

### 3. Gmail Setup (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer"
4. Copy the 16-character password
5. Add to `.env`:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx
   ```

### 4. Start the Server

```bash
npm start
```

Server will start on `http://localhost:5000`

### 5. Verify Email Service

Visit: `http://localhost:5000/api/health`

Should return: `{"status":"ok","timestamp":"2026-03-02T10:00:00.000Z"}`

## Email Providers

### Gmail (Recommended for Testing)
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=app-specific-password
```
**Setup**: Enable 2FA + Generate App Password

### SendGrid
```
EMAIL_SERVICE=SendGrid
EMAIL_USER=apikey
EMAIL_PASS=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
**Setup**: https://sendgrid.com/docs/for-developers/sending-email/

### Mailgun
```
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=postmaster@yourdomain.mailgun.org
EMAIL_PASS=your-mailgun-password
```

### Office365 / Outlook
```
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@company.com
EMAIL_PASS=your-password
```

### Alternatives
- **Resend**: For modern email infrastructure
- **Nodemailer SMTP**: Custom SMTP configuration
- **AWS SES**: Using Nodemailer's SES transport

## API Endpoints

### Health Check
```
GET /api/health
Response: {"status":"ok","timestamp":"..."}
```

### Subscribe to Notifications
```
POST /api/subscribe

Body: {
  "email": "user@example.com",
  "preferences": {
    "appUpdates": true,
    "examResults": true,
    "reminders": true
  }
}

Response: {
  "success": true,
  "message": "Subscription confirmed!",
  "email": "user@example.com"
}
```

### Send App Update Email
```
POST /api/notify/update

Body: {
  "recipients": ["user1@example.com", "user2@example.com"],
  "updateData": {
    "version": "v2.1.0",
    "title": "Major Features Release",
    "features": [
      {
        "title": "Dark Mode Support",
        "description": "New dark theme for comfortable night studying"
      }
    ],
    "improvements": [
      "Faster exam loading",
      "Better question explanations"
    ]
  }
}

Response: {
  "success": true,
  "message": "Sent to 2/2 recipients",
  "successCount": 2,
  "failureCount": 0
}
```

### Send Exam Result Email
```
POST /api/notify/exam-result

Body: {
  "email": "student@example.com",
  "examData": {
    "subject": "Mathematics 2024",
    "score": 85,
    "correct": 68,
    "total": 80,
    "duration": 45
  }
}

Response: {
  "success": true,
  "message": "Exam result email sent successfully",
  "email": "student@example.com"
}
```

### Send Study Reminder
```
POST /api/notify/reminder

Body: {
  "email": "student@example.com",
  "reminderData": {
    "subject": "Time for Your Daily Practice!",
    "message": "You haven't practiced in 2 days. Let's get back on track!",
    "questionCount": "10"
  }
}

Response: {
  "success": true,
  "message": "Reminder email sent successfully",
  "email": "student@example.com"
}
```

## Frontend Integration

### 1. Add Notification Service Script

In your HTML pages (e.g., `report.html`):

```html
<script src="notification-service.js"></script>
```

### 2. Subscribe User to Notifications

```javascript
// Subscribe with preferences
const result = await NotificationService.subscribe(
  'user@example.com',
  {
    appUpdates: true,
    examResults: true,
    reminders: true
  }
);

if (result.success) {
  console.log('Subscribed!');
}
```

### 3. Send Exam Result Email

```javascript
// After exam completion
const result = await NotificationService.notifyExamResult(
  'student@example.com',
  {
    subject: 'Mathematics 2024',
    score: 85,
    correct: 68,
    totalQuestions: 80,
    duration: 45
  }
);
```

### 4. Settings Page

Users can manage preferences at: `/notification-settings.html`

Features:
- Subscribe/unsubscribe
- Toggle notifications by type
- Update email address
- Test email service connection

## Troubleshooting

### "Email service not configured"

**Problem**: Server shows warning about email credentials

**Solution**:
1. Create `.env` file (copy from `.env.example`)
2. Add `EMAIL_USER` and `EMAIL_PASS`
3. Restart server

### "Failed to send email"

**Problem**: Email send fails, but no error details

**Solution**:
1. Check `.env` credentials
2. For Gmail: Verify app password (not regular password)
3. For Office365: Enable "Less secure apps" or use app password
4. Test connection: Visit `/api/health`

### "Connection timeout"

**Problem**: Frontend can't reach email service

**Solution**:
1. Verify server is running: `npm start`
2. Check URL in notification settings matches your server
3. If deployed, update API URL to production server
4. Check firewall/CORS settings if remote server

### "Port 5000 already in use"

**Problem**: Another process uses port 5000

**Solution**:
```bash
# Use different port
PORT=5001 npm start

# Or kill existing process
# Windows: netstat -ano | findstr :5000
# Then: taskkill /PID <PID> /F
```

## Environment Variables Reference

```
# Server Port
PORT=5000
NODE_ENV=development

# Email Service (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Or SMTP Custom
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false

# Application URLs  
APP_URL=https://examverse.yourapp.com
UNSUBSCRIBE_URL=https://examverse.yourapp.com/unsubscribe
```

## Deployment

### Heroku

```bash
# Create Heroku app
heroku create examverse-email

# Set environment variables
heroku config:set EMAIL_USER=your@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set APP_URL=https://yourapp.com

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Digital Ocean / AWS / VPS

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs

# Clone and setup
git clone <your-repo>
cd examverse
npm install

# Create .env file with credentials

# Run with PM2 for persistence
npm install -g pm2
pm2 start server.js --name "examverse-email"
pm2 startup
pm2 save
```

## Security Considerations

✓ **Never commit `.env` file** - Add to `.gitignore`
✓ **Use app-specific passwords** - Not account passwords
✓ **Restrict API endpoints** - Add authentication if public server
✓ **Rate limiting** - Implement to prevent abuse
✓ **CORS** - Currently allows all origins, restrict in production

## Support

For issues or questions:
1. Check `.env` configuration
2. Verify email service credentials
3. Check server logs: `npm start` (development)
4. Test API endpoints manually: `curl http://localhost:5000/api/health`
5. Contact support with error message

---

**Built with ❤️ for ExamVerse | ConnectMinds IT Tech**
