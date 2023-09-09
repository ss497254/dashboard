import { useToastStore } from "src/stores/useToastStore";
import { ToastTypes } from "src/types/ToastType";
import { randomNumberFromRange } from "src/utils/lodash";

const Notifications = () => {
  const { add } = useToastStore();

  return (
    <div className="flex-grow text-2xl font-bold bg-dark-900 c">
      <button
        className="px-6 py-3 bg-blue-500 rounded-full"
        onClick={() => {
          const type = ToastTypes[randomNumberFromRange(3)];
          const message = `${type.toUpperCase()} notification`;
          add({
            message,
            desc: "Some notification description",
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

export default Notifications;
