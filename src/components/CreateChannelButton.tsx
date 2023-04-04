import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { showToast } from "src/lib/showToast";
import { IChannel } from "src/types/ChannelType";
import { Button } from "src/ui/Button";
import { Input } from "src/ui/Input";
import { OptionButtons } from "src/ui/OptionButtons";
import { StyledModal } from "src/ui/StyledModal";
import { TextArea } from "src/ui/TextArea";

interface props {
  onSave: (x: IChannel) => void;
}

const AccessOptions = ["private", "public-read", "public"];

export const CreateChannelButton: React.FC<props> = memo(({ onSave }) => {
  const [open, setOpen] = useState(false);
  const [accessValue, setAccessValue] = useState<IChannel["access"]>(
    AccessOptions[0] as "private"
  );
  const { register, handleSubmit, reset } = useForm();

  return (
    <>
      <Button className="!px-8" btn="success" onClick={() => setOpen(!open)}>
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
              className="!px-8 mr-4"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              btn="success"
              className="!px-10"
              onClick={handleSubmit(
                (data: any) => {
                  onSave({
                    ...data,
                    id: new Date().getTime(),
                    access: accessValue,
                  });
                  setOpen(false);
                  reset();
                },
                () => {
                  showToast({ message: "Cannot create channel" }, "error");
                }
              )}
            >
              Save
            </Button>
          </>
        }
      >
        <Input
          label="Name"
          required
          {...register("name", { required: true })}
        />
        <TextArea
          label="Description"
          className="min-h-[100px] !resize-none"
          {...register("desc")}
        />
        <OptionButtons
          onChange={setAccessValue}
          options={AccessOptions}
          label="Access"
          value={accessValue}
        />
      </StyledModal>
    </>
  );
});
