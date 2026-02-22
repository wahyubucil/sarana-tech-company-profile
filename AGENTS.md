# AGENTS.md

This file contains instructions and guidelines for AI coding agents operating within this repository. Please read and adhere to these rules before executing tasks.

## 1. Repository Overview
*   **Framework:** Astro + React
*   **Language:** TypeScript (Strict Mode)
*   **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
*   **Package Manager:** Bun

## 2. Build, Lint, and Test Commands

### Package Manager
This project strictly uses **Bun**. Do NOT use `npm`, `yarn`, or `pnpm` for any package management operations.
*   **Install dependencies:** `bun install`
*   **Add dependencies:** `bun add <package>` (use `-d` for dev dependencies)

### Build Commands
*   **Development Server:** `bun run dev`
*   **Production Build:** `bun run build`
*   **Preview Build:** `bun run preview`

### Linting & Type Checking
This project enforces strict type checking and linting. Before finalizing any task, run these commands to ensure no typing errors were introduced and code is formatted:
*   **TypeScript Check:** `bunx tsc --noEmit`
*   **Astro Type Check:** `bunx astro check`
*   **Linting & Formatting (Biome):** `bunx @biomejs/biome check --write` (Use `--unsafe` for Tailwind class sorting if prompted)

### Testing Commands
*Currently, there is no testing framework initialized in `package.json`.* 
If you are tasked with writing or running tests, follow these guidelines:
*   **Framework:** Use **Vitest** alongside `@testing-library/react` for components.
*   **Running all tests:** `bunx vitest`
*   **Running a single test:** `bunx vitest run <path/to/test.spec.ts>`
*   *(Note: If tests are requested and Vitest is missing, proactively ask the user if you should install it via `bun add -d vitest @testing-library/react jsdom`.)*

## 3. Code Style Guidelines

### Architecture & Frameworks
*   **Astro First:** Default to building `.astro` components for static HTML, layouts, and routing. This maximizes performance.
*   **React Sparingly:** Use React (`.tsx` files inside `src/components/`) **only** when client-side interactivity, state management, or complex DOM manipulation is strictly required.
*   **Hydration:** Whenever adding a React component to an `.astro` page, you must use a client directive (e.g., `<InteractiveComponent client:load />`, `client:idle`, `client:visible`).

### Directory Structure
*   `src/pages/`: Astro routes. Use kebab-case directory/file names (e.g., `about-us.astro`).
*   `src/layouts/`: Astro layout wrappers.
*   `src/components/`: Shared UI elements. Both `.astro` and `.tsx` live here.
*   `src/assets/`: Static assets optimized by Astro.
*   `src/lib/`: Utility functions and helpers (e.g., `utils.ts` for `cn`).
*   `src/data/`: Static JSON data or constants.

### Naming Conventions
*   **File Names:** Use `kebab-case` for ALL file names, including components, pages, layouts, and utilities (e.g., `navbar.astro`, `submit-button.tsx`, `main-layout.astro`, `format-date.ts`).
*   **Component Functions:** Use PascalCase for the exported React component function names (e.g., `export const SubmitButton = ...`).
*   **Types & Interfaces:** PascalCase (e.g., `UserData`, `ButtonProps`).
*   **Constants:** UPPER_SNAKE_CASE (e.g., `MAX_RETRIES`).
*   **Variables & Functions:** camelCase (e.g., `isSidebarOpen`, `fetchData`).

### TypeScript & Typing rules
*   **Strict Types:** The project extends `astro/tsconfigs/strict`. Type definitions are mandatory.
*   **No `any`:** Avoid `any` at all costs. Use `unknown` and type guards if data shapes are dynamic.
*   **Interfaces over Types:** Prefer `interface` for object structures and component props (e.g., `interface Props { title: string; }`). Use `type` for unions or primitives.
*   **Props Typing:** Always define a `Props` interface for React and Astro components.

### Imports & Exports
*   **Absolute Imports:** Prefer using absolute imports with aliases (e.g., `~/components/button` instead of `../../components/button`). Make sure to configure paths in `tsconfig.json` if they aren't already set up.
*   **Named Exports:** Use named exports for all React components and utilities (e.g., `export const Button = () => ...`). This makes refactoring easier.
*   **Default Exports:** Only use default exports where frameworks demand it (e.g., `.astro` files inherently use default structures).
*   **Import Order:**
    1. Framework imports (`astro`, `react`).
    2. Third-party libraries.
    3. Absolute internal paths with aliases (`~/...`).
    4. Relative imports (`../`, then `./`) - avoid unless absolute paths aren't possible.
    5. Styles and assets.

### Styling & Formatting
*   **Tailwind CSS (v4):** All styling must be done using Tailwind CSS utility classes.
*   **Dynamic Classes:** Use the `cn` utility from `~/lib/utils` (combines `clsx` and `tailwind-merge`) instead of raw template literals for conditional or dynamic Tailwind classes (e.g., `className={cn('base-class', isActive && 'active-class')}`).
*   **Inline Classes:** Prefer inline utility classes over creating custom CSS files with `@apply`. If a component becomes too class-heavy, extract it into a smaller React/Astro component.
*   **Class Grouping & Sorting:** Tailwind classes are automatically sorted using Biome (`nursery/useSortedClasses`). Run `bunx @biomejs/biome check --write --unsafe` to sort them.
*   **Immutability:** Use `const` over `let`. Do not mutate objects or arrays; return new instances (e.g., `[...arr, newItem]`).

### Error Handling
*   **Early Returns:** Use early returns to avoid deep nesting and improve readability.
*   **Try/Catch:** Always wrap `await` calls that may fail (like network requests) in `try/catch` blocks.
*   **Graceful Fallbacks:** Ensure that component failures do not crash the entire app. Provide fallback UIs or sensible default values for missing data.

## 4. Operational Directives for Agents
1.  **Read Context First:** Before modifying or creating files, extensively use the `read` or `glob` tools to examine surrounding code, identify existing patterns, and understand the project layout. Never guess configurations.
2.  **Absolute File Paths:** Always construct the absolute path relative to the root when using file-writing or reading tools.
3.  **Self-Correction:** After completing a file modification, run the typescript linter (`bunx tsc --noEmit`) via `bash` to verify you didn't break types.
4.  **Security:** Never commit secrets, API keys, or `.env` details.
5.  **External Context:** There are no `.cursorrules` or `.github/copilot-instructions.md` in this repository at this time. This `AGENTS.md` is your definitive source of truth.