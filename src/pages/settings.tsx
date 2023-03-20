import React from "react";
import { DeleteAllMessages } from "src/components/DeleteAllMessages";
import { getServerSideProps } from "src/lib/getServerSideProps";

const Settings = () => {
  return (
    <div className="flex-grow p-3 text-2xl md:p-6 lg:p-8 bg-dark-900">
      <DeleteAllMessages />
    </div>
  );
};

Settings.auth = true;

export { getServerSideProps };

export default Settings;
