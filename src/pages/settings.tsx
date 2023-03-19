import React from "react";
import { getServerSideProps } from "src/lib/getServerSideProps";

const Settings = () => {
  return (
    <div className="flex-grow text-2xl font-bold bg-dark-900 c">Settings</div>
  );
};

Settings.auth = true;

export { getServerSideProps };

export default Settings;
