import { createApp } from "vue";
import { createPinia } from "pinia";
import { createMemoryHistory, createRouter } from "vue-router";

import App from "@/App.vue";
import routes from "@/configuration/routers";

import "./style.css";

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

app.use(pinia);
app.use(router);
app.mount("#app");
