import React from "react";

const Display = ({ value }) => {
  return (
    <div className=" h-48 min-w-full flex justify-end items-end pb-10 text-6xl font-light dark:text-white">
      {value}
    </div>
  );
};

export default Display;
