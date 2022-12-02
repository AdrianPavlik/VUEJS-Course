import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeComponent.vue"
import NotFound from "../views/NotFound.vue"

const isAuthed = (to, from, next) => {
     //Cookies platny kod, token a pod.
     const isAuth = true;
     if (isAuth)
          next()
     else
          next("/")
}

const routes = [
     { path: "", component: Home, name: "Home" },
     { path: "/:pathMatch(.*)*", component: NotFound },
     { path: "/a", redirect: { name: "Settings" } },
     { path: "/about", beforeEnter: isAuthed, alias: "/about-us", component: () => import("../views/AboutComponent.vue"), name: "About", },
     {
          path: "/settings", component: () => import("../views/SettingsComponent.vue"), name: "Settings", children: [
               { path: ":id", component: () => import("../views/SpecificSettings.vue"), name: "SpecificSettings" }

          ]
     },
]

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes,
})

export default router;