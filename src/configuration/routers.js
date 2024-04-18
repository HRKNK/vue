import Home from "@/pages/Home.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Login from "@/pages/Login.vue";

const routes = [
  { path: "/", component: Home, isAuth: false },
  { path: "/dashboard", component: Dashboard, isAuth: true },
  { path: "/login", component: Login, isAuth: false },
];

export default routes;
