import {
  validateEmail,
  validatePassword,
} from '~~/composables/useValidation.js';

import { useUserStore } from '~~/store/user';

const userStore = useUserStore();

const signIn = (showLoader, email, password) => {
  if (!validateEmail(email) && !validatePassword(password)) {
    console.warn('Inputs are not valid');
    return;
  } else {
    showLoader = true;
    userStore.signUserIn(email.value, password.value);
  }
};

const signUp = (showLoader, email, password) => {
  if (!validateEmail(email) && !validatePassword(password)) {
    console.warn('Inputs are not valid');
    return;
  } else {
    showLoader = true;
    userStore.signUserUp(email.value, password.value);
  }
};

export { signIn, signUp };
