import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import "./assets/tailwind.css";
import router from './router';

const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(pinia);
app.mount('#app')