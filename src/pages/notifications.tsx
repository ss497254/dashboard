import React from "react";
import { getServerSideProps } from "src/lib/getServerSideProps";

const Notifications = () => {
  return (
    <div className="flex-grow text-2xl font-bold bg-dark-900 c">
      Notifications
    </div>
  );
};

Notifications.auth = true;

export { getServerSideProps };

export default Notifications;
