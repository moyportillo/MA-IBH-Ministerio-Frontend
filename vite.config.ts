import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const mode = process.env.NODE_ENV || 'development'; // Default to 'development'
const env = loadEnv(mode, process.cwd(), '');
// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': env,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
