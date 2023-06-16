import React from "react";
import { motion } from "framer-motion";
import style from "./Description.module.scss";
import Image from "next/image";
import logo from "../../assets/logo.png";
import image1 from "../../assets/iconDescriptionOne.png";
import image2 from "../../assets/iconDescriptionTwo.png";
import image3 from "../../assets/iconDescriptionThree.png";
import image4 from "../../assets/iconDescriptionFour.png";
import image5 from "../../assets/iconDescriptionFive.png";
import image6 from "../../assets/iconDescriptionSix.png";
import image7 from "../../assets/iconDescriptionSeven.png";
import image8 from "../../assets/iconDescriptionEight.png";
import image9 from "../../assets/iconDescriptionNine.png";
import image10 from "../../assets/iconDescriptionTen.png";

const Description = () => {
  return (
    <section className={style.main}>
      <div className={style.main__background}></div>
      <div className={style.main__background_opacity}></div>
      <div className={style.main__blocks}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.logo}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <a href="https://royal.kg/" target="_blank">
              <Image src={logo} alt="logo" placeholder="blur" />
            </a>
          </motion.div>
        </motion.div>
        <motion.nav
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image1} alt="description icon" placeholder="blur" />
          <h3>Гостевой и подземный паркинг</h3>
        </motion.nav>
        <motion.nav
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image2} alt="description icon" placeholder="blur" />
          <h3>Алюминиевые окна теплой серии</h3>
        </motion.nav>
        <motion.nav
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image3} alt="description icon" placeholder="blur" />
          <h3>Просторный двор</h3>
        </motion.nav>
        <motion.nav
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image4} alt="description icon" placeholder="blur" />
          <h3>Детская площадка европейского стандарта</h3>
        </motion.nav>
        <motion.nav
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image5} alt="description icon" placeholder="blur" />
          <h3>Полная газификация</h3>
        </motion.nav>
        <motion.aside
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image6} alt="description icon" placeholder="blur" />
          <h3>Круговая шумоизоляция от KNAUF Insulation</h3>
        </motion.aside>
        <motion.aside
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image7} alt="description icon" placeholder="blur" />
          <h3>Теплоизоляция наружных стен</h3>
        </motion.aside>
        <motion.aside
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image8} alt="description icon" placeholder="blur" />
          <h3>Центральное отопление</h3>
        </motion.aside>
        <motion.aside
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image9} alt="description icon" placeholder="blur" />
          <h3>Индивидуальная планировка</h3>
        </motion.aside>
        <motion.aside
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={style.main__blocks__block}
        >
          <Image src={image10} alt="description icon" placeholder="blur" />
          <h3>В подъезде 2 лифта европейского стандарта</h3>
        </motion.aside>
      </div>
    </section>
  );
};

export default Description;
