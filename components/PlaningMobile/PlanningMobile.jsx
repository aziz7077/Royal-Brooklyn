import React, { useState } from "react";
import s from "./PlanningMobile.module.scss";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import planing1 from '../../public/planing1.jpg'
import planing2 from '../../public/planing1.jpg'

import Image from "next/image";

const PlanningMobile = () => {
  const [open, setOpen] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(500);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = useState(2);
  const [keyboardMoveDistance, setKeyboardMoveDistance] = useState(50);
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] =
    React.useState(100);
  const [scrollToZoom, setScrollToZoom] = React.useState(false);

  return (
      <section className={s.container} id="planning">
        <div className={s.planing}>
          <h1>Блок №1 план с 3 по 16 этажи</h1>
          <Image onClick={() => setOpen(true)} src={planing1} alt="planing1" />
          <hr />
          <h1>Блок №2, №3 план с 3 по 16 этажи</h1>
          <Image onClick={() => setOpen(true)} src={planing2}  alt="planing2" />
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          Keyboard
          slides={[{ src: planing1.src }]}
          plugins={[Captions, Zoom]}
          animation={{ zoom: animationDuration }}
          zoom={{
            maxZoomPixelRatio,
            zoomInMultiplier,
            doubleTapDelay,
            doubleClickDelay,
            doubleClickMaxStops,
            keyboardMoveDistance,
            wheelZoomDistanceFactor,
            pinchZoomDistanceFactor,
            scrollToZoom,
          }}
        />
      </section>
  );
};

export default PlanningMobile;
