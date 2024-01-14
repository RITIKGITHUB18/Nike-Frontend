import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center item-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full focus:outline-none focus:ring-1
      ${
        backgroundColor
          ? `${backgroundColor}${textColor}${borderColor} hover:bg-gray-300 focus:ring-gray-200 active:bg-zinc-300`
          : "bg-coral-red text-white border-coral-red hover:bg-coral-red-200  focus:ring-coral-red active:bg-coral-red-200"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="iconUrl"
          className="ml-2 rounded-full w-5 h-5 justify-center item-center"
        />
      )}
    </button>
  );
};

export default Button;
