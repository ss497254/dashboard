import React from "react";
import { useForceRender } from "src/hooks/useForceRender";
import { getServerSideProps } from "src/lib/getServerSideProps";
import { MessageBox } from "src/ui/MessageBox";
import { MessageInputBar } from "src/ui/MessageInputBar";

const messages = [] as { id: number; text: string }[];

const Messages = () => {
  const render = useForceRender();

  return (
    <div className="bg-red-100 flex-c h-screen-reduction">
      <div className="flex-grow overflow-y-scroll bg-dark-900">
        {messages.map((message) => (
          <MessageBox key={message.id} {...message} />
        ))}
      </div>
      <MessageInputBar
        onSubmit={(text) => {
          messages.push({ text, id: new Date().getTime() });
          render();
        }}
      />
    </div>
  );
};

Messages.auth = true;

export { getServerSideProps };

export default Messages;
