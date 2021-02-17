import Head from "next/head";
import { useEffect, useState } from "react";
import CatRainbow from "../../components/CatRainbow";
import Flipper from "../../components/Flipper";
import MainImageProjects from "../../components/Projects/MainImageProjects";
import ProjectGrid from "../../components/Projects/ProjectGrid";
import Searchbar from "../../components/Projects/Searchbar";
import styles from "../../styles/Projects.module.scss";

const Projects = () => {
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
        <title>Projects | Nam Nguyen</title>
      </Head>

      {/* Main */}
      <div className={styles["projects"]}>
        {loading ? (
          <div className="loader">
            <CatRainbow />
          </div>
        ) : (
          <>
            <MainImageProjects />
            <section className="container">
              <div className={styles["search-bar"]}>
                <Searchbar />
              </div>
              <ProjectGrid />
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
