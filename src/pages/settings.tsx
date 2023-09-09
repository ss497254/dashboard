import { DeleteAllMessages } from "src/components/Settings/DeleteAllMessages";
import { PersistentSession } from "src/components/Settings/PersistentSession";
import { UserCard } from "src/components/Settings/UserCard";

const Settings = () => {
  return (
    <div className="p-3 text-2xl md:p-6 lg:p-8 bg-dark-900 max-w-7xl mx-auto">
      <UserCard />
      <DeleteAllMessages />
      <PersistentSession />
    </div>
  );
};

Settings.auth = true;

export default Settings;
