import { useScrollToBottom } from "src/hooks/useScrollToBottom";
import { useConfigStore } from "src/stores/useConfigStore";
import { Spinner } from "src/ui/Spinner";
import { getMessageStore } from "src/lib/getMessageStore";
import React, { useEffect } from "react";
import { BlockButton } from "src/ui/Buttons";
import { MessageBox } from "./MessageBox";

interface MessagesContainerProps extends React.PropsWithChildren {
  channel: string;
}

export const MessagesContainer: React.FC<MessagesContainerProps> = ({
  channel,
}) => {
  const { ref, scroll } = useScrollToBottom();

  return (
    <div className="flex-grow overflow-auto p-1.5" ref={ref}>
      <OldMessagesList channel={channel} />
      <NewMessagesList channel={channel} scroll={scroll} />
    </div>
  );
};

export const OldMessagesList: React.FC<{ channel: string }> = ({ channel }) => {
  const { username } = useConfigStore((state) => state.user)!;
  const [oldMessages, isLoading, loadOldMessages] = getMessageStore(channel)(
    (state) => [state.oldMessages, state.isLoading, state.loadOldMessages]
  );

  return (
    <>
      <div className="py-6 flex justify-center">
        {isLoading ? (
          <Spinner size={30} />
        ) : (
          <BlockButton className="py-2 rounded-md" onClick={loadOldMessages}>
            Load previous messages
          </BlockButton>
        )}
      </div>
      {oldMessages.map((x) => (
        <MessageBox
          key={x.timestamp}
          dir={x.username === username ? "right" : "left"}
          {...x}
        />
      ))}
    </>
  );
};

export const NewMessagesList: React.FC<{
  channel: string;
  scroll: () => void;
}> = ({ channel, scroll }) => {
  const { username } = useConfigStore((state) => state.user)!;
  const newMessages = getMessageStore(channel)((state) => state.newMessages);

  useEffect(scroll, [newMessages]);

  return (
    <>
      {newMessages.map((x) => (
        <MessageBox
          key={x.timestamp}
          dir={x.username === username ? "right" : "left"}
          {...x}
        />
      ))}
    </>
  );
};
