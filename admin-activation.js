document.addEventListener('DOMContentLoaded', () => {
  const adminKey = document.getElementById('adminKey');
  const adminIdentity = document.getElementById('adminIdentity');
  const saveAdminKeyBtn = document.getElementById('saveAdminKey');
  const loadUsersBtn = document.getElementById('loadUsers');
  const messageEl = document.getElementById('message');
  const statsSection = document.getElementById('statsSection');
  const tableSection = document.getElementById('tableSection');
  const emptyState = document.getElementById('emptyState');
  const loadingState = document.getElementById('loadingState');
  const usersBody = document.getElementById('usersBody');

  adminKey.value = sessionStorage.getItem('examVerseAdminKey') || '';
  adminIdentity.value = sessionStorage.getItem('examVerseAdminIdentity') || '';

  let currentUsers = [];

  saveAdminKeyBtn.addEventListener('click', () => {
    const key = adminKey.value.trim();
    const identity = adminIdentity.value.trim();

    sessionStorage.setItem('examVerseAdminKey', key);
    sessionStorage.setItem('examVerseAdminIdentity', identity);
    showMessage('Admin key saved for this session.', 'success');
  });

  loadUsersBtn.addEventListener('click', loadUsers);

  adminKey.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      loadUsers();
    }
  });

  async function loadUsers() {
    const key = adminKey.value.trim();
    if (!key) {
      showMessage('Please enter admin key', 'error');
      return;
    }

    loadingState.classList.remove('hidden');
    statsSection.classList.add('hidden');
    tableSection.classList.add('hidden');
    emptyState.classList.add('hidden');

    try {
      const response = await fetch('/api/users', {
        headers: { 'X-Admin-Key': key }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to load users');
      }

      currentUsers = data.users || [];
      // Merge locally persisted users (offline registrations) so admin can see them
      try{
        const localUsers = JSON.parse(localStorage.getItem('examVerseUsers') || '[]');
        if(Array.isArray(localUsers) && localUsers.length){
          // add only those not present (match by email or userId)
          localUsers.forEach(lu => {
            const exists = currentUsers.some(su => (su.email && lu.email && su.email === lu.email) || (su.userId && lu.userId && su.userId === lu.userId));
            if(!exists) currentUsers.push(lu);
          });
        }
      }catch(e){ console.warn('Failed merging local users', e); }

      // derive stats from returned data if available, otherwise compute from merged list
      const stats = data.stats || {
        total: currentUsers.length,
        active: currentUsers.filter(u=>u.status==='active').length,
        pending: currentUsers.filter(u=>u.status==='pending').length,
        inactive: currentUsers.filter(u=>u.status==='inactive').length
      };
      updateUI(stats);
      loadingState.classList.add('hidden');

      if (currentUsers.length === 0) {
        emptyState.classList.remove('hidden');
      } else {
        tableSection.classList.remove('hidden');
        renderUsers();
      }

      showMessage(`Loaded ${currentUsers.length} users`, 'info');
    } catch (error) {
      loadingState.classList.add('hidden');

      // Offline fallback: load users from localStorage if available
      try{
        const localUsers = JSON.parse(localStorage.getItem('examVerseUsers') || '[]');
        if(localUsers && localUsers.length){
          currentUsers = localUsers;
          const stats = {
            total: currentUsers.length,
            active: currentUsers.filter(u=>u.status==='active').length,
            pending: currentUsers.filter(u=>u.status==='pending').length,
            inactive: currentUsers.filter(u=>u.status==='inactive').length
          };
          updateUI(stats);
          loadingState.classList.add('hidden');
          tableSection.classList.remove('hidden');
          renderUsers();
          showMessage(`Loaded ${currentUsers.length} local users (offline)`, 'info');
          return;
        }
      }catch(e){ console.warn('Local users parse failed', e); }

      showMessage(error.message, 'error');
    }
  }

  function updateUI(stats) {
    document.getElementById('statTotal').textContent = stats.total;
    document.getElementById('statActive').textContent = stats.active;
    document.getElementById('statPending').textContent = stats.pending;
    document.getElementById('statInactive').textContent = stats.inactive;
    statsSection.classList.remove('hidden');
  }

  function renderUsers() {
    usersBody.innerHTML = '';

    currentUsers.forEach(user => {
      const row = document.createElement('tr');
      const statusClass = `status-${user.status}`;
      const isActive = user.status === 'active';

      row.innerHTML = `
        <td class="user-id">${escapeHtml(user.userId)}</td>
        <td>${escapeHtml(user.firstName)}</td>
        <td>${escapeHtml(user.lastName)}</td>
        <td>${escapeHtml(user.email)}</td>
        <td>${escapeHtml(user.classLevel)}</td>
        <td>${escapeHtml(user.phone || '-')}</td>
        <td>
          <span class="status-badge ${statusClass}">
            ${user.status.charAt(0).toUpperCase() + user.status.slice(1)}
          </span>
        </td>
        <td>${formatDate(user.createdAt)}</td>
        <td>
          <div class="action-cell">
            <button class="btn-activate" ${isActive ? 'disabled' : ''} onclick="activateUser('${escapeAttribute(user.email)}')">
              ${isActive ? '✓ Active' : 'Activate'}
            </button>
            ${isActive ? `<button class="btn-deactivate" onclick="deactivateUser('${escapeAttribute(user.email)}')">Deactivate</button>` : ''}
          </div>
        </td>
      `;

      usersBody.appendChild(row);
    });
  }

  // Keep localStorage single-user and users-array in sync when admin updates status
  function updateLocalUserCopies(email, updates){
    try{
      // update array
      const local = JSON.parse(localStorage.getItem('examVerseUsers') || '[]');
      let changed = false;
      if(Array.isArray(local)){
        const idx = local.findIndex(u => u.email && u.email.toLowerCase() === email.toLowerCase());
        if(idx !== -1){
          local[idx] = Object.assign({}, local[idx], updates);
          localStorage.setItem('examVerseUsers', JSON.stringify(local));
          changed = true;
        }
      }

      // update single stored user if it matches
      const singleRaw = localStorage.getItem('examVerseUser');
      if(singleRaw){
        const single = JSON.parse(singleRaw);
        if(single && single.email && single.email.toLowerCase() === email.toLowerCase()){
          const merged = Object.assign({}, single, updates);
          localStorage.setItem('examVerseUser', JSON.stringify(merged));
          changed = true;
        }
      }

      return changed;
    }catch(e){ console.warn('updateLocalUserCopies failed', e); return false; }
  }

  window.activateUser = async (email) => {
    const key = adminKey.value.trim();
    const identity = adminIdentity.value.trim() || 'admin';

    if (!key) {
      showMessage('Please enter admin key', 'error');
      return;
    }

    try {
      const response = await fetch('/api/users/activate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Key': key
        },
        body: JSON.stringify({ email, adminKey: key, adminIdentity: identity })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Activation failed');
      }

      const user = currentUsers.find(u => u.email === email);
      if (user) {
        user.status = 'active';
        user.activatedAt = data.user.activatedAt;
        user.activatedBy = data.user.activatedBy;
      }

      // keep local copies in sync
      try{ updateLocalUserCopies(email, { status: 'active', activatedAt: data.user.activatedAt, activatedBy: data.user.activatedBy }); }catch(e){}

      renderUsers();
      showMessage(`User ${email} activated successfully`, 'success');
    } catch (error) {
      // Offline fallback: update localStorage users list
      try{
        const local = JSON.parse(localStorage.getItem('examVerseUsers') || '[]');
        const idx = local.findIndex(u => u.email === email);
        if(idx !== -1){
          local[idx].status = 'active';
          local[idx].activatedAt = new Date().toISOString();
          local[idx].activatedBy = identity;
          localStorage.setItem('examVerseUsers', JSON.stringify(local));
          const user = currentUsers.find(u => u.email === email);
          if(user) user.status = 'active';
          // also update single stored user if present
          try{ updateLocalUserCopies(email, { status: 'active', activatedAt: local[idx].activatedAt, activatedBy: identity }); }catch(e){}
          renderUsers();
          showMessage(`User ${email} activated (offline)`, 'success');
          return;
        }
      }catch(e){ console.warn('Offline activate failed', e); }

      showMessage(error.message, 'error');
    }
  };

  window.deactivateUser = async (email) => {
    const key = adminKey.value.trim();
    const identity = adminIdentity.value.trim() || 'admin';

    if (!confirm(`Deactivate user ${email}? They won't be able to login.`)) {
      return;
    }

    try {
      const response = await fetch('/api/users/deactivate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Key': key
        },
        body: JSON.stringify({ email, adminKey: key, adminIdentity: identity })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Deactivation failed');
      }

      const user = currentUsers.find(u => u.email === email);
      if (user) {
        user.status = 'inactive';
        user.deactivatedAt = data.user.deactivatedAt;
        user.deactivatedBy = data.user.deactivatedBy;
      }

      // keep local copies in sync
      try{ updateLocalUserCopies(email, { status: 'inactive', deactivatedAt: data.user.deactivatedAt, deactivatedBy: data.user.deactivatedBy }); }catch(e){}

      renderUsers();
      showMessage(`User ${email} deactivated successfully`, 'success');
    } catch (error) {
      // Offline fallback: update localStorage users list
      try{
        const local = JSON.parse(localStorage.getItem('examVerseUsers') || '[]');
        const idx = local.findIndex(u => u.email === email);
        if(idx !== -1){
          local[idx].status = 'inactive';
          local[idx].deactivatedAt = new Date().toISOString();
          local[idx].deactivatedBy = identity;
          localStorage.setItem('examVerseUsers', JSON.stringify(local));
          const user = currentUsers.find(u => u.email === email);
          if(user) user.status = 'inactive';
          try{ updateLocalUserCopies(email, { status: 'inactive', deactivatedAt: local[idx].deactivatedAt, deactivatedBy: identity }); }catch(e){}
          renderUsers();
          showMessage(`User ${email} deactivated (offline)`, 'success');
          return;
        }
      }catch(e){ console.warn('Offline deactivate failed', e); }

      showMessage(error.message, 'error');
    }
  };

  function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;

    if (type !== 'error') {
      setTimeout(() => {
        if (messageEl.className === `message ${type}`) {
          messageEl.className = 'message';
        }
      }, 5000);
    }
  }

  function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function escapeHtml(text) {
    if (!text) return '';
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
  }

  function escapeAttribute(text) {
    return escapeHtml(text).replace(/"/g, '&quot;');
  }
});
