import React, { useState } from "react";
import { useDelete } from "src/hooks/ApiHooks";
import { Button } from "src/ui/Button";
import { Card } from "src/ui/Card";
import { EnterPinModal } from "src/ui/EnterPinModal";

interface props {}

export const DeleteAllMessages: React.FC<props> = () => {
  const { run, loading, error } = useDelete("/api/delete-all-messages");
  const [open, setOpen] = useState(false);

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
      <EnterPinModal
        open={open}
        setOpen={setOpen}
        loading={loading}
        error={error}
        onSubmit={async (pin_code) => {
          const data = await run({ pin_code });

          if (data?.success) {
            setOpen(false);
          }
        }}
      />
      Permanently remove all your messages from the platform. This action is not
      reversible, so please continue with caution.
    </Card>
  );
};
