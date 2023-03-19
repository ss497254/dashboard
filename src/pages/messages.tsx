import React from "react";
import { useGet, usePost } from "src/hooks/ApiHooks";
import { useForceRender } from "src/hooks/useForceRender";
import { getServerSideProps } from "src/lib/getServerSideProps";
import { MessageType } from "src/types/MessageType";
import { MessageBox } from "src/ui/MessageBox";
import { MessageInputBar } from "src/ui/MessageInputBar";
import { Spinner } from "src/ui/Spinner";

const messages = [] as { id: number; text: string }[];

const Messages = () => {
  // const render = useForceRender();
  const { data, loading } = useGet<MessageType[]>("/api/messages");
  const {} = usePost("/api/messages");

  console.log(data);

  return (
    <div className="bg-red-100 flex-c h-screen-reduction">
      <div className="flex-grow overflow-y-scroll bg-dark-900">
        {loading ? (
          <Spinner className="mx-auto" size={26} />
        ) : (
          data &&
          data.map((message) => <MessageBox key={message.id} {...message} />)
        )}
      </div>
      <MessageInputBar
        onSubmit={(text) => {
          messages.push({ text, id: new Date().getTime() });
        }}
      />
    </div>
  );
};

Messages.auth = true;

export { getServerSideProps };

export default Messages;
