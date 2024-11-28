let errorCallback = null;


export const setErrorCallback = (callback) => {
  errorCallback = callback;
};


export const showError = (message) => {
  if (errorCallback) {
    errorCallback(message);
  }
};