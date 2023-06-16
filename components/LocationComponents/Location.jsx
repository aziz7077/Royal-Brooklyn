import React from "react";
import s from "./location.module.scss";
import { motion } from "framer-motion";

const Location = () => {
  const mapURL =
    "https://yandex.ru/map-widget/v1/?um=constructor%3Ab94fcbedf229899c2b65cde5b60a84aed2d1b3d4ef723a7d7990af09672022fb&amp;source=constructor";
  return (
    <>
      <div className={s.container}>
        <div className={s.content} id="location">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 },
            }}
            I
          >
            РАСПОЛОЖЕНИЕ
          </motion.h1>
          <div className={s.map}>
            <iframe
              className={s.iframe}
              src={mapURL}
              width="1184"
              height="240"
              frameborder="0"
            ></iframe>
          </div>
          <p>Улица Медерова 44 / Жукеева Пудовкина</p>
        </div>
      </div>
    </>
  );
};

export default Location;
