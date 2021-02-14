import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import MainImage from "../components/MainImage";

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
        </div>
      </div>
    </>
  );
}
