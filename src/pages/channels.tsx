import React from "react";
import { getServerSideProps } from "src/lib/getServerSideProps";
import { Button } from "src/ui/Button";
import { ChannelCard } from "src/ui/ChannelCard";

const channels = [
  {
    id: 1680552796811,
    access: "public",
    name: "Boring chat",
    desc: "Just, a boring chat nothing to show here Lorem ipsum dolor sit amet",
  },
  {
    id: 1680552796811,
    access: "private",
    name: "Being Human",
    desc: "Just, a boring chat nothing to show here Lorem ipsum dolor sit amet",
  },
  {
    id: 1680552796811,
    access: "private",
    name: "Wrong spelling",
    desc: "Just, a boring chat nothing to show here Lorem ipsum dolor sit amet",
  },
  {
    id: 1680552796811,
    access: "public",
    name: "Long title",
    desc: "Just, a boring chat nothing to show here Lorem ipsum dolor sit amet",
  },
  {
    id: 1680552796811,
    access: "private",
    name: "Boring chat",
    desc: "Just, a boring chat nothing to show here Lorem ipsum dolor sit amet",
  },
  {
    id: 1680552796811,
    access: "public",
    name: "Boring chat",
    desc: "Just, a boring chat nothing to show here Lorem ipsum dolor sit amet",
  },
  {
    id: 1680552796811,
    access: "private",
    name: "Boring chat",
    desc: "Just, a boring chat nothing to show here Lorem ipsum dolor sit amet",
  },
] as any[];

const Channels = () => {
  return (
    <div className="grid p-1 pb-6 md:p-4 bg-dark-900 md:grid-cols-2">
      <div className="justify-between m-4 mt-8 md:col-span-2 f">
        <h4>Channels</h4>
        <Button className="px-8 rounded-md" btn="success">
          Add channel
        </Button>
      </div>
      {channels.map((channel, idx) => (
        <ChannelCard key={idx} {...channel} />
      ))}
    </div>
  );
};

Channels.auth = true;

export { getServerSideProps };

export default Channels;
