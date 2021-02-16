import styles from "../styles/Home.module.scss";
import Head from "next/head";
import MainImage from "../components/MainImage";
import Button from "../components/Button";
import Link from "next/link";
import CardProject from "../components/CardProject";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/personal/bee.svg" />
        <title>Home | Name Nguyen</title>
      </Head>
      <div className={styles["home"]}>
        {/* Main Image */}
        <div className={styles["main-image-container"]}>
          <MainImage />
          <div className={styles["titles"]}>
            <h1>Hi there!</h1>
            <section>
              <p>web developer,</p>
              <p>computer science enthusiast, </p>
              <p>art enthusiast (pixel, 3D Model)</p>
            </section>
            <Button text={"Projects →"} url={"/projects"} />
          </div>
        </div>

        {/* Introduction */}
        <section className="container">
          <div className={styles["introduction"]}>
            <p>
              I am a third-year undergraduate student at Deakin University,
              Melbourne. I think that I am a <span>funny guy</span> who loves
              building <span>programs</span> that makes{" "}
              <span>people's lives easier</span>. At the moment, I specialize in
              web development, and I am trying different areas such as{" "}
              <span>computer graphics</span> and <span>game development</span>{" "}
              by myself.
            </p>
            <div>
              <p>
                In my spare time, you can catch me filming, drawing pixel art,
                reading books and learning English
              </p>
              <p>
                Take a look on my{" "}
                <span>
                  <Link href="/projects">
                    <a>projects</a>
                  </Link>
                </span>{" "}
                page or{" "}
                <span>
                  <Link href="/resume">
                    <a>resume</a>
                  </Link>
                </span>{" "}
                to understand about me a bit better, or visit contact page to
                reach me out and say "G'day". I am seeking for a developer job
                and open to hearing about new opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className={styles["featured-projects"]}>
          <h1>Featured Projects</h1>
          <section>
            <CardProject
              image="/images/projects/ecosystem/ecosystem-thumb.png"
              title="Ecosystem Simulation"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."
              alt="ecosystem thumbnail"
              link="/projects/ecosystem-simulation"
            />
            <CardProject
              image="/images/projects/ecosystem/ecosystem-thumb.png"
              title="Ecosystem Simulation"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."
              alt="ecosystem thumbnail"
              link="/projects/ecosystem-simulation"
            />
          </section>
        </section>
      </div>
    </>
  );
}
