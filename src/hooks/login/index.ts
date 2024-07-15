import { useState } from "react";
import { api } from "../../utils/client";
import { goTo } from "react-chrome-extension-router";
import { AutoDialer } from "../../pages/contacts";
import {
  setExtUserId,
  setPhoneNumber,
  setToken,
} from "../../utils/sessionManager";

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
      await setToken(response.data.access_token);
      await setPhoneNumber(response.data.phoneNumber);
      await setExtUserId(response.data.id);
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
