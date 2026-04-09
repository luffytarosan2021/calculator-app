import React from "react";

const Button = ({ children, type, onClick }) => {
  switch (type) {
    case "secondary":
      return <ButtonSecondary onClick={onClick}>{children}</ButtonSecondary>;
    case "primary":
      return <ButtonPrimary onClick={onClick}>{children}</ButtonPrimary>;
    default:
      return (
        <div
          className="w-full h-full rounded-3xl overflow-hidden relative flex justify-center items-center shadow-2xl cursor-pointer active:scale-105 transition-all duration-300"
          onClick={onClick}
        >
          <div className="w-full h-full bg-gradient-to-tl from-white to-gray-200 dark:from-gray-600 dark:to-gray-800 rounded-3xl flex justify-center items-center border-[3px] border-white border-r-gray-200 border-b-gray-200 dark:border-gray-600 dark:border-b-gray-800 dark:border-r-gray-800  blur-[2px]"></div>
          <span className="absolute text-gray-800 dark:text-white text-xl font-light">
            {children}
          </span>
        </div>
      );
  }
};

const ButtonSecondary = ({ children, onClick }) => {
  return (
    <div
      className="w-full h-full rounded-3xl overflow-hidden relative flex justify-center items-center shadow-2xl cursor-pointer active:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      <div className="w-full h-full bg-gradient-to-tl from-gray-300 to-gray-400 dark:from-gray-400 dark:to-gray-600 rounded-3xl flex justify-center items-center border-[3px] border-gray-300 dark:border-gray-400 border-b-gray-400 dark: dark:border-b-gray-600 border-r-gray-400 dark:border-r-gray-600 blur-[2px]"></div>
      <span className="absolute text-gray-800 dark:text-white text-xl font-semibold">
        {children}
      </span>
    </div>
  );
};

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <div
      className="w-full h-full rounded-3xl overflow-hidden relative flex justify-center items-center shadow-2xl cursor-pointer active:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      <div className="w-full h-full bg-gradient-to-tl from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-700 rounded-3xl flex justify-center items-center border-[3px] border-orange-200 border-r-orange-500 border-b-orange-500 dark:border-orange-500 dark:border-b-orange-600 dark:border-r-orange-600  blur-[2px]"></div>
      <span className="absolute text-white text-3xl ">{children}</span>
    </div>
  );
};

export default Button;
