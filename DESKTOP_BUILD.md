# ExamVerse Desktop Build Guide

This project now supports a full offline-installable desktop app using Electron.

## 1) Run the desktop app locally

```bash
npm install
npm run electron:dev
```

## 2) Build the Windows desktop installer

```bash
npm run electron:build
```

Output will be generated in the `dist/` folder.

## 3) Installer branding and metadata

- App name: `ExamVerse`
- Publisher: `Connectminds IT TECH`
- Installer format: `NSIS` and Zip
- App icon: `icons/examverse_logo.ico`
- Installer UI: standard Windows install flow with install location selection and uninstall support

## 4) Auto update preparation

- The Electron updater is integrated in `electron-src/main.js`.
- To enable auto-updates, configure a valid publish endpoint or update server.
- This project can use `electron-updater` for update checking and install-on-quit behavior.

## Notes

- This build packages the static web app offline inside a native Electron shell.
- If a backend API is required, run the server separately using `npm start`.
