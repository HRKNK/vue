<script setup>
// import { ref } from "vue";
import { storeToRefs } from "pinia";

import { useAnyStateStore } from "@/configuration/store";

const store = useAnyStateStore();
const { loading, data, error } = storeToRefs(store);
</script>

<template>
  {{ console.warn("Произошел рендер компонента Home.vue") }}
  <h5>Home.vue</h5>
  <button type="button" @click="() => store.increment()">
    "State++ {{ store.count }}"
  </button>

  <button @click="store.fetchData()">Запрос</button>

  <p v-if="loading">Идёт загрузка!</p>
  <p v-else-if="data">
    {{ data }}
  </p>
  <p v-else-if="error">Произошла ошибка!</p>
  <p v-else>Ничего!</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
