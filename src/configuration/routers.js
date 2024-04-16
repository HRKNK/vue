import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";

const routes = [
  { path: "/", component: Home, isAuth: false },
  { path: "/about", component: About, isAuth: false },
];

export default routes;
