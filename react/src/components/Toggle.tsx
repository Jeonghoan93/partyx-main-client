import { useState } from "react";

import React from "react";

type ToggleProps = {
  initialState?: boolean;
  onToggle?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  id: string;
};

const Toggle = ({ initialState = false, onToggle, id }: ToggleProps) => {
  const [isToggled, setToggled] = useState(initialState);

  const handleClick = () => {
    setToggled(!isToggled);
    if (onToggle) onToggle(!isToggled);
  };

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none">
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={isToggled}
        onChange={handleClick}
        className="hidden"
      />
      <label
        htmlFor={id}
        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      >
        <span
          className={`block h-6 w-6 rounded-full ${
            isToggled ? "bg-blue-400 transform translate-x-4" : "bg-white"
          } transition-transform duration-100 ease-in`}
        ></span>
      </label>
    </div>
  );
};

export default Toggle;
