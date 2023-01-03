import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '~~/firebase/index.js';
import { useUserStore } from '~~/store/user';

const router = useRouter();
const userStore = useUserStore();

export default defineNuxtRouteMiddleware((to, from) => {
  const user = userStore.user;
  if (user === null || user === undefined || user === 'undefined') {
    return navigateTo('/auth/');
  }
});
