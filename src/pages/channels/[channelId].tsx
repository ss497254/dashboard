import { useRouter } from "next/router";
import React from "react";
import { ChatScreen } from "src/components/ChatScreen";

const Channels = () => {
  const router = useRouter();

  return (
    <div className="bg-dark-900 h-screen-reduction">
      <ChatScreen channel={router.query["channelId"] + ""} />
    </div>
  );
};

Channels.auth = true;

export default Channels;
