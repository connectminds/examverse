document.addEventListener('DOMContentLoaded', () => {
    const authNotice = document.getElementById('authNotice');
    const isLoggedIn = !!localStorage.getItem('examVerseLoggedIn');
    if (authNotice) {
        authNotice.hidden = isLoggedIn;
    }

    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const primaryNav = document.getElementById('primary-nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            primaryNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', primaryNav.classList.contains('open'));
        });
    }

    // Close mobile nav when link clicked
    if (primaryNav) {
        primaryNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                primaryNav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Log user subscription data
    const userData = localStorage.getItem('examVerseUser');
    console.log('User subscribed:', userData);

    handlePaystackCallback();
});

const ONE_TIME_PLAN = {
    code: 'lifetime',
    name: 'ExamVerse Lifetime Access',
    price: 5999,
    currency: 'NGN'
};

const API_BASE_URL = localStorage.getItem('examVerseApiBaseUrl') || 'http://localhost:5000';

function showCenteredAlert(message, options = {}) {
    const { type = 'info', redirectTo = '', delay = 1800 } = options;

    const existing = document.getElementById('centerAlertOverlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'centerAlertOverlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.55)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '99999';

    const card = document.createElement('div');
    card.style.maxWidth = '520px';
    card.style.width = '92%';
    card.style.padding = '22px';
    card.style.borderRadius = '14px';
    card.style.textAlign = 'center';
    card.style.fontFamily = 'Inter, sans-serif';
    card.style.fontWeight = '600';
    card.style.lineHeight = '1.5';
    card.style.color = '#fff';
    card.style.border = '1px solid rgba(255,255,255,0.2)';
    card.style.backdropFilter = 'blur(8px)';
    card.style.background = type === 'error'
        ? 'linear-gradient(135deg, rgba(220,38,38,0.92), rgba(185,28,28,0.92))'
        : 'linear-gradient(135deg, rgba(16,185,129,0.92), rgba(5,150,105,0.92))';
    card.textContent = message;

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.remove();
        if (redirectTo) {
            window.location.href = redirectTo;
        }
    }, delay);
}

function getCurrentUser() {
    const raw = localStorage.getItem('examVerseUser');
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

async function handlePaystackCallback() {
    const params = new URLSearchParams(window.location.search);
    const reference = params.get('reference') || params.get('trxref');

    if (!reference) {
        return;
    }

    try {
        const verifyResponse = await fetch(`${API_BASE_URL}/api/paystack/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reference })
        });

        const verifyData = await verifyResponse.json();
        if (!verifyResponse.ok || !verifyData.success) {
            throw new Error(verifyData.error || verifyData.details || 'Payment verification failed');
        }

        localStorage.setItem('subscriptionPlan', ONE_TIME_PLAN.code);
        localStorage.setItem('subscriptionType', 'one-time');
        localStorage.setItem('subscriptionPrice', ONE_TIME_PLAN.price.toString());
        localStorage.setItem('subscriptionStatus', 'paid_pending_activation');
        localStorage.setItem('activationRequired', '1');
        localStorage.setItem('dashboardUnlocked', '0');
        localStorage.removeItem('subscribed');

        showCenteredAlert(
            'Payment confirmed. Your activation code has been sent to your email. Enter it on the home page to unlock your dashboard.',
            { type: 'success', redirectTo: 'index.html?activation=pending', delay: 2200 }
        );
    } catch (error) {
        console.error('Payment verification error:', error);
        showCenteredAlert(`We could not verify your payment: ${error.message}`, { type: 'error', delay: 2400 });
    }
}

async function subscribeOneTimePlan() {
    const user = getCurrentUser();
    const userEmail = user?.email;

    if (!userEmail) {
        showCenteredAlert('Please log in with a valid email before making payment.', {
            type: 'error',
            redirectTo: 'login.html?next=subscribe',
            delay: 1800
        });
        return;
    }

    const subscribeButton = document.getElementById('oneTimeSubscribe');
    if (subscribeButton) {
        subscribeButton.disabled = true;
        subscribeButton.textContent = 'Processing...';
    }

    localStorage.setItem('subscriptionPlan', ONE_TIME_PLAN.code);
    localStorage.setItem('subscriptionType', 'one-time');
    localStorage.setItem('subscriptionDate', new Date().toISOString());
    localStorage.setItem('subscriptionPrice', ONE_TIME_PLAN.price.toString());
    localStorage.setItem('subscriptionStatus', 'initializing_payment');

    try {
        const initializeResponse = await fetch(`${API_BASE_URL}/api/paystack/initialize`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: userEmail,
                amount: ONE_TIME_PLAN.price,
                firstName: user?.firstName || '',
                lastName: user?.lastName || '',
                fullName: user?.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : (user?.name || ''),
                phone: user?.phone || ''
            })
        });

        const initializeData = await initializeResponse.json();
        if (!initializeResponse.ok || !initializeData.success) {
            throw new Error(initializeData.error || initializeData.details || 'Payment initialization failed');
        }

        localStorage.setItem('subscriptionStatus', 'payment_redirected');
        localStorage.setItem('subscriptionReference', initializeData.reference || '');
        window.location.href = initializeData.authorizationUrl;
    } catch (error) {
        console.error('Payment initialization error:', error);
        localStorage.setItem('subscriptionStatus', 'payment_failed');
        showCenteredAlert(`Unable to start payment: ${error.message}`, { type: 'error', delay: 2400 });
        if (subscribeButton) {
            subscribeButton.disabled = false;
            subscribeButton.textContent = 'Pay One-Time';
        }
    }
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