# sory.world

sory.world website.

## Prerequisites

1. Install Git:
   - Download from https://git-scm.com/downloads and follow the installer.
   - Verify with `git --version`.
2. Install Node.js (18 LTS or newer):
   - Download from https://nodejs.org/en/download and run the installer or use a version manager such as `nvm` (https://github.com/nvm-sh/nvm).
   - Verify with `node -v` and `npm -v`.
3. Install `pnpm`:
   - Run `corepack enable pnpm` (included with Node 16.13+) or install globally with `npm install -g pnpm`.
   - Verify with `pnpm -v`.
4. Clone this repo:
   - `git clone https://github.com/sory-world/sory-world.git`
   - `cd sory-world`

## Setup

1. Install project dependencies with `pnpm install`.
2. Generate typed route helpers (required after adding or renaming routes) with `pnpm react-router typegen`.
3. Start the development server with `pnpm dev`.
4. Build for production with `pnpm build` (outputs to `build/client` and `build/server`).
5. Serve the production build locally with `pnpm start`.
