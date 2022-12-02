import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { orange } from './directives/Orange'
import { CustomColor } from "./directives/CustomColor.vue"
import router from './router' //plugin
import { createPinia } from "pinia"

const app = createApp(App)
app.directive('orange', orange)
app.directive('customColor', CustomColor)


//pattern redux - existuje ešte flux
//redux jeden velky json
//flux viac jsons v app
app.use(createPinia())
app.use(router)
app.mount('#app')
