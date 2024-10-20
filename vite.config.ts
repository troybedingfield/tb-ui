import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
    // cssInjectedByJsPlugin(),
    cssInjectedByJsPlugin({
      relativeCSSInjection: true
    })
    // cssInjectedByJsPlugin({ preRenderCSSCode: (cssCode) => cssCode }), // The return will be used as the CSS that will be injected during execution.
  ],
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
    cssCodeSplit: true,
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


