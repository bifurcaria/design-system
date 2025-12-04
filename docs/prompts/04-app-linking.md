# App Linking Prompt

**Date:** 2025-12-04
**Goal:** Link consuming apps (`apps/web` and `apps/mobile`) to the `packages/ui` package.

## Prompt
(Implied. This wasn't a prompt I wrote but cursor still logged it :-O)
1. Add `@design-system/ui` dependency to `apps/web` and `apps/mobile`.
2. Configure Vite in `apps/web` to alias `@design-system/ui` to `packages/ui/src` for dev experience.
3. Configure Metro in `apps/mobile` to resolve workspace packages properly.
4. Verify integration by importing `Button` in both apps.

