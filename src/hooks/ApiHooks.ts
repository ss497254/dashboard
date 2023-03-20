import { useCallback, useEffect, useRef, useState } from "react";

export interface QueryOptions {
  initialValue?: any;
}

const DefaultHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const useGet = <T>(path: string, options?: QueryOptions) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const run = useCallback(
    async (parameter: string = "") => {
      setLoading(true);
      setError(false);

      try {
        const res = await fetch(path + parameter, {
          credentials: "include",
          method: "GET",
          headers: DefaultHeader,
        });

        if (
          res.ok &&
          res.headers.get("Content-Type")?.includes("application/json")
        ) {
          let x: T = await res.json();
          setLoading(false);

          return x;
        }

        console.log(res.text());
      } catch (e) {
        console.error(e);
      }

      setLoading(false);
      setError(true);
      return options?.initialValue;
    },
    [path]
  );

  return { loading, error, run };
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
          headers: DefaultHeader,
          method: "POST",
          body: JSON.stringify(data),
        });

        if (
          res.ok &&
          res.headers.get("Content-Type")?.includes("application/json")
        ) {
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

export const useDelete = (path: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const run = useCallback(
    async (data: any) => {
      setLoading(true);
      setError(false);

      try {
        const res = await fetch(path, {
          credentials: "include",
          headers: DefaultHeader,
          method: "DELETE",
          body: JSON.stringify(data),
        });

        if (
          res.ok &&
          res.headers.get("Content-Type")?.includes("application/json")
        ) {
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
