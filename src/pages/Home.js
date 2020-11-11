import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
// import Lottie from "react-lottie";
// import * as Work from "../assets/lottie/work.json";
import Face from "../assets/face/face.png";
import Footer from "../components/Footer";
import UnderLayImage from "../assets/face/home.svg";

// const config = {
//   loop: true,
//   autoplay: true,
//   animationData: Work.default,
//   rendererSettings: {
//     preserveAspectiveRatio: "xMidYMid slice",
//   },
// };
const greetings = [
  "Hello 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "Hola 🇪🇸",
  "Xin Chào 🇻🇳",
  "Bonjour 🇫🇷",
  "안녕하세요 🇰🇷",
  "こんにちは 🇯🇵",
  "你好 🇨🇳",
];

const Home = () => {
  useEffect(() => {
    const greeting = document.querySelector(".home .greetings .greeting");
    let greetingNumber = 0;
    setInterval(() => {
      if (greeting) {
        greeting.innerHTML = greetings[greetingNumber];
        if (++greetingNumber >= greetings.length) greetingNumber = 0;
      }
    }, 3000);
  }, []);
  return (
    <div className="home">
      <NavBar />
      <div className="columns is-centered is-vcentered mt-6 pt-6 extend">
        {/* Left Column: Image */}
        <div className="column face-image is-5 has-text-centered py-6">
          <img src={Face} alt="Landing Page" />
          {/* <a
          href="https://lottiefiles.com/18123-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie options={config} height={300} width={300} />
        </a> */}
        </div>

        {/* Right Column: Content */}
        <div className="column is-5 introduction">
          {/* Introduction */}
          <div className="px-5 py-5">
            <p className="greetings">
              <span className="greeting is-size-5" id="greeting">
                Look at here
              </span>
            </p>
            <p
              className="is-size-4 has-text-weight-semibold"
              style={{ wordSpacing: "5px" }}
            >
              I am Nam Nguyen. I am an avid programmer. I am passionate about
              web development, computer graphics, and competitve programming.
            </p>
          </div>
          {/* Introduction in detail */}
          <div className="py-5 px-5">
            <p style={{ fontSize: "15px" }}>
              I am a third-year undergraduate student at Deakin University,
              Melbourne. I think that I am a{" "}
              <span className="has-text-weight-bold">funny guy</span> who loves
              building programs that makes{" "}
              <span className="has-text-weight-bold">
                people's lives easier
              </span>
              . At the moment, I specialize in{" "}
              <span className="has-text-weight-bold">web development</span>, and
              I am learning{" "}
              <span className="has-text-weight-bold">computer simulation</span>{" "}
              and <span className="has-text-weight-bold">physic engine</span> by
              myself. In my spare time, you can catch me filming, drawing pixel
              art, reading books and learning English.
            </p>
            <br />
            <p style={{ fontSize: "15px" }}>
              Take a look on my{" "}
              <Link
                to="/projects"
                className="has-text-weight-bold has-text-black"
              >
                projects
              </Link>{" "}
              page or{" "}
              <Link
                to="/resume"
                className="has-text-weight-bold has-text-black"
              >
                resume
              </Link>{" "}
              to understand about me a bit better, or visit{" "}
              <Link
                to="/resume"
                className="has-text-weight-bold has-text-black"
              >
                contact
              </Link>{" "}
              page to reach me out and say "G'day". I am seeking for a developer
              job and open to hearing about new opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="underlay-image">
        <img src={UnderLayImage} alt="underlay" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
