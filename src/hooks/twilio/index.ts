import { useState, useEffect } from "react";
import { api } from "../../utils/client";

type TokenData = {
  token: string;
};

type FetchState<T> = {
  tokenData: T | null;
  loading: boolean;
  error: Error | null;
};

const useFetchToken = (): FetchState<TokenData> => {
  const [state, setState] = useState<FetchState<TokenData>>({
    tokenData: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await api.get<TokenData>("/twilio/token");
        setState({ tokenData: response.data, loading: false, error: null });
      } catch (error) {
        setState({ tokenData: null, loading: false, error: error as Error });
      }
    };

    fetchToken();
  }, []);

  return state;
};

export default useFetchToken;
