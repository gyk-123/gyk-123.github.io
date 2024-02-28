/*
 * when you set a variable | function | logic | declaration，please add  a  annotation as possible，God Bless You 🎈
 *
 * @Author: guoyongkun 👨‍💻
 * @Date: 2024-02-28 13:01:02
 * @LastEditors: guoyongkun 👨
 * @LastEditTime: 2024-02-28 14:08:21
 * @FilePath: /github/vite.config.js
 * @Description: please  set some  description for this file , let's improve the  code maintainability 💡 ...
 */
import {fileURLToPath, URL} from 'node:url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
