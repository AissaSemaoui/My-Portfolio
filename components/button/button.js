import React from "react";

function PrimaryButton({ children, className }) {
  return (
    <button
      className={`text-md w-max  font-bold py-4 px-12 bg-red/90 text-white hover:bg-red rounded-sm ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className }) {
  return (
    <button
      className={`text-md w-max font-bold py-2 px-10 border-2 text-red border-red/90  hover:border-red hover:bg-red/5 rounded-sm ${className}`}
    >
      {children}
    </button>
  );
}

export function ThirdButton() {
  return (
    <button className="py-4 px-12 bg-red/90 text-white hover:bg-red rounded-sm">
      Let's gooo
    </button>
  );
}

export default PrimaryButton;
