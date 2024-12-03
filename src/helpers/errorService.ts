let errorCallback: ((message: string) => void) | null = null;


export const setErrorCallback = (callback: (message: string) => void): void => {
  errorCallback = callback;
};


export const showError = (message: string): void => {
  if (errorCallback) {
    errorCallback(message);
  }
};