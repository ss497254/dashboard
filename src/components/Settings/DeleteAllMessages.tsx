import React, { useState } from "react";
import { useDelete } from "src/hooks/ApiHooks";
import { Button } from "src/ui/Buttons";
import { Card } from "src/ui/Card";

interface props {}

export const DeleteAllMessages: React.FC<props> = () => {
  const { run, loading, error } = useDelete("/api/delete-all-messages");

  return (
    <Card
      heading="Delete all messages"
      footer={
        <Button loading={loading} btn="danger" className="w-48">
          Delete all messages
        </Button>
      }
    >
      Permanently remove all your messages from the platform. This action is not
      reversible, so please continue with caution.
    </Card>
  );
};
