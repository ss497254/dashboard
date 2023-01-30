import React, { useState } from "react";
import { MessageBox } from "src/ui/MessageBox";
import { MessageInputBar } from "src/ui/MessageInputBar";

const messages = [] as { id: string; text: string }[];

const Messages = () => {
  const [, update] = useState<number>();

  return (
    <div className="relative flex-c" style={{ height: "calc(100vh - 56px)" }}>
      <div className="flex-1 overflow-y-scroll bg-dark-900">
        {messages.map((message) => (
          <MessageBox key={message.id} text={message.text} />
        ))}
      </div>
      <MessageInputBar
        onSubmit={(text) => {
          messages.push({ text, id: Math.random().toString() });
          update(Math.random());
        }}
      />
    </div>
  );
};

Messages.auth = true;

export default Messages;
