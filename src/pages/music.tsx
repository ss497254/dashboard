import { ChatScreen } from "src/components/ChatScreen";
import { CHAT_GPT_VERSION } from "src/data/constants";
import { getServerSideProps } from "src/lib/getServerSideProps";

const Messages = () => {
  return (
    <div className="bg-dark-900 h-screen-reduction">
      <ChatScreen channel={CHAT_GPT_VERSION} />
    </div>
  );
};

Messages.auth = true;

export { getServerSideProps };

export default Messages;
