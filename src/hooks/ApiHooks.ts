import { useCallback, useEffect, useRef, useState } from "react";

export interface QueryOptions {
  runOnMount?: boolean;
}

export const useGet = <T>(
  path: string,
  options: QueryOptions = { runOnMount: true }
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const response = useRef<T>();

  const run = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(path, {
        credentials: "include",
        method: "GET",
      });

      if (
        res.status === 200 &&
        res.headers.get("Content-Type")?.includes("application/json")
      ) {
        response.current = await res.json();
        setLoading(false);

        return;
      }

      console.log(res.text());
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
    setError(true);
    return null;
  }, [path]);

  useEffect(() => {
    if (options?.runOnMount) run();
  }, []);

  return { loading, error, run, data: response.current };
};

export const usePost = (path: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const run = useCallback(
    async (data: any) => {
      setLoading(true);
      setError(false);

      try {
        const res = await fetch(path, {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        });

        if (res.headers.get("content-type") === "application/json") {
          setLoading(false);
          return res.json();
        }

        console.log(res.text());
      } catch (e) {
        console.error(e);
      }

      setLoading(false);
      setError(true);
      return null;
    },
    [path]
  );

  return { loading, error, run };
};
