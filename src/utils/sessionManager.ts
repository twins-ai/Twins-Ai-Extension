// chromeStorageUtils.ts
export const getToken = (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["token"], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(result.token || null);
    });
  });
};

export const setToken = (token: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ token }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
};

export const deleteToken = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.remove("token", () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
};
