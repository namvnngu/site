import React from 'react';
import { Link } from "react-scroll";

const Header = () => {
	return (
		<>
			<header>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                >Home</Link>
                <Link
                    to="me"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {1000}
                >Me</Link>
                <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {1000}
                >Skills</Link>
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {1000}
                >Projects</Link>
                <Link
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