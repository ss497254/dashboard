import React from "react";
import { useConfigStore } from "src/stores/useConfigStore";
import { Button } from "src/ui/Buttons";
import { Card } from "src/ui/Card";
import { Input } from "src/ui/Input";

interface props {}

export const UserCard: React.FC<props> = () => {
  const [update, user] = useConfigStore((state) => [state.update, state.user!]);

  return (
    <Card
      heading="User"
      footer={
        <Button
          btn="danger"
          className="w-32"
          onClick={() => update("user", undefined)}
        >
          Logout
        </Button>
      }
    >
      <Input label="username" value={user.username} />
    </Card>
  );
};
