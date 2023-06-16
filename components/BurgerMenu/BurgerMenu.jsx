import React, { useState } from "react";
import s from "./BurgerMenu.module.scss";
import cn from "classnames";

const BurgerMenu = ({ showNav, setShowNav }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setShowNav(!showNav);
  };

  return (
    <div
      className={cn(s.burgerMenu, { [s.active]: isActive })}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
