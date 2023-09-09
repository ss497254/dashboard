import Router from "next/router";
import React, { FormEvent, useCallback, useState } from "react";
import { usePost } from "src/hooks/ApiHooks";
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
      update("token", res.data.token);

      return Router.replace("/");
    }
  }, []);

  return (
    <div className="h-screen px-6 flex-c bg-dark-900 c">
      <form
        className="p-8 rounded-lg shadow-lg bg-dark-700 space-y-5"
        onSubmit={onSubmit}
      >
        <img src="/logo.png" className="w-32 h-32 mx-auto mb-12" />
        <Input required label="username" name="username" error={error} />
        <Input
          required
          label="password"
          name="password"
          type="password"
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
          className={["w-full md:w-80", error ? "shake" : ""].join(" ")}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
