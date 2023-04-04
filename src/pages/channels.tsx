import React from "react";
import { CreateChannelButton } from "src/components/CreateChannelButton";
import { useForceRender } from "src/hooks/useForceRender";
import { getServerSideProps } from "src/lib/getServerSideProps";
import { IChannel } from "src/types/ChannelType";
import { ChannelCard } from "src/ui/ChannelCard";

const channels = [
  {
    id: 1680552796811,
    access: "public",
    name: "Boring chat",
    desc: "Just, a boring chat nothing to show here Lorem ipsum dolor sit amet",
  },
] as IChannel[];

let render: () => void;
const onSave = (channel: IChannel) => {
  channels.push(channel);
  render();
};

const Channels = () => {
  render = useForceRender();

  return (
    <div className="grid p-1 pb-6 md:p-4 bg-dark-900 md:grid-cols-2">
      <div className="justify-between m-4 mt-8 md:col-span-2 f">
        <h4>Channels</h4>
        <CreateChannelButton onSave={onSave} />
      </div>
      {channels.map((channel) => (
        <ChannelCard key={channel.id} {...channel} />
      ))}
    </div>
  );
};

Channels.auth = true;

export { getServerSideProps };

export default Channels;
