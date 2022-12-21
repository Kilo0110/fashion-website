export const useToast = (showToast, callback) => {
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
    callback();
  }, 2000);
};
