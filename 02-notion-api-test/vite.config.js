import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.notion.com', // Notion API의 기본 URL
        changeOrigin: true,
        secure: false, // HTTPS 환경에서 SSL 검사 비활성화
        rewrite: (path) => path.replace(/^\/api/, '') // '/api' 경로를 제거
      }
    }
  }
});
