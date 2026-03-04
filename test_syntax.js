// Test script to check for syntax errors
const fs = require('fs');

try {
    const jsCode = fs.readFileSync('subjects.js', 'utf-8');
    const htmlCode = fs.readFileSync('subject.html', 'utf-8');
    
    console.log('✓ Files read successfully\n');
    
    // Check for key functions
    const checks = [
        { name: 'proceedToExam function', pattern: /function\s+proceedToExam\s*\(\s*\)/gm },
        { name: 'Button with onclick', pattern: /onclick="proceedToExam\(\)"/gm },
        { name: 'localStorage.setItem calls', pattern: /localStorage\.setItem\(/gm },
        { name: 'window.location.href', pattern: /window\.location\.href\s*=\s*"exam\.html"/gm },
        { name: 'Modal structure in HTML', pattern: /id="questionCountModal"/gm }
    ];
    
    checks.forEach(check => {
        const jsMatch = jsCode.match(check.pattern);
        const htmlMatch = htmlCode.match(check.pattern);
        const found = jsMatch || htmlMatch;
        console.log(`${found ? '✓' : '✗'} ${check.name}: ${found ? 'Found' : 'NOT FOUND'}`);
    });
    
} catch (error) {
    console.error('Error:', error.message);
}
