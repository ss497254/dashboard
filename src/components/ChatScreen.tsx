import React from "react";

import { MessageInputBar } from "src/ui/MessageInput";
import { MessagesContainer } from "src/ui/Messages";
import { getMessageStore } from "src/lib/getMessageStore";
import { ResetIcon, ThreeDotsIcon } from "src/icons";
import { IconButton } from "src/ui/IconButton";

interface ChatScreenProps extends React.PropsWithChildren {
  channel: string;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({ channel }) => {
  const clearMessages = getMessageStore(channel)(
    (state) => state.clearMessages
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-2 border border-dark-700 flex items-center space-x-1 bg-dark-800">
        <h5 className="flex-grow px-4">{channel}</h5>
        <IconButton onClick={clearMessages}>
          <ResetIcon size={15} />
        </IconButton>
        <IconButton>
          <ThreeDotsIcon size={15} />
        </IconButton>
      </div>
      <MessagesContainer channel={channel} />
      <MessageInputBar channel={channel} />
    </div>
  );
};
