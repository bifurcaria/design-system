# Initial Setup Prompt

**Date:** 2025-12-04
**Goal:** Set up initial file structure for cross-platform Design System using NPM Workspaces.

## Prompt
I am building a cross-platform Design System using NPM Workspaces.

I need to set up the initial file structure.

Requirements:

1. Create a root `package.json` with `"workspaces": ["packages/*", "apps/*"]`.

2. Create the folder structure:

   - `packages/ui` (The design system)

   - `apps/web` (Vite + React)

   - `apps/mobile` (Expo)

   - `docs/prompts` (For logging my prompts. like this one! log all the major prompts here)

3. Create a root `.gitignore` that ignores `node_modules`, `dist`, `.expo`, etc.

4. I want to use TypeScript for everything.

Please generate the bash commands to create folders and the content for the root `package.json` and `.gitignore`.

