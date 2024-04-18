<script setup>
import { useAuth } from "./initAuthDataStore";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

const userData = useAuth();
const { loading, data, error } = storeToRefs(userData);

onMounted(() => {
  console.log(`компонент теперь примонтирован.`);
  userData.fetchLogin(body);
});

defineProps({
  msg: String,
});
</script>

<template>
  {{ console.warn("Произошел рендер компонента Login.vue") }}
  <h5>sdfsdfsdfds</h5>
  <p>{{ loading }}</p>
  <p>{{ data }}</p>
  <p>{{ error }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
