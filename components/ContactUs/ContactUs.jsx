import React from "react";
import style from "./ContactUs.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import facebook from "../../public/facebook.png";
import Vector from "../../public/Vector.png";

const ContactUs = ({text, text2}) => {
  return (
    <section className={style.main}>
      <div className={style.background_opacity}></div>
      <div className="container">
        <motion.div
          className={style.title}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <h2>{text} <br /> {text2}</h2>
        </motion.div>
        <div className={style.icons}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={style.ellipse}
          >
            <a href="https://www.instagram.com/direct/t/340282366841710300949128328353147599504" target="_blank">
              <Image src="/insta.png" alt="insta logo" width={46} height={46} />
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={style.ellipse}
          >
            <a href="https://www.facebook.com/royalconstructionkg/" target="_blank">
              <Image
                src={facebook}
                alt="facebook logo"
                width={30}
                height={46}
                placeholder="blur"
              />
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={style.ellipse}
          >
            <a href="https://api.whatsapp.com/send/?phone=996556111444&text=Здравствуйте,&type=phone_number&app_absent=0" target="_blank">
              <Image
                src={Vector}
                alt="whatsapp logo"
                width={46}
                height={46}
                placeholder="blur"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
