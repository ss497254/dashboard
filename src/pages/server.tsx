import React from "react";
import { getServerSideProps } from "src/lib/getServerSideProps";

const Server = () => {
  return (
    <div className="flex-grow text-2xl font-bold bg-dark-900 c">Server</div>
  );
};

Server.auth = true;

export { getServerSideProps };

export default Server;
