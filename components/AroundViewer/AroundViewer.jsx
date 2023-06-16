import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import axios from "axios";

export const AroundViewer = () => {
  const [image, setImage] = useState("");
  const BASE_URL = "https://durawka69.pythonanywhere.com/api/images/";

  const getImage = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setImage(response.data[0].image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <section className={styles.wrapper}>
      {image !== "" ? (
        <ReactPhotoSphereViewer
          src={image}
          height={"1000px"}
          width={"100%"}
          container={"div"}
        />
      ) : null}
    </section>
  );
};
