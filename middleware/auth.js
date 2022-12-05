import { useUserStore } from '~~/store/user';

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  // get the current user state
  const user = userStore.user;

  if (!user) {
    return navigateTo('/auth/signin');
  }
});
