import React from "react";
import { usePost } from "src/hooks/ApiHooks";
import { Button } from "src/ui/Buttons";
import { Card } from "src/ui/Card";

interface props {}

export const PersistentSession: React.FC<props> = () => {
  const { run, loading } = usePost("/persistent-session");

  return (
    <Card
      heading="Persistent Session"
      footer={
        <Button
          btn="success"
          loading={loading}
          className="w-48"
          onClick={() => {
            run();
          }}
        >
          Persistent Session
        </Button>
      }
    >
      Get a persistent session, so you don't have to login again. A persistent
      session will be 5 days long.
    </Card>
  );
};
