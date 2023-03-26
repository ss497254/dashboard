import React from "react";
import { DeleteAllMessages } from "src/components/Settings/DeleteAllMessages";
import { PersistentSession } from "src/components/Settings/PersistentSession";
import { getServerSideProps } from "src/lib/getServerSideProps";

const Settings = () => {
  return (
    <div className="p-3 overflow-y-scroll text-2xl md:p-6 lg:p-8 bg-dark-900">
      <DeleteAllMessages />
      <PersistentSession />
      <DeleteAllMessages />
      <PersistentSession />
    </div>
  );
};

Settings.auth = true;

export { getServerSideProps };

export default Settings;
