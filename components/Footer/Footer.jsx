import Image from "next/image";
import React from "react";
import s from "./Footer.module.scss";
import { motion } from "framer-motion";
import logoFooter from '../../public/logoFooter.png'
import Vector from '../../public/Vector.png'
import insta from "../../public/insta.png";
import facebook from "../../public/facebook.png";
import youtube from '../../public/youtube.png'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className={s.footer_info}
        >
          <div className={s.footer_item}>
            <a href="https://royal.kg/" target="_blank">
                <Image
              placeholder="blur"
              className={s.footer_img}
              src={logoFooter}
              width={188}
              height={171}
              alt="footer_logo"
            />
            </a>
          
            <p>Главный офис: г. Бишкек, ул. Коенкозова, 75</p>
          </div>
          <div className={s.footer_item}>
            <h4 className={s.title_footer}>Информация :</h4>
            <hr />
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#service">О нас</a>
              </li>
              <li>
                <a href="#architecture">Преимущества</a>
              </li>
              <li>
                <a href="#planning">Планировки</a>
              </li>
            </ul>
          </div>
          <div className={s.footer_item}>
            <h4 className={s.title_footer}>Контакты :</h4>
            <hr />
            <ul>
              <li>
                <a href="tel: +996-776-111-444">+996 776 111 444</a>
              </li>
              <li>
                <a href="tel: +996-556-111-444">+996 556 111 444</a>
              </li>
              <li>
                <a href="tel: +996-706-111-444">+996 706 111 444</a>
              </li>
            </ul>
            <div className={s.ellipse_blocks}>
              <div className={s.ellipse}>
                <a href="https://api.whatsapp.com/send/?phone=996556111444&text=Здравствуйте,&type=phone_number&app_absent=0" target="_blank" >
                  <Image
                    placeholder="blur"
                    src={Vector}
                    width={18}
                    height={18}
                    alt="footer_logo"
                  />
                </a>
              </div>
              <div className={s.ellipse}>
                <a href="https://ig.me/m/royal.kg_" target="_blank">
                  <Image
                    placeholder="blur"
                    src={insta}
                    width={18}
                    height={18}
                    alt="footer_logo"
                  />
                </a>
              </div>
              <div className={s.ellipse}>
                <a href="https://www.facebook.com/royalconstructionkg" target="_blank">
                  <Image
                    placeholder="blur"
                    src={facebook}
                    width={18}
                    height={24}
                    alt="footer_logo"
                  />
                </a>
              </div>
              <div className={s.ellipse}>
                <a href="https://www.youtube.com/channel/UCpTqbwsumilE7UX1LM1Lpgw?view_as=subscriber" target="_blank">
                  <Image
                    placeholder="blur"
                    src={youtube}
                    width={22}
                    height={16}
                    alt="footer_logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.hr
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -400 },
          }}
          className={s.unis}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className={s.contact_footer}
        >
          2022 © ОсОО "Роял Констракшн". <br /> Юридический адрес: Кыргызская
          Республика, г. Бишкек, ул. Рыскулова, 79Б
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
