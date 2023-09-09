import Router from "next/router";
import React, { useCallback } from "react";
import { usePost } from "src/hooks/ApiHooks";
import { initializeApiClient } from "src/lib/api-client-store";
import { useConfigStore } from "src/stores/useConfigStore";
import { Button } from "src/ui/Buttons";
import { Input } from "src/ui/Input";

export default function Login() {
  const update = useConfigStore((state) => state.update);

  const { run, loading, error } = usePost("/user/login");

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { value: username } = form.elements.namedItem(
      "username"
    ) as HTMLInputElement;
    const { value: password } = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    const res = await run({ username, password });

    if (res && res.success) {
      update("user", res.data.user);
      initializeApiClient(res.data.user, res.data.token);

      return Router.replace("/");
    }
  }, []);

  return (
    <div className="h-screen px-6 f bg-dark-900 c">
      <form
        className="p-6 md:p-8 rounded-lg shadow-lg bg-dark-700 space-y-5 flex-grow max-w-md"
        onSubmit={onSubmit}
      >
        <img src="/logo.png" className="w-32 h-32 mx-auto mb-12" />
        <Input required label="username" name="username" error={error} />
        <Input
          required
          label="password"
          name="password"
          type="password"
          autoComplete="off"
          error={error}
        />
        {error && (
          <div className="mb-4 ml-4 -mt-5 text-red-400 text-center">
            {error}
          </div>
        )}
        <Button
          btn="success"
          type="submit"
          iconSize={28}
          loading={loading}
          size="xl"
          className={["w-full", error ? "shake" : ""].join(" ")}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
