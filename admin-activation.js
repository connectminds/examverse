const API_BASE = localStorage.getItem('notificationApiUrl') || 'http://localhost:5000/api';

const adminKeyInput = document.getElementById('adminKey');
const adminIdentityInput = document.getElementById('adminIdentity');
const saveAdminKeyBtn = document.getElementById('saveAdminKey');
const refreshBtn = document.getElementById('refreshList');
const subscribersList = document.getElementById('subscribersList');
const feedbackEl = document.getElementById('feedback');
const manualForm = document.getElementById('manualForm');
const manualEmail = document.getElementById('manualEmail');
const manualStatus = document.getElementById('manualStatus');

adminKeyInput.value = sessionStorage.getItem('examVerseAdminKey') || '';
adminIdentityInput.value = sessionStorage.getItem('examVerseAdminIdentity') || '';

saveAdminKeyBtn.addEventListener('click', () => {
  const key = adminKeyInput.value.trim();
  const identity = adminIdentityInput.value.trim();
  sessionStorage.setItem('examVerseAdminKey', key);
  sessionStorage.setItem('examVerseAdminIdentity', identity);
  setFeedback('Admin key saved for this session.');
  loadSubscribers();
});

refreshBtn.addEventListener('click', () => {
  loadSubscribers();
});

manualForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = manualEmail.value.trim();
  const status = manualStatus.value;
  const ok = await updateStatus(email, status);
  if (ok) {
    manualForm.reset();
    loadSubscribers();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadSubscribers();
});

async function loadSubscribers() {
  const adminKey = adminKeyInput.value.trim();
  if (!adminKey) {
    subscribersList.innerHTML = '<p>Enter your admin key to load subscribers.</p>';
    setFeedback('Admin key required to view subscriber records.', true);
    return;
  }

  subscribersList.innerHTML = 'Loading subscribers...';
  try {
    const response = await fetch(`${API_BASE}/subscribers`, {
      headers: { 'x-admin-key': adminKey }
    });
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Failed to load subscribers');
    }

    const subscribers = Array.isArray(data.subscribers) ? data.subscribers : [];
    if (subscribers.length === 0) {
      subscribersList.innerHTML = '<p>No subscribers found yet.</p>';
      return;
    }

    subscribersList.innerHTML = subscribers
      .sort((a, b) => (a.email || '').localeCompare(b.email || ''))
      .map((subscriber) => {
        const status = (subscriber.status || 'inactive').toLowerCase();
        const safeStatus = ['active', 'pending', 'inactive'].includes(status) ? status : 'inactive';
        const fullName = subscriber.fullName || `${subscriber.firstName || ''} ${subscriber.lastName || ''}`.trim() || 'No name';

        return `
          <article class="subscriber-card">
            <div class="subscriber-meta">
              <div class="subscriber-email">${escapeHtml(subscriber.email || '')}</div>
              <div class="subscriber-name">${escapeHtml(fullName)}</div>
            </div>
            <div>
              <span class="status-pill ${safeStatus}">${safeStatus}</span>
            </div>
            <div class="card-actions">
              <button class="small-btn" type="button" data-email="${escapeHtml(subscriber.email || '')}" data-status="active">Activate</button>
              <button class="small-btn" type="button" data-email="${escapeHtml(subscriber.email || '')}" data-status="inactive">Deactivate</button>
            </div>
          </article>
        `;
      })
      .join('');

    subscribersList.querySelectorAll('button[data-email]').forEach((button) => {
      button.addEventListener('click', async () => {
        const email = button.getAttribute('data-email') || '';
        const status = button.getAttribute('data-status') || 'inactive';
        const ok = await updateStatus(email, status);
        if (ok) loadSubscribers();
      });
    });
  } catch (error) {
    subscribersList.innerHTML = '<p>Unable to load subscribers.</p>';
    setFeedback(error.message, true);
  }
}

async function updateStatus(email, status) {
  const adminKey = adminKeyInput.value.trim();
  const adminIdentity = adminIdentityInput.value.trim() || 'owner';
  if (!adminKey) {
    setFeedback('Enter admin key first.', true);
    return false;
  }

  sessionStorage.setItem('examVerseAdminIdentity', adminIdentity);

  try {
    const response = await fetch(`${API_BASE}/subscribers/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, status, adminKey, adminIdentity })
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Status update failed');
    }

    setFeedback(`Updated ${email} to ${status}.`);
    return true;
  } catch (error) {
    setFeedback(error.message, true);
    return false;
  }
}

function setFeedback(message, isError = false) {
  feedbackEl.textContent = message;
  feedbackEl.style.color = isError ? '#fca5a5' : '#93c5fd';
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
