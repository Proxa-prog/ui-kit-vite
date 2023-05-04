/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'

export default defineConfig({
  publicDir: 'src/assets',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui-kit-vite',
      fileName: 'ui-kit-vite',
    },
  },
  plugins: [
    dts(),
    react()
  ],
  test: {
    globals: true,
    environment: 'jsdom', // @testing-library/jest-dom добавить к тестовому файлу
    setupFiles: './src/tests/setup.ts',
    deps: {
      inline: [/vite-test-utils/]
    }
  },
});
