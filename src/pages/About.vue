<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});
</script>

<template>
  {{ console.warn("Произошел рендер компонента About.vue") }}
  <h5>About.vue</h5>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
