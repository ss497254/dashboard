import { Spinner } from "../Spinner";
import { ButtonProps } from "./Button";

export const BlockButton = ({
  loading,
  disabled,
  iconSize,
  children,
  className,
  ...props
}: ButtonProps) => {
  const classes = [
    "relative flex items-center outline-none focus:border focus:border-dark-600 px-3 justify-center bg-dark-800 hover:bg-dark-700",
  ];

  if (className) {
    classes.push(className);
  }

  if (disabled) {
    classes.push("cursor-not-allowed");
  }

  return (
    <button
      disabled={disabled || loading}
      className={classes.join(" ")}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 bg-inherit flex items-center justify-center">
          <Spinner size={iconSize} />
        </div>
      )}
      {children}
    </button>
  );
};
