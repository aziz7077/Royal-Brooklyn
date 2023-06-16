import LandscapingSlider from "../LandscapingSlider/LandscapingSlider";
import { motion } from "framer-motion";
import style from "./Landscaping.module.scss";

const Landscaping = () => {
  return (
    <section className={style.main}>
      <div className="container">
        <div className={style.title}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >БЛАГОУСТРОЙСТВО</motion.h2>
        </div>
        <main>
          <LandscapingSlider />
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            className={style.main__yard}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -40 },
              }}
            >МУЛЬТИЗОНАЛЬНЫЙ ЗАКРЫТЫЙ ДВОР</motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 },
              }}
              className={style.main__yard__text}>
              <p>● 60% территории будет отведено под благоустройство</p>
              <p>
                 ● Многофункциональная детская площадка в стиле бруклинского моста
                для маленьких деток
              </p>
              <div>
                <p>● Беговые дорожки</p>
                <p>Воркаут-зона</p>
                <p>Беседки и прогулочные зоны</p>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </section>
  );
};

export default Landscaping;
