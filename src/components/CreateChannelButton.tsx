import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "src/ui/Button";
import { Input } from "src/ui/Input";
import { StyledModal } from "src/ui/StyledModal";
import { TextArea } from "src/ui/TextArea";

interface props {
  onSave: (x: any) => void;
}

export const CreateChannelButton: React.FC<props> = memo(() => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState } = useForm();

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
        className="max-w-lg w-[90vw] space-y-4 flex-c"
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
              onClick={() =>
                handleSubmit(
                  (data) => {
                    console.log(data);
                  },
                  (data) => {
                    console.log("error", data);
                  }
                )()
              }
            >
              Save
            </Button>
          </>
        }
      >
        <Input label="Title" {...register("title")} />
        <TextArea
          label="Description"
          className="min-h-[100px]"
          {...register("desc")}
        />
      </StyledModal>
    </>
  );
});
