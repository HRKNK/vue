import { defineStore } from "pinia";

export const useAnyStateStore = defineStore("anyState", {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++;
    },
  },

  // Асинхронные экшены
  // actions: {
  //   async registerUser(login, password) {
  //     try {
  //       this.userData = await api.post({ login, password });
  //       showTooltip(`Welcome back ${this.userData.name}!`);
  //     } catch (error) {
  //       showTooltip(error);
  //       // let the form component display the error
  //       return error;
  //     }
  //   },
  // },
});
