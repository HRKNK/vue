import { defineStore } from "pinia";

export const useAnyStateStore = defineStore("anyState", {
  state: () => ({
    loading: false,
    error: false,

    count: 0,
    data: null,
  }),
  actions: {
    increment() {
      this.count++;
    },
    async fetchData() {
      try {
        this.loading = true;
        this.data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then((response) => response.json())
          .then((json) => json);

        // showTooltip(`Welcome back ${this.userData.name}!`);
      } catch (error) {
        // showTooltip(error);// let the form component display the error
        this.loading = false;
        this.error = error;
        return error;
      } finally {
        this.loading = false;
      }
    },
  },
});
