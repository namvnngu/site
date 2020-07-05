import React from 'react';
import ChatApp from '../../static/Projects/chat.png';
import VocabularyApp from '../../static/Projects/vocabulary.png';
import Stationery from '../../static/Projects/stationery.png';

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<p className="hi">Side Projects</p>
			<div className="project-list">
				<Project
					link={"https://github.com/nnfunny/stationery-online-shop"}
					image={Stationery}
					name={"Stationery Online Shop"}
					technology={"React.js/.NET Core"}
				/>
				<Project
					link={"https://github.com/nnfunny/chat-app-firebase"}
					image={ChatApp}
					name={"Chattie Talkie"}
					technology={"React.js/Node.js"}
				/>

				<Project
					link={"https://github.com/nnfunny/vocabulary-cellar"}
					image={VocabularyApp}
					name={"Vocabulary Cellar"}
					technology={"React.js/Electron.js"}
				/>
				
			</div>
		</div>
	)
}

const Project = ({ link, image, name, technology }) => {
	return (
		<>
			<a href={link} className="project" target="_blank" rel="noopener noreferrer">
				<div className="project-image">
					<img src={image} alt="Error"/>
				</div>
				<div className="project-name">
					{name}
				</div>
				<div className="project-technologies">
					{technology}
				</div>
			</a>
		</>
	)
}

export default Projects;