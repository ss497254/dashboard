import React from "react";
import { useDelete } from "src/hooks/ApiHooks";
import { getServerSideProps } from "src/lib/getServerSideProps";
import { Button } from "src/ui/Button";

const Settings = () => {
  const { run, loading } = useDelete("/api/delete-all-messages");

  return (
    <div className="flex-grow p-8 text-2xl bg-dark-900">
      <div className="rounded-lg shadow-md bg-dark-800">
        <h4 className="p-8 text-2xl font-bold">Delete all messages</h4>
        <div className="p-8 text-sm border-y border-dark-600">
          Permanently remove your Personal Account and all of its contents from
          the platform. This action is not reversible, so please continue with
          caution.
        </div>
        <div className="flex justify-end p-4 rounded-b-lg bg-dark-700">
          <Button
            btn="danger"
            loading={loading}
            className="w-48 rounded"
            onClick={() => {
              run({});
            }}
          >
            Delete all messages
          </Button>
        </div>
      </div>
    </div>
  );
};

Settings.auth = true;

export { getServerSideProps };

export default Settings;
