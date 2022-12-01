import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeComponent.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
     { path: "", component: Home, name: "Home" },
     { path: "/:pathMatch(.*)*", component: NotFound },
     { path: "/about", component: () => import("../views/AboutComponent.vue"), name: "About", },
     { path: "/settings", component: () => import("../views/SettingsComponent.vue"), name: "Settings" }
]

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes,
})

export default router;