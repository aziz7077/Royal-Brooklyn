import s from "./architecture.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import sldie1 from "../../public/lol.jpg";
import sldie2 from "../../public//lol1.png";
import sldie3 from "../../public/lol2.png";
import sldie4 from "../../public/okkk.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import slide from "../../assets/slideOne.jpg";
import slideTwo from "../../assets/slideTwo.jpg";
import slideThree from "../../assets/slideThree.jpg";
import slideFour from "../../assets/slideFour.jpg";

const Architecture = () => {
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
      <section className={s.container}>
        <div className={s.content} id="architecture">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            АРХИТЕКТУРА ЖИЛОГО КОМПЛЕКСА
          </motion.h1>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            BROOKLYN
          </motion.h1>
          <div className={s.slider}></div>
          <div className={s.info}>
            <motion.span
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={s.tag}
            >
              <div className={s.sliderR_block}>
                <div className={s.sliderR_slide}>
                  <Image
                    onClick={() => setOpen(true)}
                    className={s.sldie1}
                    src={sldie1}
                    alt="logo"
                    placeholder="blur"
                  />
                  <Image
                    placeholder="blur"
                    onClick={() => setOpen(true)}
                    className={s.sldie2}
                    src={sldie2}
                    alt="logo"
                  />
                  <Image
                    placeholder="blur"
                    onClick={() => setOpen(true)}
                    className={s.sldie3}
                    src={sldie3}
                    alt="logo"
                  />
                </div>
                <div class={s.container_img} onClick={() => setOpen(true)}>
                  <Image
                    onClick={() => setOpen(true)}
                    className={s.sldie4}
                    src={sldie4}
                    alt="logo"
                    placeholder="blur"
                  />
                  <div class={s.overlay}>
                    <p>посмотреть галерею</p>
                  </div>
                </div>
              </div>{" "}
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  paddingTop: "40px",
                }}
              >
                <b>
                  <a>Внешний облик жилого комплекса BROOKLYN</a> - исполнен в
                  американском стиле
                </b>
              </div>
            </motion.span>
            <br />
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              className={s.under_tag}
            >
              <div className={s.fasad} style={{ textAlign: "center" }}>
                <br />
                <a>Фасад:</a> “Вентилируемый фасад” <br />
                Корзины для кондиционерных блоков <br />
                Клинкерный кирпич из Германии <br />
                Широкоформатный керамогранит <br />
                Благородные натуральные камни <br />
                Много стекла и металла <br />
                Панорамные окна
              </div>
            </motion.div>
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            Keyboard
            slides={[
              { src: slide.src },
              { src: slideTwo.src },
              { src: slideThree.src },
              { src: slideFour.src },
            ]}
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
      </section>
  );
};

export default Architecture;
