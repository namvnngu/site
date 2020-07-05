import React from 'react';
import { Link } from "react-scroll";

const Header = () => {
	return (
		<>
			<header>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="me"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {1000}
                >Me</Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {1000}
                >Skills</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {1000}
                >Projects</Link>
                <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {1000}
                >Education</Link>
            </header>
		</>
	)
}

export default Header;