<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

// import { useRouter } from "vue-router";
</script>
<template>
  {{ console.warn("Произошел рендер компонента APP.vue") }}
  <!-- <button type="button" @click="count++">count is APP.vue {{ count }}</button> -->
  <h2><strong>Текущий путь маршрута:</strong> {{ $route.path }}</h2>

  <RouterLink to="/dashboard">Go to Dashboard</RouterLink>
  <RouterLink to="/login">Go to Login</RouterLink>

  <RouterLink to="/about">Go to About</RouterLink>
  <RouterLink to="/">Go to Home</RouterLink>

  <RouterView />

  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld any-message="Ololo" msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
