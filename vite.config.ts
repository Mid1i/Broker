import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";


export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "assets": '/src/assets',
            "components": '/src/components',
            "pages": '/src/pages',
            "hooks": '/src/hooks',
            "services": '/src/services',
        }
    }
})
