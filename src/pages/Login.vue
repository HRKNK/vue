<script setup>
import Auth from "@/entities/user/Auth.vue";
import { ref } from "vue";

defineProps({
  msg: String,
});
</script>

<template>
  {{ console.warn("Произошел рендер компонента Login.vue") }}
  <h5>Login.vue</h5>
  <Auth />
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
