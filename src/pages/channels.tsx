import React from "react";
import { getServerSideProps } from "src/lib/getServerSideProps";

const Channels = () => {
  return (
    <div className="flex-grow text-2xl font-bold bg-dark-900 c">Channels</div>
  );
};

Channels.auth = true;

export { getServerSideProps };

export default Channels;
