import React from 'react';
import Me from './BodyItems/Me';
import Skills from './BodyItems/Skills';
import Education from './BodyItems/Education';
import Projects from './BodyItems/Projects';
import Footer from './Footer';

const Body = () => {
	return (
		<div className="body-container">
			<div className="container">
				<div id="me" className="come come-me"></div>
				<Me/>

				<div id="skills" className="come come-skills"></div>
				<Skills/>

				<div id="projects" className="come come-projects"></div>
				<Projects/>

				<div id="education" className="come come-education"></div>
				<Education/>

				<Footer/>
			</div>
		</div>
	)
}

export default Body;