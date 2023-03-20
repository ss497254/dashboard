import React, { forwardRef } from "react";
import * as Icons from "../icons";
import { Spinner } from "./Spinner";

const BtnSizes = {
  tiny: "text-xs px-2.5 py-1",
  small: "text-sm leading-4 px-3 py-2",
  medium: "text-sm px-4 py-2",
  large: "text-base px-5 py-2",
  xlarge: "text-base px-7 py-3",
};

const ButtonType = {
  default: "bg-blue-500 hover:bg-blue-600",
  success: "bg-emerald-500 hover:bg-emerald-600",
  danger: "bg-red-500 hover:bg-red-600",
  none: "",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  btn?: keyof typeof ButtonType;
  iconSize?: number;
  icon?: keyof typeof Icons;
  className?: string;
  children?: React.ReactNode;
  Icon?: React.ReactNode;
  loadingCentered?: boolean;
  size?: keyof typeof BtnSizes;
}

export const Button: React.FC<ButtonProps> = ({
  loading,
  btn = "default",
  icon,
  size = "medium",
  disabled,
  iconSize,
  children,
  className,
  ...props
}) => {
  let classes = ["relative c text-white"];

  classes.push(ButtonType[btn]);

  if (className) {
    classes.push(className);
  }

  if (size) {
    classes.push(BtnSizes[size]);
  }

  if (disabled) {
    classes.push("cursor-not-allowed");
  }

  return (
    <button disabled={disabled} className={classes.join(" ")} {...props}>
      {loading && (
        <div className="absolute w-full bg-inherit">
          <Spinner size={22} className="mx-auto" />
        </div>
      )}
      {icon && Icons[icon]({ size: iconSize, className: "mr-3" })}
      {children}
    </button>
  );
};

// export const Buttosn = forwardRef<RefHandle, ButtonProps>(
//   (
//     {
//       block,
//       className,
//       children,
//       danger,
//       disabled = false,
//       onClick,
//       icon,
//       iconRight,
//       loading = false,
//       loadingCentered = false,
//       shadow = true,
//       size = "tiny",
//       style,
//       type = "primary",
//       htmlType = "button",
//       ariaSelected,
//       ariaControls,
//       tabIndex,
//       role,
//       as,
//       textAlign = "center",
//       ...props
//     }: ButtonProps,
//     ref
//   ) => {
//     // button ref
//     // const containerRef = useRef<HTMLElement>(null)
//     const buttonRef = useRef<HTMLButtonElement>(null);

//     useImperativeHandle(ref, () => ({
//       button: () => {
//         return buttonRef.current;
//       },
//     }));

//     let __styles = styleHandler("button");

//     // styles
//     const showIcon = loading || icon;

//     let classes = [__styles.base];
//     let containerClasses = [__styles.container];

//     classes.push(__styles.type[type]);

//     if (block) {
//       containerClasses.push(__styles.block);
//       classes.push(__styles.block);
//     }

//     if (shadow && type !== "link" && type !== "text") {
//       classes.push(__styles.shadow);
//     }

//     if (size) {
//       classes.push(__styles.size[size]);
//     }

//     if (className) {
//       classes.push(className);
//     }

//     if (disabled) {
//       classes.push(__styles.disabled);
//     }

//     const iconLoaderClasses = [__styles.loading];

//     // custom button tag
//     const CustomButton = ({ ...props }) => {
//       const Tag = as as keyof JSX.IntrinsicElements;
//       return <Tag {...props} />;
//     };

//     const buttonContent = (
//       <>
//         {showIcon &&
//           (loading ? (
//             <IconLoader size={size} className={iconLoaderClasses.join(" ")} />
//           ) : icon ? (
//             <IconContext.Provider value={{ contextSize: size }}>
//               {icon}
//             </IconContext.Provider>
//           ) : null)}
//         {children && <span className={__styles.label}>{children}</span>}
//         {iconRight && !loading && (
//           <IconContext.Provider value={{ contextSize: size }}>
//             {iconRight}
//           </IconContext.Provider>
//         )}
//       </>
//     );

//     if (as) {
//       return (
//         <CustomButton
//           {...props}
//           className={classes.join(" ")}
//           onClick={onClick}
//           style={style}
//         >
//           {buttonContent}
//         </CustomButton>
//       );
//     } else {
//       return (
//         // <span ref={containerRef} className={containerClasses.join(' ')}>
//         <button
//           {...props}
//           ref={buttonRef}
//           className={classes.join(" ")}
//           disabled={loading || (disabled && true)}
//           onClick={onClick}
//           style={style}
//           type={htmlType}
//           aria-selected={ariaSelected}
//           aria-controls={ariaControls}
//           tabIndex={tabIndex}
//           role={role}
//           form={props.form}
//         >
//           {buttonContent}
//         </button>
//         // </span>
//       );
//     }
//   }
// );
