import React from "react";
import { Button } from "src/ui/Button";
import { Input } from "src/ui/Input";
import { StyledModal } from "src/ui/StyledModal";

interface props {}

export const CreateChannelModal: React.FC<props> = () => {
  return (
    <StyledModal
      className="max-w-lg w-[90vw]"
      heading="Create channel"
      open={true}
      setOpen={() => {}}
      footer={
        <>
          <Button btn="danger" className="mr-4 rounded-md">
            Cancel
          </Button>
          <Button btn="success" className="rounded-md">
            Save
          </Button>
        </>
      }
    >
      <Input />
    </StyledModal>
  );
};
