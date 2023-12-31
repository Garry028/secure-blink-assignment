import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/AuthPage.vue";
import Dashboard from "../components/Dashboard.vue";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
   
     
    },
  ],
});

export default router;
