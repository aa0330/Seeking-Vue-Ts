import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import box from '@/components/box.vue'

createApp(App).use(router).component('box',box).mount('#app')
