// useLogin.ts
import { useState } from "react";
import { api } from "../../utils/client";
import { goTo } from "react-chrome-extension-router";
import { AutoDialer } from "../../pages/contacts";
import { setToken } from "../../utils/sessionManager";

interface LoginData {
  email: string;
  password: string;
}

interface UseLoginResponse {
  login: (data: LoginData) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const useLogin = (): UseLoginResponse => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginData): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/auth/login", data);
      // Handle response if needed
      console.log("Response", response.data);
      console.log("token", response.data.access_token);
      console.log("Logged in successfully");
      await setToken(response.data.access_token);
      goTo(AutoDialer, { message: "Logged in successfully" });
    } catch (err) {
      setError("Error while logging into the account");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
