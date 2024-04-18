<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});
</script>

<template>
  {{ console.warn("Произошел рендер компонента Dashboard.vue") }}
  <h5>Dashboard.vue</h5>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
