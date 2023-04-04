import React, { memo, useState } from "react";
import { Button } from "src/ui/Button";
import { Input } from "src/ui/Input";
import { StyledModal } from "src/ui/StyledModal";

interface props {
  onSave: (x: any) => void;
}

export const CreateChannelButton: React.FC<props> = memo(() => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="!px-8 rounded-md"
        btn="success"
        onClick={() => setOpen(!open)}
      >
        Add channel
      </Button>
      <StyledModal
        className="max-w-lg w-[90vw]"
        heading="Create channel"
        open={open}
        setOpen={setOpen}
        footer={
          <>
            <Button
              btn="danger"
              className="mr-4 rounded-md"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              btn="success"
              className="!px-7 rounded-md"
              onClick={() => setOpen(false)}
            >
              Save
            </Button>
          </>
        }
      >
        <Input />
      </StyledModal>
    </>
  );
});
