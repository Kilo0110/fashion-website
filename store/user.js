// firebase imports
import { auth } from '~~/firebase/config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { defineStore, skipHydrate } from 'pinia';
import { StorageSerializers, useLocalStorage } from '@vueuse/core';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useLocalStorage('user'),
  }),
  actions: {
    async signUserUp(email, password) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const data = res.user;
        this.user = data;
        return navigateTo('/profile/');
      } catch (error) {
        console.log(error);
      }
    },
    async signUserIn(email, password) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const data = res.user;
        this.user = data;
        return navigateTo('/profile/');
      } catch (error) {
        console.log(error);
      }
    },
    async logUserOut() {
      try {
        const res = await signOut(auth);
        this.user = null;
        return navigateTo('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
  persist: ['user'],
});
