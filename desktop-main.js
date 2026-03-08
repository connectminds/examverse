const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const INSTALL_META_FILE = 'device-meta.json';

function getDesktopInstallId() {
  const metaPath = path.join(app.getPath('userData'), INSTALL_META_FILE);

  try {
    if (fs.existsSync(metaPath)) {
      const raw = fs.readFileSync(metaPath, 'utf8');
      const parsed = JSON.parse(raw);
      if (typeof parsed.installId === 'string' && parsed.installId.trim().length > 0) {
        return parsed.installId.trim();
      }
    }
  } catch (error) {
    // Fall through to create a new install ID.
  }

  const installId = crypto.randomUUID();
  const payload = {
    installId,
    createdAt: new Date().toISOString()
  };

  try {
    fs.writeFileSync(metaPath, JSON.stringify(payload, null, 2), 'utf8');
  } catch (error) {
    // If file cannot be written, still return generated ID for this session.
  }

  return installId;
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1366,
    height: 850,
    minWidth: 1024,
    minHeight: 700,
    title: 'ExamVerse',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'desktop-preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  ipcMain.handle('examverse:get-install-id', () => getDesktopInstallId());
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
