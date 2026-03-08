# ExamVerse Desktop Build Guide

This project now supports a full offline-installable desktop app using Electron.

## 1) Run desktop app locally

```bash
npm run desktop
```

This opens `index.html` directly inside an Electron window.

## 2) Build Windows installer (.exe)

```bash
npm run desktop:build
```

Output will be generated in:

- `release/ExamVerse-Setup-<version>.exe`

This installer is configured for one-click per-user installation, so users can install without extra setup prompts.

## 3) Build Windows portable executable

```bash
npm run desktop:build-portable
```

## 4) Build installer + portable in one command

```bash
npm run desktop:build-all
```

Output is generated in `release/`.

## Notes

- Core exam pages work offline inside desktop app.
- Email flows still require internet/server availability.
- Subscription activation is now device-specific for desktop installs.
- If the app installer is copied to another PC, that new PC must subscribe and be activated separately.
- If you need backend API while testing desktop notifications, run server separately:

```bash
npm start
```

## Release checklist

1. Confirm branding assets are final (`examverse_logo.png`)
2. Confirm `.env` server settings for production APIs
3. Run `npm run desktop:build`
4. Test installer on a clean Windows machine
5. Confirm each test PC appears as a separate device in `admin-activation.html`
