import React, { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import styles from "./style.module.scss";
import Brooklyn from "../../public/brooklyn.webp";
import StagePlan from "../../public/plan-stage.jpg";
import { FlatPlanning } from "@/components/Planning/components/FlatPlanning/FlatPlanning";
import { FLATS } from "@/constants/flat-constants";
import { motion } from "framer-motion";
import { FloatButton } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const Planning = () => {
  const [isVisibleStageModal, setIsVisibleStageModal] = useState(false);
  const [choosenFlat, setChoosenFlat] = useState({});
  const [currentHintText, setCurrentHintText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hint, setHint] = useState({
    isVisible: false,
    x: null,
    y: null,
  });
  const handleClickStage = (flag) => {
    setIsVisibleStageModal(flag);
  };

  const handleChangeCurrentStage = (e) => {
    let hintText = FLATS[e.target.dataset.flatId]?.title;

    if (e.target.dataset.stage) {
      hintText = e.target.dataset.stage;
    }
    setCurrentHintText(hintText);
    setHint({
      isVisible: true,
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleHideHint = () => {
    setCurrentHintText("");
    setHint({
      ...hint,
      isVisible: false,
    });
  };

  const handleChooseFlat = (flag, e) => {
    setIsVisible(flag);
    setChoosenFlat(FLATS[e.target.dataset.flatId]);
  };

  return (
    <>
      <section className={styles.wrapper} id="planning">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          className={styles.title}
        >
          ПЛАНИРОВКИ
        </motion.h1>
        <div className={styles.selector}>
          <svg
            width="4098"
            height="2332"
            viewBox="0 0 4098 2332"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={16 + " этаж"}
              d="M1521 387H1540L1569 393.5V389H1623.5V393.5H1652.5V389L1705.5 388L1733.5 389L1763.5 395V388L1824 389V393.5L1874.5 395V390H1935V395L1970.5 388H1991.5L2045.5 389V394L2075 395V390H2129V395L2155.5 389H2176.5V395H2216V403.5L2227.5 404.5V497H2206L2205 491L2176.5 492.5V489H2155.5L2143 491L2129 494V489.5H2075V493.5H2045V489.5H1991V487.5L1968.5 488L1934 493V488L1874.5 488.5V493L1823.5 492.5V488.5H1764V492.5L1728 486.5H1706.5L1706 489.5L1653 488.5V492H1623V488.5L1569 489V492.5L1541 486.5H1520.5V492.5H1494V402H1504.5V393.5H1520.5V387H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={15 + " этаж"}
              d="M1521 484H1540L1569 490.5V486H1623.5V490.5H1652.5V486L1705.5 485L1733.5 486L1763.5 492V485L1824 486V490.5L1874.5 492V487H1935V492L1970.5 485H1991.5L2045.5 486V491L2075 492V487H2129V492L2155.5 486H2176.5V492H2216V500.5L2227.5 501.5V594H2206L2205 588L2176.5 589.5V586H2155.5L2143 588L2129 591V586.5H2075V590.5H2045V586.5H1991V584.5L1968.5 585L1934 590V585L1874.5 585.5V590L1823.5 589.5V585.5H1764V589.5L1728 583.5H1706.5L1706 586.5L1653 585.5V589H1623V585.5L1569 586V589.5L1541 583.5H1520.5V589.5H1494V499H1504.5V490.5H1520.5V484H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={14 + " этаж"}
              d="M1521 581H1540L1569 587.5V583H1623.5V587.5H1652.5V583L1705.5 582L1733.5 583L1763.5 589V582L1824 583V587.5L1874.5 589V584H1935V589L1970.5 582H1991.5L2045.5 583V588L2075 589V584H2129V589L2155.5 583H2176.5V589H2216V597.5L2227.5 598.5V691H2206L2205 685L2176.5 686.5V683H2155.5L2143 685L2129 688V683.5H2075V687.5H2045V683.5H1991V681.5L1968.5 682L1934 687V682L1874.5 682.5V687L1823.5 686.5V682.5H1764V686.5L1728 680.5H1706.5L1706 683.5L1653 682.5V686H1623V682.5L1569 683V686.5L1541 680.5H1520.5V686.5H1494V596H1504.5V587.5H1520.5V581H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={13 + " этаж"}
              d="M1521 681H1540L1569 687.5V683H1623.5V687.5H1652.5V683L1705.5 682L1733.5 683L1763.5 689V682L1824 683V687.5L1874.5 689V684H1935V689L1970.5 682H1991.5L2045.5 683V688L2075 689V684H2129V689L2155.5 683H2176.5V689H2216V697.5L2227.5 698.5V791H2206L2205 785L2176.5 786.5V783H2155.5L2143 785L2129 788V783.5H2075V787.5H2045V783.5H1991V781.5L1968.5 782L1934 787V782L1874.5 782.5V787L1823.5 786.5V782.5H1764V786.5L1728 780.5H1706.5L1706 783.5L1653 782.5V786H1623V782.5L1569 783V786.5L1541 780.5H1520.5V786.5H1494V696H1504.5V687.5H1520.5V681H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={12 + " этаж"}
              d="M1521 778H1540L1569 784.5V780H1623.5V784.5H1652.5V780L1705.5 779L1733.5 780L1763.5 786V779L1824 780V784.5L1874.5 786V781H1935V786L1970.5 779H1991.5L2045.5 780V785L2075 786V781H2129V786L2155.5 780H2176.5V786H2216V794.5L2227.5 795.5V888H2206L2205 882L2176.5 883.5V880H2155.5L2143 882L2129 885V880.5H2075V884.5H2045V880.5H1991V878.5L1968.5 879L1934 884V879L1874.5 879.5V884L1823.5 883.5V879.5H1764V883.5L1728 877.5H1706.5L1706 880.5L1653 879.5V883H1623V879.5L1569 880V883.5L1541 877.5H1520.5V883.5H1494V793H1504.5V784.5H1520.5V778H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={11 + " этаж"}
              d="M1521 878H1540L1569 884.5V880H1623.5V884.5H1652.5V880L1705.5 879L1733.5 880L1763.5 886V879L1824 880V884.5L1874.5 886V881H1935V886L1970.5 879H1991.5L2045.5 880V885L2075 886V881H2129V886L2155.5 880H2176.5V886H2216V894.5L2227.5 895.5V988H2206L2205 982L2176.5 983.5V980H2155.5L2143 982L2129 985V980.5H2075V984.5H2045V980.5H1991V978.5L1968.5 979L1934 984V979L1874.5 979.5V984L1823.5 983.5V979.5H1764V983.5L1728 977.5H1706.5L1706 980.5L1653 979.5V983H1623V979.5L1569 980V983.5L1541 977.5H1520.5V983.5H1494V893H1504.5V884.5H1520.5V878H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={10 + " этаж"}
              d="M1521 975H1540L1569 981.5V977H1623.5V981.5H1652.5V977L1705.5 976L1733.5 977L1763.5 983V976L1824 977V981.5L1874.5 983V978H1935V983L1970.5 976H1991.5L2045.5 977V982L2075 983V978H2129V983L2155.5 977H2176.5V983H2216V991.5L2227.5 992.5V1085H2206L2205 1079L2176.5 1080.5V1077H2155.5L2143 1079L2129 1082V1077.5H2075V1081.5H2045V1077.5H1991V1075.5L1968.5 1076L1934 1081V1076L1874.5 1076.5V1081L1823.5 1080.5V1076.5H1764V1080.5L1728 1074.5H1706.5L1706 1077.5L1653 1076.5V1080H1623V1076.5L1569 1077V1080.5L1541 1074.5H1520.5V1080.5H1494V990H1504.5V981.5H1520.5V975H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={9 + " этаж"}
              d="M1521 1074H1540L1569 1080.5V1076H1623.5V1080.5H1652.5V1076L1705.5 1075L1733.5 1076L1763.5 1082V1075L1824 1076V1080.5L1874.5 1082V1077H1935V1082L1970.5 1075H1991.5L2045.5 1076V1081L2075 1082V1077H2129V1082L2155.5 1076H2176.5V1082H2216V1090.5L2227.5 1091.5V1184H2206L2205 1178L2176.5 1179.5V1176H2155.5L2143 1178L2129 1181V1176.5H2075V1180.5H2045V1176.5H1991V1174.5L1968.5 1175L1934 1180V1175L1874.5 1175.5V1180L1823.5 1179.5V1175.5H1764V1179.5L1728 1173.5H1706.5L1706 1176.5L1653 1175.5V1179H1623V1175.5L1569 1176V1179.5L1541 1173.5H1520.5V1179.5H1494V1089H1504.5V1080.5H1520.5V1074H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={8 + " этаж"}
              d="M1521 1172H1540L1569 1178.5V1174H1623.5V1178.5H1652.5V1174L1705.5 1173L1733.5 1174L1763.5 1180V1173L1824 1174V1178.5L1874.5 1180V1175H1935V1180L1970.5 1173H1991.5L2045.5 1174V1179L2075 1180V1175H2129V1180L2155.5 1174H2176.5V1180H2216V1188.5L2227.5 1189.5V1282H2206L2205 1276L2176.5 1277.5V1274H2155.5L2143 1276L2129 1279V1274.5H2075V1278.5H2045V1274.5H1991V1272.5L1968.5 1273L1934 1278V1273L1874.5 1273.5V1278L1823.5 1277.5V1273.5H1764V1277.5L1728 1271.5H1706.5L1706 1274.5L1653 1273.5V1277H1623V1273.5L1569 1274V1277.5L1541 1271.5H1520.5V1277.5H1494V1187H1504.5V1178.5H1520.5V1172H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={7 + " этаж"}
              d="M1521 1270H1540L1569 1276.5V1272H1623.5V1276.5H1652.5V1272L1705.5 1271L1733.5 1272L1763.5 1278V1271L1824 1272V1276.5L1874.5 1278V1273H1935V1278L1970.5 1271H1991.5L2045.5 1272V1277L2075 1278V1273H2129V1278L2155.5 1272H2176.5V1278H2216V1286.5L2227.5 1287.5V1380H2206L2205 1374L2176.5 1375.5V1372H2155.5L2143 1374L2129 1377V1372.5H2075V1376.5H2045V1372.5H1991V1370.5L1968.5 1371L1934 1376V1371L1874.5 1371.5V1376L1823.5 1375.5V1371.5H1764V1375.5L1728 1369.5H1706.5L1706 1372.5L1653 1371.5V1375H1623V1371.5L1569 1372V1375.5L1541 1369.5H1520.5V1375.5H1494V1285H1504.5V1276.5H1520.5V1270H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={`${styles.path} ${styles.activePath}`}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={6 + " этаж"}
              d="M1521 1368H1540L1569 1374.5V1370H1623.5V1374.5H1652.5V1370L1705.5 1369L1733.5 1370L1763.5 1376V1369L1824 1370V1374.5L1874.5 1376V1371H1935V1376L1970.5 1369H1991.5L2045.5 1370V1375L2075 1376V1371H2129V1376L2155.5 1370H2176.5V1376H2216V1384.5L2227.5 1385.5V1478H2206L2205 1472L2176.5 1473.5V1470H2155.5L2143 1472L2129 1475V1470.5H2075V1474.5H2045V1470.5H1991V1468.5L1968.5 1469L1934 1474V1469L1874.5 1469.5V1474L1823.5 1473.5V1469.5H1764V1473.5L1728 1467.5H1706.5L1706 1470.5L1653 1469.5V1473H1623V1469.5L1569 1470V1473.5L1541 1467.5H1520.5V1473.5H1494V1383H1504.5V1374.5H1520.5V1368H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={5 + " этаж"}
              d="M1521 1466H1540L1569 1472.5V1468H1623.5V1472.5H1652.5V1468L1705.5 1467L1733.5 1468L1763.5 1474V1467L1824 1468V1472.5L1874.5 1474V1469H1935V1474L1970.5 1467H1991.5L2045.5 1468V1473L2075 1474V1469H2129V1474L2155.5 1468H2176.5V1474H2216V1482.5L2227.5 1483.5V1576H2206L2205 1570L2176.5 1571.5V1568H2155.5L2143 1570L2129 1573V1568.5H2075V1572.5H2045V1568.5H1991V1566.5L1968.5 1567L1934 1572V1567L1874.5 1567.5V1572L1823.5 1571.5V1567.5H1764V1571.5L1728 1565.5H1706.5L1706 1568.5L1653 1567.5V1571H1623V1567.5L1569 1568V1571.5L1541 1565.5H1520.5V1571.5H1494V1481H1504.5V1472.5H1520.5V1466H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={4 + " этаж"}
              d="M1521 1564H1540L1569 1570.5V1566H1623.5V1570.5H1652.5V1566L1705.5 1565L1733.5 1566L1763.5 1572V1565L1824 1566V1570.5L1874.5 1572V1567H1935V1572L1970.5 1565H1991.5L2045.5 1566V1571L2075 1572V1567H2129V1572L2155.5 1566H2176.5V1572H2216V1580.5L2227.5 1581.5V1674H2206L2205 1668L2176.5 1669.5V1666H2155.5L2143 1668L2129 1671V1666.5H2075V1670.5H2045V1666.5H1991V1664.5L1968.5 1665L1934 1670V1665L1874.5 1665.5V1670L1823.5 1669.5V1665.5H1764V1669.5L1728 1663.5H1706.5L1706 1666.5L1653 1665.5V1669H1623V1665.5L1569 1666V1669.5L1541 1663.5H1520.5V1669.5H1494V1579H1504.5V1570.5H1520.5V1564H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              onClick={() => handleClickStage(!isVisibleStageModal)}
              className={styles.path}
              onMouseEnter={handleChangeCurrentStage}
              onMouseLeave={handleHideHint}
              data-stage={3 + " этаж"}
              d="M1521 1663H1540L1569 1669.5V1665H1623.5V1669.5H1652.5V1665L1705.5 1664L1733.5 1665L1763.5 1669.5V1664L1824 1665V1669.5H1874.5V1665H1934L1935 1669.5L1970.5 1664H1991.5L2045.5 1665V1670L2075 1670.5V1666H2129V1671L2155.5 1665H2176.5V1670H2216L2218.5 1675L2217.5 1682.5L2216 1694.5V1712H2177.5L2177 1782H2175H2155L2142.5 1781.5L2129 1782H2126.5H2084H2075H2045.5H2040.5L1980.5 1781V1760.5L1971 1760L1940 1760.5H1934H1874.5H1871.5H1834H1824H1765.5H1763.5H1728H1720.5H1716V1782H1655H1623H1619.5H1569H1556L1541 1781L1519.5 1782L1518.5 1712H1494V1678V1669.5H1504.5H1520.5V1663H1521Z"
              fill="#19A281"
              fillOpacity="0.5"
            />
            <path
              d="M2291.5 1711L2293 471L2312 363H2373.5L2396.5 248.5L3052.5 250.5L3060.5 834.5L3052 1782.5H2857V1763L2592 1761V1783L2395 1781.5L2393.5 1711H2291.5Z"
              fillOpacity="0.5"
            />
            <path
              d="M639.5 1781V241L1296.5 242.5L1345.5 359.5H1407L1448.5 468L1446 1711H1301V1781.5L1105.5 1782.5V1761L835.5 1760V1782.5L639.5 1781Z"
              fillOpacity="0.5"
            />
          </svg>
          <Image src={Brooklyn} alt="Brooklyn" />
        </div>
        <div
          className={styles.hint}
          style={{
            opacity: hint.isVisible ? 1 : 0,
            top: hint.y - 70,
            left: hint.x + 30,
            transition: "0.3s",
          }}
        >
          {currentHintText}
        </div>
        <Modal
          open={isVisibleStageModal}
          footer={null}
          width={"100%"}
          className={styles.stageModal}
        >
          <div className={styles.stageModal}>
            <div className={styles.selector}>
              <svg
                width="7947"
                height="5762"
                viewBox="0 0 7947 5762"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  onClick={(e) => handleChooseFlat(!isVisible, e)}
                  className={styles.path}
                  onMouseEnter={handleChangeCurrentStage}
                  onMouseLeave={handleHideHint}
                  data-flat-id={97}
                  d="M1180 2773H2985H3228.5V3393.5H3513L3531.5 3984L3882 4010V4279H2025V3984H1180V2773Z"
                  fillOpacity="0.5"
                />
                <path
                  onClick={(e) => handleChooseFlat(!isVisible, e)}
                  className={styles.path}
                  onMouseEnter={handleChangeCurrentStage}
                  onMouseLeave={handleHideHint}
                  data-flat-id={48}
                  d="M3228.5 3393.5V2788H4746V3987.5H3531.5V3393.5H3228.5Z"
                  fillOpacity="0.5"
                />
                <path
                  onClick={(e) => handleChooseFlat(!isVisible, e)}
                  className={styles.path}
                  onMouseEnter={handleChangeCurrentStage}
                  onMouseLeave={handleHideHint}
                  data-flat-id={49}
                  d="M1180 2778H2595V1926H2387.5V1629.5H1156L1180 2778Z"
                  fillOpacity="0.5"
                />
                <path
                  onClick={(e) => handleChooseFlat(!isVisible, e)}
                  className={styles.path}
                  onMouseEnter={handleChangeCurrentStage}
                  onMouseLeave={handleHideHint}
                  data-flat-id={79}
                  d="M3880 446.5H4783L4767 1664H3583.5V1782.5V1943H2957V216.5H3880V446.5Z"
                  fillOpacity="0.5"
                />
                <path
                  onClick={(e) => handleChooseFlat(!isVisible, e)}
                  className={styles.path}
                  onMouseEnter={handleChangeCurrentStage}
                  onMouseLeave={handleHideHint}
                  data-flat-id={78}
                  d="M2100 467.5H1131L1149.5 1625.5L2395.5 1632V1950H2957.5V216.5H2100V467.5Z"
                  fillOpacity="0.5"
                />
              </svg>
              <Image
                className={styles.selectorFlat}
                src={StagePlan}
                alt="stage plan"
              />
            </div>
          </div>
          <Modal
            className="PlanningModal"
            open={isVisible}
            closable={false}
            width={"100%"}
            footer={null}
          >
            <FlatPlanning {...choosenFlat} />
            <FloatButton
              style={{
                width: "50px",
                height: "50px",
                top: "100px",
                right: "35px",
              }}
              size="large"
              icon={<CloseOutlined />}
              onClick={() => setIsVisible(false)}
            />
          </Modal>
          <FloatButton
            style={{
              width: "70px",
              height: "70px",
              top: "100px",
              right: "70px",
              zIndex: "1000",
            }}
            size="large"
            icon={<CloseOutlined />}
            onClick={() => setIsVisibleStageModal(false)}
          />
        </Modal>
      </section>
      <section className={styles.plannigWrapper}>
        {Object.values(FLATS).map((flat) => (
          <FlatPlanning {...flat} />
        ))}
        <hr />
      </section>
    </>
  );
};
