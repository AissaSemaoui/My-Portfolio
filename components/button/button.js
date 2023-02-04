import React from "react";
import { twMerge } from "tailwind-merge";

function PrimaryButton({ children, className, ...rest }) {
  return (
    <button
      className={twMerge(
        "text-md w-max font-bold py-4 px-12 bg-red/90 text-white hover:bg-red rounded-sm",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className, ...rest }) {
  return (
    <button
      className={twMerge(
        "text-md w-max font-bold py-3 px-10 border-2 text-red hover:text-white border-red/90  hover:border-red hover:shadow-sm hover:bg-red/90 active:bg-red rounded-sm",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ThirdButton({ children, className, ...rest }) {
  return (
    <button
      className={twMerge(
        "py-4 px-12 bg-red/90 text-white hover:bg-red rounded-sm",
        className
      )}
      {...rest}
    >
      Lets gooo
    </button>
  );
}

export default PrimaryButton;
