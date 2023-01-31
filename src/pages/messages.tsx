import React, { useState } from "react";
import { MessageBox } from "src/ui/MessageBox";
import { MessageInputBar } from "src/ui/MessageInputBar";

const messages = [] as { id: number; text: string }[];

const Messages = () => {
  const [, update] = useState<object>();

  return (
    <div className="relative flex-c" style={{ height: "calc(100vh - 56px)" }}>
      <div className="flex-1 overflow-y-scroll bg-dark-900">
        {messages.map((message) => (
          <MessageBox key={message.id} {...message} />
        ))}
      </div>
      <MessageInputBar
        onSubmit={(text) => {
          messages.push({ text, id: new Date().getTime() });
          update({});
        }}
      />
    </div>
  );
};

Messages.auth = true;

export default Messages;
