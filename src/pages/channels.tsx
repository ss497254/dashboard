import { CreateChannelButton } from "src/components/CreateChannelButton";
import { IChannel } from "src/types/ChannelType";
import { ChannelCard } from "src/ui/ChannelCard";

const channels: IChannel[] = [
  {
    access: "public",
    name: "Zonic",
    desc: "Just, a boring chat nothing to show here Lorem ipsum dolor sit amet",
    activeMember: 2,
  },
  {
    access: "private",
    name: "Logic",
    desc: "Search, explore and edit the best-fitting free icons or vectors for your projects using a wide variety vector library. Download free SVG vectors and icons for commercial use.",
    activeMember: 0,
  },
];

const onSave = () => {};

const Channels = () => {
  return (
    <div className="grid p-1 pb-6 md:p-4 bg-dark-900 md:grid-cols-2 max-w-7xl mx-auto">
      <div className="justify-between m-4 mt-8 md:col-span-2 f">
        <h4>Channels</h4>
        <CreateChannelButton onSave={onSave} />
      </div>
      {channels.map((channel) => (
        <ChannelCard key={channel.name} {...channel} />
      ))}
    </div>
  );
};

Channels.auth = true;

export default Channels;
