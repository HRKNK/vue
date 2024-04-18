import { defineStore } from "pinia";
import { instance } from "@/API/instance";
import { USER_LOCALSTORAGE_KEY } from "@/consts/consts";

export const useAuth = defineStore("auth", {
  state: () => ({
    loading: false,
    error: false,

    data: null,
  }),
  actions: {
    async fetchLogin(body) {
      console.log("Sending a request: useAuth");
      try {
        this.loading = true;
        const response = await instance
          .post("/login", body)
          .then((response) => response.data);

        this.data = { inited: true, token: response };
        localStorage.setItem(USER_LOCALSTORAGE_KEY, response);
      } catch (error) {
        this.loading = false;
        this.error = error;
        return error;
      } finally {
        this.loading = false;
      }
    },
  },
});
