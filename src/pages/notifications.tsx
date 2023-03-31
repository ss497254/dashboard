import React from "react";
import { useToastStore } from "src/global-stores/useToastStore";
import { getServerSideProps } from "src/lib/getServerSideProps";
import { ToastType } from "src/types/ToastType";
import { randomNumberFromRange } from "src/utils/lodash";

const Notifications = () => {
  const { add } = useToastStore();

  return (
    <div className="flex-grow text-2xl font-bold bg-dark-900 c">
      <button
        className="px-6 py-3 bg-blue-500 rounded-full"
        onClick={() => {
          const types = Object.keys(ToastType);
          const type = types[randomNumberFromRange(types.length - 1)];
          const message = `${type.toUpperCase()} notification`;
          add({
            message,
            desc: "Some notification description",
            timeout: 5000,
            // @ts-ignore
            type,
          });
        }}
      >
        Add Toast
      </button>
    </div>
  );
};

Notifications.auth = true;

export { getServerSideProps };

export default Notifications;
