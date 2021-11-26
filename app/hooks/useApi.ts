import { useState } from "react";

const useApi = <T = unknown>(apiFunction: Function) => {
  const [data, setData] = useState<any>({ id: 0, name: "", image: "" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function request(...args: unknown[]) {
    try {
      setLoading(true);
      setError(false);
      const data = await apiFunction(args);
      setData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, request };
};

export default useApi;
