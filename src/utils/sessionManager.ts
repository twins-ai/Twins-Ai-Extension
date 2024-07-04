// Access token session manager

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

// User Session Manager

export const getUser = (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["user"], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(result.token || null);
    });
  });
};

export const setUser = (user: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ user }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
};

export const deleteUser = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.remove("user", () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
};

// Phone Number Session Manager

export const getPhoneNumber = (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["sessionPhoneNumber"], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(result.sessionPhoneNumber || null);
    });
  });
};

export const setPhoneNumber = (sessionPhoneNumber: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ sessionPhoneNumber }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
};

export const deletePhoneNumber = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.remove("sessionPhoneNumber", () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
};

export const clearLocalStorage = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.clear(() => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
};

//  ------- Set User Id for chrome extension local storage ------- //

export const getExtUserId = (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["extUserId"], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(result.extUserId || null);
    });
  });
};

export const setExtUserId = (userId: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ extUserId: userId }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
};
// ------------------------------------------------------------------ //
