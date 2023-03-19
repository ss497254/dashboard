import Router from "next/router";
import React, { useCallback, useState } from "react";
import { Button } from "src/ui/Button";

import { verfiyPinCode } from "src/utils/verifyPinCode";

export default function Login() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async (value: string) => {
    if (!value) return;

    setLoading(true);
    const err = await verfiyPinCode(value, () => Router.replace("/"));

    if (err) setError(err);
    setLoading(false);
  }, []);

  return (
    <div className="h-screen px-6 flex-c bg-dark-900 c">
      <form className="p-8 rounded-lg shadow-lg bg-dark-700">
        <img src="/logo.png" className="w-32 h-32 mx-auto mb-12" />
        <input
          name="pin_code"
          type="password"
          placeholder="Pin"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          className={`p-3 mb-6 font-semibold md:w-80 placeholder:text-dark-100 text-white border-2 rounded-lg outline-none bg-dark-600 ${
            error ? "border-red-500 shake" : "border-dark-300"
          }`}
        />
        {error && <div className="mb-4 ml-4 -mt-5 text-red-400">{error}</div>}
        <Button
          btn="success"
          type="submit"
          disabled={!!error}
          loading={loading}
          onClick={(e) => {
            e.preventDefault();
            onSubmit(value);
          }}
          size="xlarge"
          className="w-full font-semibold rounded-lg"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
