import React from "react";
import { useDelete } from "src/hooks/ApiHooks";
import { Button } from "src/ui/Button";
import { Card } from "src/ui/Card";

interface props {}

export const DeleteAllMessages: React.FC<props> = () => {
  const { run, loading } = useDelete("/api/delete-all-messages");

  return (
    <Card
      heading="Delete all messages"
      footer={
        <Button
          btn="danger"
          loading={loading}
          className="w-48 rounded"
          onClick={run}
        >
          Delete all messages
        </Button>
      }
    >
      Permanently remove all your messages from the platform. This action is not
      reversible, so please continue with caution.
    </Card>
  );
};
