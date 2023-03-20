import React from "react";
import { useGet, usePost } from "src/hooks/ApiHooks";
import { useElementVisible } from "src/hooks/useElementVisible";
import { useForceRender } from "src/hooks/useForceRender";
import { Loading } from "src/icons";
import { getServerSideProps } from "src/lib/getServerSideProps";
import { MessageType } from "src/types/MessageType";
import { MessageBox } from "src/ui/MessageBox";
import { MessageInputBar } from "src/ui/MessageInputBar";

let messages: MessageType[] = [];
let noMore = false;

const Messages = () => {
  const render = useForceRender();
  const { loading, run } = useGet<MessageType[]>("/api/messages", {
    initialValue: [],
  });
  const { run: submit, loading: submitting } = usePost("/api/messages");

  const { ref } = useElementVisible(async () => {
    if (noMore) return;

    let data = await run(`?offset=${messages.length}`);

    if (data.length === 0) noMore = true;
    messages.push(...data);
    render();
  });

  return (
    <div className="flex-c h-screen-reduction">
      <div className="flex-col-reverse flex-grow py-4 overflow-y-scroll rotate-180 bg-dark-900">
        {messages.map((message) => (
          <MessageBox key={message.id} {...message} />
        ))}
        {loading && <Loading className="mx-auto my-10" size={24} />}
        <h4 ref={ref} className="mt-10 text-center rotate-180">
          Messages
        </h4>
      </div>
      <MessageInputBar
        submitting={submitting}
        onSubmit={async (content) => {
          const message = await submit({
            content,
            dir: Math.random() > 0.5 ? "right" : "left",
          });

          if (message.id) {
            messages.unshift(message);
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
