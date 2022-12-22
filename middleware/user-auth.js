import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '~~/firebase/config.js';

export default defineNuxtRouteMiddleware((to, from) => {
  // get the current user state
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      return navigateTo('/auth/signin');
    }
  });
});
