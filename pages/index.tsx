import styles from "../styles/Home.module.scss";
import Head from "next/head";
import MainImage from "../components/MainImage";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/personal/bee.svg" />
        <title>Home | Name Nguyen</title>
      </Head>
      <div className={styles["home"]}>
        <div className={styles["main-image-container"]}>
          <MainImage />
          <div className={styles["titles"]}>
            <h1>Nam Nguyen</h1>
            <section>
              <p>
                <span>web developer,</span>{" "}
                <img src="/images/icons/face_24px.svg" alt="face icon" />
              </p>
              <p>computer science enthusiast, </p>
              <p>art enthusiast (pixel, 3D Model)</p>
            </section>
            <Button text={"Projects →"} url={"/projects"} />
          </div>
        </div>
      </div>
    </>
  );
}
