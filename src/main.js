import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import api from './services/$api'
import '@/assets/css/global.css'
import 'animate.css'

const app = createApp(App)
app.use(store)
app.use(api)
app.mount('#app')