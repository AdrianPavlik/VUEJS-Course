import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { orange } from './directives/Orange'
import { CustomColor } from "./directives/CustomColor.vue"
import router from './router' //plugin

const app = createApp(App)
app.directive('orange', orange)
app.directive('customColor', CustomColor)
app.use(router)
app.mount('#app')
