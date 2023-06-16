import Image from "next/image";
import React, { useState } from "react";
import AnimatedTextCharacterParagraph from "../AnimatedText/AnimatedParagraph";
import s from "./Header.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import logoRoyal from "../../static/logoRoyal.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className={s.header}>
        <div className={s.header_container}>
          <div className={s.header_item}>
            <ul>
              <li className={s.hedaer_link}>
                <a href="#">
                  <AnimatedTextCharacterParagraph text={"Главная"} />
                </a>
              </li>
              <li className={s.hedaer_link}>
                <a href="#service">
                  <AnimatedTextCharacterParagraph text={"О нас"} />
                </a>
              </li>
            </ul>
          </div>

          <div style={{ padding: "8px" }}>
            <Image
              src={logoRoyal}
              width={144}
              height={45}
              alt="logo"
              placeholder="blur"
            />
          </div>

          <div className={s.header_item}>
            <ul>
              <li className={s.hedaer_link}>
                <a href="#architecture">
                  <AnimatedTextCharacterParagraph text={"Преимущества"} />
                </a>
              </li>
              <li className={s.hedaer_link}>
                <a href="#planning">
                  <AnimatedTextCharacterParagraph text={"Планировки"} />
                </a>
              </li>
            </ul>
          </div>
         <BurgerMenu showNav={showNav} setShowNav={setShowNav}/>
        </div>
      </header>
      {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
    </>
  );
};

export default Header;
