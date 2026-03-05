const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('examverseDesktop', {
  platform: process.platform,
  isDesktopApp: true,
});
