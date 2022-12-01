import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeComponent.vue"
import About from "../views/AboutComponent.vue"
import Settings from "../views/SettingsComponent.vue"

const routes = [
     { path: "/", component: Home, name: "Home" },
     { path: "/about", component: About, name: "About" },
     { path: "/settings", component: Settings, name: "Settings" }
]

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes,
})

export default router;