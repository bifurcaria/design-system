# UI Package Setup Prompt

**Date:** 2025-12-04
**Goal:** Initialize the `packages/ui` package with specific build and dependency requirements.

## Prompt
Initialize the `packages/ui` package.

Consider this:

1. Dependencies: `react`, `react-native` (as peerDependencies).

2. DevDependencies: `typescript`, `@types/react`, `@types/react-native`.

3. Build Strategy:

   - Create a `tsconfig.json` that compiles code to a `dist/` folder.

   - It should generate `.d.ts` declaration files.

4. Entry Points in `package.json`:

   - `"main": "dist/index.js"` (Standard entry)

   - `"types": "dist/index.d.ts"` (Types)

   - `"react-native": "src/index.ts"` (Special entry for Metro/Expo to use raw source)

   - `"files": ["dist", "src"]` (Whitelisting files for npm publish)

