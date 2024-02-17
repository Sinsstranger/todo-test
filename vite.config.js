import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    hmr: {
      overlay: true, // Отображение уведомлений об ошибках поверх приложения
    },
  },
  watch: {
    // Игнорировать изменения в указанных файлах/папках
    exclude: ['node_modules', 'dist', 'public'],
  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@core': resolve(__dirname, 'src'),
    },
  },
});
