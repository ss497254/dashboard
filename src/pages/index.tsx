import React from "react";
import { getServerSideProps } from "src/lib/getServerSideProps";

function Home() {
  return <div className="flex-grow text-2xl font-bold bg-dark-900 c">Home</div>;
}

Home.auth = true;

export { getServerSideProps };

export default Home;
