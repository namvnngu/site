import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
// import MyFace from '../static/my-face.jpg';
import * as Work from "../static/work.json";
import Lottie from 'react-lottie';

const config = {
    loop: true,
    autoplay: true,
    animationData: Work.default,
    rendererSettings: {
        preserveAspectiveRatio: 'xMidYMid slice'
    } 
}

const LandingPage = () => {

    return (
        <div className="landing-page container" id="home">
            <header>
                <a href="#home">Home</a>
                <a href="#me">Me</a>
                <a href="#skill">Skill</a>
                <a href="#project">Projects</a>
                <a href="#education">Education</a>
            </header>
            <div className="brief-introduction">
                <div className="title-name">
                    <a href="https://lottiefiles.com/18123-developer" target="_blank" rel="noopener noreferrer">
                        <Lottie options={config} height={300} width={300}/>
                    </a>
                    <div className="title">Junior Web Developer</div>
                    <small>Elementary Competitive Programmer</small>
                    <div className="name"><span>Nam Nguyen</span> is passionate about web development and programming contest</div>
                    {/*<img src={MyFace} alt="Error" />*/}
                    <div className="email-container">
                        <a className="email" href="mailto:vnngu@deakin.edu.au">vnngu@deakin.edu.au</a>
                        <div className="email-line"></div>
                    </div>
                </div>
                <ul className="social">
                    <li>
                        <a href="https://www.linkedin.com/in/nam-nguyen-cs/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/nnfunny" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/nam.viet.nguyen/" target="_blank" rel="noopener noreferrer">
                            <GrInstagram className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/vietnam.nguyen.186" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.cWom/namnguyenDev" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                    </li>
                </ul>
            </div>
            <small className="welcome">Welcome To My World</small>
        </div >
    );
};

export default LandingPage;