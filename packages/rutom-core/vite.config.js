import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'rutom-core',
            fileName: (format) => `rutom-core.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    },
    plugins: [react(), dts({
        insertTypesEntry: true,
    })]
})