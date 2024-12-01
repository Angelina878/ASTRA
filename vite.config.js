import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ASTRA/', // Замените "my-react-site" на имя вашего репозитория
});
