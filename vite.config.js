// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FreshsalesCommonJS',
      // the proper extensions will be added
      fileName: 'freshsales-common-js',
    }
  },
})