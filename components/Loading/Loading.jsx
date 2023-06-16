import Image from "next/image";
import React, {useEffect} from "react";
import s from "./Loading.module.scss";
import logoRoyal from '../../static/logoRoyal.png'

const Loading = ({loading}) => {

  const style = {
    transform: "scale(.1)",
    opacity: "0",
    transition: ".5s"
  }

  return (
    <div className={s.waviy} style={ loading? {display:'flex'}: style}>
      <div className={s.waviy_center}>
        <Image className={s.loading_img} src={logoRoyal} width={360} height={120} alt="logo"/>
        <div style={{ marginTop: '40px' }}>
          <span style={{ "--i": 1 }}>B</span>
          <span style={{ "--i": 2 }}>R</span>
          <span style={{ "--i": 3 }}>O</span>
          <span style={{ "--i": 4 }}>O</span>
          <span style={{ "--i": 5 }}>K</span>
          <span style={{ "--i": 6 }}>L</span>
          <span style={{ "--i": 7 }}>Y</span>
          <span style={{ "--i": 8 }}>N</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
