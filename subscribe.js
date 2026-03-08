document.addEventListener('DOMContentLoaded', () => {
    const authNotice = document.getElementById('authNotice');
    const isLoggedIn = !!localStorage.getItem('examVerseLoggedIn');
    if (authNotice) {
        authNotice.hidden = isLoggedIn;
    }

    const navToggle = document.getElementById('nav-toggle');
    const primaryNav = document.getElementById('primary-nav');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            primaryNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', primaryNav.classList.contains('open'));
        });

        primaryNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                primaryNav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const oneTimeSubscribe = document.getElementById('oneTimeSubscribe');
    const paymentModal = document.getElementById('paymentModal');
    const paymentBackdrop = document.getElementById('paymentModalBackdrop');
    const closePaymentModal = document.getElementById('closePaymentModal');
    const copyAccountNumber = document.getElementById('copyAccountNumber');
    const accountNumberText = document.getElementById('accountNumberText');

    if (oneTimeSubscribe && paymentModal) {
        oneTimeSubscribe.addEventListener('click', (event) => {
            event.preventDefault();
            openPaymentModal();
        });
    }

    if (paymentBackdrop) {
        paymentBackdrop.addEventListener('click', closePaymentDialog);
    }

    if (closePaymentModal) {
        closePaymentModal.addEventListener('click', closePaymentDialog);
    }

    if (copyAccountNumber && accountNumberText) {
        copyAccountNumber.addEventListener('click', async () => {
            const accountNumber = accountNumberText.textContent.trim();
            try {
                await navigator.clipboard.writeText(accountNumber);
                setPaymentFeedback('Account number copied successfully.');
            } catch (error) {
                setPaymentFeedback('Unable to copy automatically. Please copy the account number manually.');
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePaymentDialog();
        }
    });
});

function openPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    if (!paymentModal) return;
    paymentModal.hidden = false;
    document.body.style.overflow = 'hidden';
    setPaymentFeedback('Payment details ready. Send confirmation on WhatsApp after transfer.');
    registerPendingSubscription();
}

function closePaymentDialog() {
    const paymentModal = document.getElementById('paymentModal');
    if (!paymentModal || paymentModal.hidden) return;
    paymentModal.hidden = true;
    document.body.style.overflow = '';
}

function setPaymentFeedback(message) {
    const paymentFeedback = document.getElementById('paymentFeedback');
    if (paymentFeedback) {
        paymentFeedback.textContent = message;
    }
}

function startAccess() {
    openPaymentModal();
}

// Toggle FAQ sections
function toggleFaq(element) {
    const faqItem = element.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    
    // Close other FAQ items if desired (optional)
    // document.querySelectorAll('.faq-item').forEach(item => {
    //     if (item !== faqItem) {
    //         item.classList.remove('open');
    //         item.querySelector('.faq-answer').classList.remove('show');
    //     }
    // });
    
    faqItem.classList.toggle('open');
    answer.classList.toggle('show');
}

async function registerPendingSubscription() {
    try {
        const apiBase = localStorage.getItem('notificationApiUrl') || 'http://localhost:5000/api';
        const userRaw = localStorage.getItem('examVerseUser');
        const user = userRaw ? JSON.parse(userRaw) : null;
        const email = (user?.email || '').trim();
        const deviceId = await resolveClientDeviceId();
        const platform = window.examverseDesktop?.isDesktopApp
            ? `desktop-${window.examverseDesktop?.platform || 'unknown'}`
            : navigator.platform || 'web';
        const deviceLabel = window.examverseDesktop?.isDesktopApp
            ? `Desktop App (${window.examverseDesktop?.platform || 'unknown'})`
            : `${navigator.userAgent || 'Web Browser'}`;

        if (!email) {
            setPaymentFeedback('Login with your email to allow activation after payment confirmation.');
            return;
        }

        if (!deviceId) {
            setPaymentFeedback('Unable to identify this device. Please restart the app and try again.');
            return;
        }

        const response = await fetch(`${apiBase}/subscribers/request-access`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                firstName: user?.firstName || '',
                lastName: user?.lastName || '',
                fullName: user?.name || '',
                phone: user?.phone || '',
                deviceId,
                deviceLabel,
                platform,
                appChannel: window.examverseDesktop?.isDesktopApp ? 'desktop' : 'web'
            })
        });

        const data = await response.json();
        if (!response.ok || !data.success) {
            throw new Error(data.error || 'Failed to register payment request');
        }

        if (data.status === 'pending') {
            setPaymentFeedback('Payment request recorded. Activation will be enabled once payment is confirmed.');
        }
    } catch (error) {
        console.error('Register pending subscription error:', error);
        setPaymentFeedback('Could not auto-record request. Still send payment proof on WhatsApp for activation.');
    }
}

async function resolveClientDeviceId() {
    const existing = localStorage.getItem('examVerseDeviceId');
    if (existing) return existing;

    if (window.examverseDesktop?.isDesktopApp && typeof window.examverseDesktop.getInstallId === 'function') {
        try {
            const installId = await window.examverseDesktop.getInstallId();
            if (installId) {
                localStorage.setItem('examVerseDeviceId', installId);
                return installId;
            }
        } catch (error) {
            console.warn('Unable to resolve desktop install id', error);
        }
    }

    const fallbackId = `web-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem('examVerseDeviceId', fallbackId);
    return fallbackId;
}