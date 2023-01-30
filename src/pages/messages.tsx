import React from "react";
import { ExpandingTextArea } from "src/ui/ExpandingTextArea";
import { IconButton } from "src/ui/IconButton";
import { MessageBox } from "src/ui/MessageBox";

const Messages = () => {
  return (
    <div className="relative flex-c" style={{ height: "calc(100vh - 56px)" }}>
      <div className="flex-1 bg-dark-900">
        <MessageBox
          text="p-3 ml-3 rounded-full hover:rounded h-fit bg-dark-600 text-dark-100"
          direction="left"
        />
      </div>
      <div className="fixed bottom-0 left-0 lg:left-[280px] right-0 flex p-3 px-4 bg-dark-800">
        <ExpandingTextArea />
        <IconButton
          icon="Rocket"
          className="p-3 ml-3 rounded-full hover:rounded h-fit bg-dark-600 text-dark-100"
        />
      </div>
    </div>
  );
};

Messages.auth = true;

export default Messages;
