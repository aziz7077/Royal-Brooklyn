import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export const FlatPlanning = ({
  roomsList = [],
  preview = null,
  flatAreaPreview = null,
}) => {
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
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        {
          roomsList.map(item => {
            return <span>{item.info}</span>
          })
        }
      </h1>
      <div className={styles.main}>
        <div className={styles.preview}>
          {preview && (
            <Image
              className={styles.image}
              src={preview}
              alt="flat"
              onClick={() => setOpen(true)}
              placeholder="blur"
            />
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.roomsList}>
            {roomsList.map(({ title, size }, index) => (
              <p key={title} className={styles.room}>
                <span>
                  {index + 1}. {title}
                </span>
                <span>{size}</span>
              </p>
            ))}
          </div>
          <div className={styles.flatAreaPreview}>
            {flatAreaPreview && (
              <Image
                placeholder="blur"
                src={flatAreaPreview}
                alt="flat preview"
                onClick={() => setOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        Keyboard
        slides={[{ src: preview.src }, { src: flatAreaPreview.src }]}
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
    </div>
  );
};
