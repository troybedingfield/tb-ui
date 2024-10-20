import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    })],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "tb-ui",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },

});


