import React, { useState } from "react";
import { useDelete } from "src/hooks/ApiHooks";
import { Button } from "src/ui/Button";
import { Card } from "src/ui/Card";
import { Modal } from "src/ui/Modal";

interface props {}

export const DeleteAllMessages: React.FC<props> = () => {
  const { run, loading, error } = useDelete("/api/delete-all-messages");
  const [open, setOpen] = useState(false);
  const [pin_code, setPinCode] = useState("");

  return (
    <Card
      heading="Delete all messages"
      footer={
        <Button
          btn="danger"
          className="w-48 rounded"
          onClick={() => setOpen(true)}
        >
          Delete all messages
        </Button>
      }
    >
      <Modal open={open} setOpen={setOpen}>
        <form className="p-8 rounded-lg shadow-lg bg-dark-700">
          <h4 className="mb-8">Enter pin to confirm this action.</h4>
          <input
            name="pin_code"
            type="password"
            placeholder="Pin"
            value={pin_code}
            onChange={(e) => {
              setPinCode(e.target.value);
            }}
            className={`p-3 mb-6 font-semibold w-full placeholder:text-dark-100 text-white border-2 rounded-lg outline-none bg-dark-600 ${
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
              run({ pin_code });
            }}
            size="xlarge"
            className="w-full font-semibold rounded-lg"
          >
            Submit
          </Button>
        </form>
      </Modal>
      Permanently remove all your messages from the platform. This action is not
      reversible, so please continue with caution.
    </Card>
  );
};
