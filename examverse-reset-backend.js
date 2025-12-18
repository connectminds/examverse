// examverse-reset-backend.js
require('dotenv').config();
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = (process.env.BASE_URL || `http://localhost:${PORT}`).replace(/\/$/, '');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SQLite database (same folder)
const db = new sqlite3.Database('examverse.sqlite', err => {
  if(err) return console.error('DB failed:', err);
  console.log('SQLite DB connected.');
});

// Create tables if not exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password_hash TEXT,
    created_at INTEGER DEFAULT (strftime('%s','now'))
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS reset_tokens (
    token TEXT PRIMARY KEY,
    user_id INTEGER,
    expires_at INTEGER,
    created_at INTEGER DEFAULT (strftime('%s','now')),
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
  )`);
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || '',
  port: parseInt(process.env.SMTP_PORT || '587',10),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  }
});

// Send reset email
async function sendResetEmail(toEmail, token){
  const resetUrl = `${BASE_URL}/reset-password.html?token=${token}`;
  const html = `
    <div style="font-family:system-ui; color:#0b1b2b;">
      <h2 style="color:#004aad;">ExamVerse — Password Reset</h2>
      <p>Click the button below to reset your password. The link expires in 60 minutes.</p>
      <p><a href="${resetUrl}" style="display:inline-block;padding:10px 16px;border-radius:8px;background:#004aad;color:#fff;text-decoration:none;">Reset Password</a></p>
      <p>If you did not request this, ignore this email.</p>
      <p>— ExamVerse Team</p>
    </div>
  `;
  return transporter.sendMail({
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: toEmail,
    subject:'ExamVerse — Password Reset',
    html
  });
}

// API: forgot password
app.post('/api/forgot-password', (req,res)=>{
  const email = (req.body.email || '').toLowerCase().trim();
  if(!email) return res.status(400).json({message:'Email is required'});
  
  db.get(`SELECT id FROM users WHERE email=?`, [email], (err,row)=>{
    const genericResponse = {message:'If an account exists, a reset link has been sent.'};
    if(err) return res.status(500).json({message:'Server error'});
    if(!row) return res.json(genericResponse);
    
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = Math.floor(Date.now()/1000) + 3600; // 1 hour
    db.run(`INSERT INTO reset_tokens(token,user_id,expires_at) VALUES(?,?,?)`, [token,row.id,expiresAt], async (e)=>{
      if(e) return res.status(500).json({message:'Server error'});
      try{
        await sendResetEmail(email, token);
        res.json(genericResponse);
      }catch(err){
        db.run(`DELETE FROM reset_tokens WHERE token=?`, [token]);
        res.status(500).json({message:'Failed to send email'});
      }
    });
  });
});

// API: reset password
app.post('/api/reset-password',(req,res)=>{
  const {token,newPassword} = req.body;
  if(!token || !newPassword) return res.status(400).json({message:'Token & new password required'});

  const now = Math.floor(Date.now()/1000);
  db.get(`SELECT * FROM reset_tokens WHERE token=?`, [token], (err,row)=>{
    if(err) return res.status(500).json({message:'Server error'});
    if(!row || row.expires_at<now) return res.status(400).json({message:'Invalid or expired token'});

    bcrypt.hash(newPassword,10,(err,hash)=>{
      if(err) return res.status(500).json({message:'Server error'});
      db.run(`UPDATE users SET password_hash=? WHERE id=?`, [hash,row.user_id], function(e){
        if(e) return res.status(500).json({message:'Server error'});
        db.run(`DELETE FROM reset_tokens WHERE token=?`, [token]);
        res.json({message:'Password successfully reset'});
      });
    });
  });
});

// Start server
app.listen(PORT,()=>console.log(`ExamVerse reset backend running at ${BASE_URL}`));
