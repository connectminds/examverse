// ExamVerse PWA Initialization
// Registers service worker and handles offline/update notifications

(function() {
  'use strict';

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every 60 seconds
          
          // Listen for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker available
                showUpdateNotification(registration);
              }
            });
          });
        })
        .catch((error) => {
          console.warn('Service Worker registration failed:', error);
        });
    });

    // Handle controller change (when new service worker takes over)
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('Service Worker controller changed - app updated');
      // Optional: reload page or show notification
    });
  }

  // Check if device is online/offline
  if ('onLine' in navigator) {
    window.addEventListener('online', () => {
      console.log('Device is online - checking for updates');
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'CHECK_UPDATE' });
      }
      showOnlineNotification();
    });

    window.addEventListener('offline', () => {
      console.log('Device is offline - using cached content');
      showOfflineNotification();
    });

    // Initial check
    if (!navigator.onLine) {
      showOfflineNotification();
    }
  }

  // Notification UI functions
  function showUpdateNotification(registration) {
    const notification = document.createElement('div');
    notification.id = 'pwa-update-notification';
    notification.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; right: 0; background: linear-gradient(135deg, #8b5cf6, #6366f1); color: white; padding: 16px 20px; text-align: center; z-index: 9999; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 12px rgba(0,0,0,0.25); font-family: 'Plus Jakarta Sans', sans-serif;">
        <div style="flex: 1;">
          <strong>📦 ExamVerse Update Available</strong>
          <p style="margin: 4px 0 0; font-size: 0.9rem; opacity: 0.95;">A new version is ready to install.</p>
        </div>
        <button id="pwa-update-now" style="background: white; color: #8b5cf6; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; margin-left: 16px; white-space: nowrap;">Update Now</button>
        <button onclick="document.getElementById('pwa-update-notification').style.display='none';" style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; margin-left: 8px; font-size: 18px; line-height: 1;">×</button>
      </div>
    `;
    document.body.insertBefore(notification, document.body.firstChild);

    const updateBtn = document.getElementById('pwa-update-now');
    if (updateBtn) {
      updateBtn.addEventListener('click', () => applyUpdate(registration));
    }
  }

  function applyUpdate(registration) {
    const notification = document.getElementById('pwa-update-notification');
    if (notification) {
      notification.style.display = 'none';
    }

    if (registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      const onControllerChange = () => {
        navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
        location.reload();
      };
      navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);
      return;
    }

    location.reload();
  }

  function showOfflineNotification() {
    if (document.getElementById('pwa-offline-notification')) return;
    
    const notification = document.createElement('div');
    notification.id = 'pwa-offline-notification';
    notification.innerHTML = `
      <div style="position: fixed; bottom: 20px; left: 20px; background: #ef4444; color: white; padding: 12px 16px; border-radius: 8px; z-index: 9999; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.25); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; font-weight: 500;">
        <span>📡 You're offline</span>
        <span style="font-size: 0.85rem; opacity: 0.9;">Using cached data</span>
      </div>
    `;
    document.body.appendChild(notification);
  }

  function showOnlineNotification() {
    const offlineNotif = document.getElementById('pwa-offline-notification');
    if (offlineNotif) offlineNotif.remove();
    
    const notification = document.createElement('div');
    notification.id = 'pwa-online-notification';
    notification.innerHTML = `
      <div style="position: fixed; bottom: 20px; left: 20px; background: #18b981; color: white; padding: 12px 16px; border-radius: 8px; z-index: 9999; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.25); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; font-weight: 500; animation: slideIn 0.3s ease-out;">
        <span>✓ Back online</span>
      </div>
    `;
    document.body.appendChild(notification);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  }

  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  console.log('ExamVerse PWA initialized');
})();
