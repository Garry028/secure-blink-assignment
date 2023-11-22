import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  actions: {
    async initializeUser() {

      if (JSON.parse(localStorage.getItem("user")) != null) {

        const dataString = localStorage.getItem("user");
        const dataObject = JSON.parse(dataString);
        this.setUser(dataObject);
        return true;
      } else {
        this.setUser(null);
        return false;
      }

    },
    setUser(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));

      return true;
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      return true;
    },
  },
  getters: {
    isAuthenticated() {
      if (localStorage.getItem("user")) {
        const dataString = localStorage.getItem("user");
        const dataObject = JSON.parse(dataString);
        this.setUser(dataObject);
        return true;
      }

      return false;
    },
    getUser() {
      if (localStorage.getItem("user")) {
        const dataString = localStorage.getItem("user");
        const dataObject = JSON.parse(dataString);
        this.setUser(dataObject);
        return this.user;
      }

      return null;
    },
  },
});
