import styles from "../styles/Home.module.scss";
import Head from "next/head";
import MainImageHome from "../components/Home/MainImageHome";
import Introduction from "../components/Home/Introduction";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import { useEffect, useState } from "react";
import CatRainbow from "../components/CatRainbow";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/personal/bee.svg" />
        <title>Home | Nam Nguyen</title>
      </Head>

      <div className={styles["home"]}>
        {loading ? (
          <div className="loader">
            <CatRainbow />
          </div>
        ) : (
          <>
            <MainImageHome />
            <Introduction />
            <FeaturedProjects />
          </>
        )}
      </div>
    </>
  );
}
