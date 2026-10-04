import { defineConfig, devices } from "@playwright/test";

// The tests run against the production build (vite preview), so they see
// the same bundle and worker the measurements do.
export default defineConfig({
  testDir: "e2e",
  timeout: 60_000,
  use: { baseURL: "http://localhost:4178", viewport: { width: 1440, height: 900 } },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } }],
  webServer: { command: "pnpm build && pnpm preview", url: "http://localhost:4178", reuseExistingServer: false, timeout: 180_000 },
});
