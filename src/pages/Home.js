import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Lottie from "react-lottie";
import * as Work from "../assets/lottie/work.json";
// import Face from "../assets/face/face.JPG";

const config = {
  loop: true,
  autoplay: true,
  animationData: Work.default,
  rendererSettings: {
    preserveAspectiveRatio: "xMidYMid slice",
  },
};
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      {/* Image */}
      <div className="face-image mt-6 pt-6">
        {/* <img src={Face} alt="Landing Page" /> */}
        <a
          href="https://lottiefiles.com/18123-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie options={config} height={300} width={300} />
        </a>
      </div>

      {/* Content */}
      <div className="container pt-5 px-6">
        <div className="columns is-centered is-8 is-variable">
          {/* Left column */}
          <div className="column is-5">
            <p
              className="is-size-4 has-text-weight-semibold"
              style={{ wordSpacing: "5px" }}
            >
              Hi. I am Nam Nguyen. I am an avid programmer. I am passionate
              about web development, graphic simulation, and competitve
              programming contest.
            </p>
          </div>
          {/* Right column */}
          <div className="column is-7 special-box-shadow py-5">
            <p style={{ fontSize: "15px" }}>
              I am a third-year undergraduate student at Deakin University,
              Melbourne. I think that I am a{" "}
              <span className="has-text-grey-light">funny guy</span> who loves
              building programs that makes{" "}
              <span className="has-text-grey-light">people's lives easier</span>
              . At the moment, I specialize in{" "}
              <span className="has-text-grey-light">web development</span>, and
              I am learning{" "}
              <span className="has-text-grey-light">computer simulation</span>{" "}
              and <span className="has-text-grey-light">physic engine</span> by
              myself. In my spare time, you can catch me filming, drawing pixel
              art, reading books and learning English.
            </p>
            <br />
            <p style={{ fontSize: "15px" }}>
              Take a look on my{" "}
              <Link to="/projects" className="has-text-grey-light">
                projects
              </Link>{" "}
              page or{" "}
              <Link to="/resume" className="has-text-grey-light">
                resume
              </Link>{" "}
              to understand about me a bit better, or visit{" "}
              <Link to="/resume" className="has-text-grey-light">
                contact
              </Link>{" "}
              page to reach me out and say "G'day". I am seeking for a developer
              job and open to hearing about new opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
