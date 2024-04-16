<script setup>
// import { ref } from "vue";

import { useAnyStateStore } from "@/configuration/store";

const counter = useAnyStateStore();
</script>

<template>
  {{ console.warn("Произошел рендер компонента Home.vue") }}
  <h5>Home.vue</h5>
  <button type="button" @click="() => counter.increment()">
    "State++ {{ counter.count }}"
  </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
