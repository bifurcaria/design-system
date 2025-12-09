# Design System

This monorepo contains a cross-platform design system with a mobile app, a web app, and a shared UI library. Rather than relying on solutions like react-native-web, this project prioritizes fine-grained control over visual and behavioral differences between platforms. I may (or may not) add some extra UI tweaks and configuration files after this commit.

## Project Structure

- **apps/mobile**: A React Native application built with Expo.
- **apps/web**: A React web application built with Vite.
- **packages/ui**: A shared UI component library used by both applications.

## Getting Started

### Prerequisites

- Node.js
- npm (or your preferred package manager)

### Installation

Install dependencies from the root directory:

```bash
npm install
```

## Scripts

### Build

Build all workspaces:

```bash
npm run build
```

### Test (they don't exist yet)

Run tests across all workspaces:

```bash
npm run test
```

## Development

To start the applications individually:

**Mobile:**
```bash
cd apps/mobile
npm run start
```

**Web:**
```bash
cd apps/web
npm run dev
```

**UI Package:**
```bash
cd packages/ui
npm run dev
```
