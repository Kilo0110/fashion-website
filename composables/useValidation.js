export const validateEmail = (email) => {
  let emailRegex = /(\w*@\w*\.\w{2,})/gim;
  if (emailRegex.test(email.value) !== true) {
    email.isValid = false;
    return false;
  }
  email.isValid = true;
  return true;
};

export const validatePassword = (password) => {
  let uppercaseRegex = /[A-Z]{1,}/;
  let numberRegex = /[0-9]{1,}/;
  let specialCharacterRegex = /[^a-zA-Z0-9_]/;
  let errorMessages = [
    'Password must be at least 8 characters long',
    'Password must contain at least 1 uppercase letter',
    'Password must contain at least 1 number',
    'Password must contain at least 1 special character',
  ];

  password.errorMessage = '';

  if (password.value.length < 8) {
    password.errorMessage = errorMessages[0];
  } else if (uppercaseRegex.test(password.value) === false) {
    password.errorMessage = errorMessages[1];
  } else if (numberRegex.test(password.value) === false) {
    password.errorMessage = errorMessages[2];
  } else if (specialCharacterRegex.test(password.value) === false) {
    password.errorMessage = errorMessages[3];
  }
  return true;
};
