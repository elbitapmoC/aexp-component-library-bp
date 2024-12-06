import { defineConfig } from 'vitest/config';

console.log('Global test setup loaded');
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // Required for React Testing Library
    setupFiles: ['./test/setup.ts'], // Optional, for global test setup
  },
});
