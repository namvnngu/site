import styles from "../../styles/Resume.module.scss";
import Head from "next/head";
import MainImageResume from "../../components/Resume/MainImageResume";
import WorkExperience from "../../components/Resume/WorkExperience";
import Skills from "../../components/Resume/Skills";
import EducationList from "../../components/Resume/Education";
import VolunteerList from "../../components/Resume/Voluteer";

const Resume = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/personal/bee.svg" />
        <title>Resume | Nam Nguyen</title>
      </Head>

      <div className={styles["resume"]}>
        <MainImageResume />
        <section className="container">
          <WorkExperience />
          <Skills />
          <EducationList />
          <VolunteerList />
        </section>
      </div>
    </>
  );
};

export default Resume;
