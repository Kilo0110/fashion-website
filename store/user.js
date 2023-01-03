// firebase imports
import { auth } from '../firebase/index.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { defineStore, skipHydrate } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

import { createUser } from '~~/firebase/db';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useLocalStorage('user'),
    authenticationError: null,
  }),
  actions: {
    async signUserUp(email, password) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const data = res.user;
        this.user = data;
        createUser(data.uid);
      } catch (error) {
        this.authenticationError = error.code;
      }
    },
    async signUserIn(email, password) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const data = res.user;
        this.user = data;
      } catch (error) {
        this.authenticationError = error.code;
      }
    },
    async logUserOut() {
      try {
        const res = await signOut(auth);
        this.user = null;
      } catch (error) {
        this.authenticationError = error.code;
      }
    },
    resetAuthenticationError() {
      this.authenticationError = null;
    },
  },
  persist: ['user'],
});
