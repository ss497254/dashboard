import React, { useEffect } from "react";
import { useGet, usePost } from "src/hooks/ApiHooks";
import { useForceRender } from "src/hooks/useForceRender";
import { useChatScroll } from "src/hooks/useScroll";
import { getServerSideProps } from "src/lib/getServerSideProps";
import { MessageType } from "src/types/MessageType";
import { MessageBox } from "src/ui/MessageBox";
import { MessageInputBar } from "src/ui/MessageInputBar";
import { Spinner } from "src/ui/Spinner";

const Messages = () => {
  const render = useForceRender();
  const { ref, scroll } = useChatScroll();

  useEffect(scroll);

  const { data, loading } = useGet<MessageType[]>("/api/messages", {
    initialValue: [],
  });
  const { run: submit, loading: submitting } = usePost("/api/messages");

  return (
    <div className="flex-c h-screen-reduction">
      <div
        ref={ref}
        className="flex-col-reverse flex-grow py-4 overflow-y-scroll bg-dark-900"
      >
        {loading ? (
          <Spinner className="mx-auto mt-[35vh]" size={32} />
        ) : (
          data.map((message) => <MessageBox key={message.id} {...message} />)
        )}
      </div>
      <MessageInputBar
        submitting={submitting}
        onSubmit={async (content) => {
          const message = await submit({
            content,
            dir: Math.random() > 0.5 ? "right" : "left",
          });

          if (message.id) {
            data.push(message);
            render();
          }
        }}
      />
    </div>
  );
};

Messages.auth = true;

export { getServerSideProps };

export default Messages;
