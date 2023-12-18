import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `@import "./src/bem.scss";`
      }
    } 
  },
  resolve:{
    alias:{
      '@':path.resolve("./src")
    }
  }
})
