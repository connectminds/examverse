const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('examverseDesktop', {
  platform: process.platform,
  isDesktopApp: true,
  getInstallId: () => ipcRenderer.invoke('examverse:get-install-id'),
});
