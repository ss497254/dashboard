import React, { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";

interface props {
  open: boolean;
  loading?: boolean;
  error?: boolean;
  setOpen: (x: boolean) => void;
  onSubmit: (x: string) => Promise<void>;
}

export const EnterPinModal: React.FC<props> = ({
  open,
  setOpen,
  onSubmit,
  error,
  loading,
}) => {
  const [pin, setPin] = useState("");

  return (
    <Modal open={open} setOpen={setOpen}>
      <form className="p-8 mx-6 rounded-lg shadow-lg border-500 bg-dark-700">
        <h4 className="mb-8">Enter pin to confirm this action.</h4>
        <input
          name="pin"
          type="password"
          placeholder="Pin"
          value={pin}
          onChange={(e) => {
            setPin(e.target.value);
          }}
          className={`p-3 mb-6 font-semibold w-full placeholder:text-dark-100 text-white border-2 rounded-lg outline-none bg-dark-600 ${
            error ? "border-red-500 shake" : "border-dark-300"
          }`}
        />
        <Button
          btn="success"
          type="submit"
          disabled={!!loading}
          loading={loading}
          onClick={async (e) => {
            e.preventDefault();
            await onSubmit(pin);
            setPin("");
          }}
          size="xlarge"
          className="w-full !rounded-lg"
        >
          Submit
        </Button>
      </form>
    </Modal>
  );
};
