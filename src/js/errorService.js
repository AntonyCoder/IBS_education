let errorCallback = null;


export const setErrorCallback = (callback) => {
  errorCallback = callback;
};


export const showError = (message) => {
    console.log('Showing error:', message);
  if (errorCallback) {
    errorCallback(message);
  }
};