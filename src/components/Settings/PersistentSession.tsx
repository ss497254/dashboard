import React from "react";
import { useGet } from "src/hooks/ApiHooks";
import { Button } from "src/ui/Button";
import { Card } from "src/ui/Card";

interface props {}

export const PersistentSession: React.FC<props> = () => {
  const { run, loading } = useGet("/api/get-persistent-session");

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
