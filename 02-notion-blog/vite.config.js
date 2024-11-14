import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    server: {
        open: true,
        // proxy: {
        //     '/api': {
        //         target: 'https://api.notion.com/',
        //         changeOrigin: true,
        //         secure: false,
        //         rewrite: (path) => path.replace(/^\/api/, ""), 
        //     }
        // }
    },
    
});
