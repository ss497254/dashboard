import { useRouter } from "next/router";
import React from "react";
import { getServerSideProps } from "src/lib/getServerSideProps";

const Channels = () => {
  const router = useRouter();

  return (
    <div className="flex-grow text-2xl font-bold bg-dark-900 c">
      channel_id {router.query["channelId"]}
    </div>
  );
};

Channels.auth = true;

export { getServerSideProps };

export default Channels;
