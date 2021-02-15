import { useEffect, useRef, useState } from "react";
import styles from "../../styles/MainImage.module.scss";

const MainImage = () => {
  const [blur, setBlur] = useState(true);
  const loadingImage = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (loadingImage.current?.complete) {
      setBlur(false);
    }
    
    loadingImage.current?.addEventListener('load', () => {
      setBlur(false);
    });
  }, []);

  return (
    <>
      <div style={{ position: "relative", height: "600px" }}>
      <div className={styles["image-container"]}>
        <img
        className={blur ? styles["blur"] : styles["unblur"]}
          src="/images/background/main-desktop.gif"
          alt="Pixel art with a moon and a big yellow in jungle made by Name Nguyen"
          ref={loadingImage}
        />
      </div>
      </div>
    </>
  );
};

export default MainImage;
