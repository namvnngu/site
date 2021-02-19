import styles from "../../styles/Resume.module.scss";
import Head from "next/head";
import { useEffect, useState } from "react";
import CatRainbow from "../../components/CatRainbow";
import MainImageResume from "../../components/Resume/MainImageResume";
import WorkExperience from "../../components/Resume/WorkExperience";
import Skills from "../../components/Resume/Skills";
import EducationList from "../../components/Resume/Education";
import VolunteerList from "../../components/Resume/Voluteer";

const Resume = () => {
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
        <title>Resume | Nam Nguyen</title>
      </Head>

      <div className={styles["resume"]}>
        {loading ? (
          <div className="loader">
            <CatRainbow />
          </div>
        ) : (
          <>
            <MainImageResume />
            <section className="container">
              <WorkExperience/>
              <Skills/>
              <EducationList/>
              <VolunteerList/>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Resume;
