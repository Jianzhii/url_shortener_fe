import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
const ElementPlusIconsVue = require('@element-plus/icons-vue');
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app');
