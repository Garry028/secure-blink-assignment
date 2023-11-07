import { useAuthStore } from "@/store/authStore"; // Import your Pinia store

const authGuard = async (to, from, next) => {
  const authStore = useAuthStore(); // Get the Pinia store instance

  // Wait for the store to be loaded (if it's not already)
  await authStore.$restored;

  if (authStore.isAuthenticated) {
    // User is authenticated, proceed to the route
    next();
  } else {
    // User is not authenticated, redirect to the login page
    next("/login");
  }
};

export default authGuard;
