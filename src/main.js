// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'      // ← make sure you have this!
import './assets/main.css'         // or wherever your Tailwind + base CSS lives

createApp(App)
  .use(router)                    // ← hook the router into your app
  .mount('#app')
