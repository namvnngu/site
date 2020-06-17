function addCard(id, idA, h2Name) {
  let portfolioContent = document.querySelector(".portfolio-content");
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let content = document.createElement("div");
  let support = document.createElement("div");

  div.classList.add("card-item");
  div.id = id;

  h2.innerHTML = h2Name;

  content.classList.add("card-content");

  support.id = idA;
  support.classList.add("support");

  div.appendChild(h2);
  div.appendChild(content);
  portfolioContent.appendChild(support);
  portfolioContent.appendChild(div);
}

let ids = ["about-me", "skills", "exp", "projects", "education"];
let idsA = ["about-me-a", "skills-a", "exp-a", "projects-a", "education-a"];
let h2Names = ["About Me", "Skills", "Experience", "Projects", "Education"];

for (let index = 0; index < ids.length; index++) {
  addCard(ids[index], idsA[index], h2Names[index]);
}

// About me
let aboutMeCard = document.querySelector("#about-me .card-content");
let aboutMeP = `
    <p>Hi, I am Nam. I am a funny geek who loves building programs that makes people’s lives easier. I am passionate about web development. I am pursuing to be a professional programming competitor.</p>
    <p>My favorite programming languages are Javascript, C++ and C#. I cherish spending my spare time coding and keeping myself learning new programming languages.</p>
    <p>I am seeking opportunities to work as a software developer or web developer at the moment. Please feel free to contact me for a position in your company.</p>
    `;
aboutMeCard.innerHTML = aboutMeP;

// Skills
let skills = [
  "Python",
  "Javascript",
  "Java",
  "C++",
  "HTML5",
  "CSS3",
  "Git",
  "Node.js",
  "React.js",
  "Git",
  "MySQL",
  "Final Cut Pro",
  "Self-learning",
  "Teamwork",
  "Self-mamnagement",
];

let skillTypes = [
  "Programming Languges",
  "Frameworks/Platforms",
  "Database",
  "Version Control",
  "IDE/Code Editor",
  "Others"
]
let skillCard = document.querySelector("#skills .card-content");

// skills.forEach((skill) => {
//   skillItem = document.createElement("p");
//   skillItem.innerHTML = skill;
//   skillCard.appendChild(skillItem);
// });
skillTypes.forEach((type) => {
  typeItem = document.createElement("div");
  typeItem.classList.add("type-item");
  typeItem.innerHTML = `<span style="font-weight: bold; margin-bottom: 10px">${type}<span/>`;
  skillCard.appendChild(typeItem);
})

let subCards = document.querySelectorAll("#skills .card-content .type-item");
// Skill Programming Languages
let programmingLanguages = ["C++", "C#", "Python", "HTML5", "CSS3", "Javascript"]
programmingLanguages.forEach((skill) => {
  skillItem = document.createElement("p");
  skillItem.innerHTML = skill;
  subCards[0].appendChild(skillItem);
});
// Skill Frameworks/Platforms
let framePlat = ["React.js", "Node.js"]
framePlat.forEach((skill) => {
  skillItem = document.createElement("p");
  skillItem.innerHTML = skill;
  subCards[1].appendChild(skillItem);
});
// Skill Database
let database = ["MySQL"]
database.forEach((skill) => {
  skillItem = document.createElement("p");
  skillItem.innerHTML = skill;
  subCards[2].appendChild(skillItem);
});
// Skill Version Control
let versionControl = ["Git", "Github"]
versionControl.forEach((skill) => {
  skillItem = document.createElement("p");
  skillItem.innerHTML = skill;
  subCards[3].appendChild(skillItem);
});
// Skill IDE/Code Editor
let editor = ["Vim", "VSC"]
editor.forEach((skill) => {
  skillItem = document.createElement("p");
  skillItem.innerHTML = skill;
  subCards[4].appendChild(skillItem);
});
// Others
let other = ["Final Cut Pro", "Self-taught", "Teamwork", "Self-management"]
other.forEach((skill) => {
  skillItem = document.createElement("p");
  skillItem.innerHTML = skill;
  subCards[5].appendChild(skillItem);
});


// Experience Card

// Projects
function addProject(name, paragraphs, link) {
  let projectCard = document.querySelector("#projects .card-content");
  let div = document.createElement("div");
  let anchorLine, p, h4;

  h4 = document.createElement("h4");
  h4.innerHTML = name;
  div.appendChild(h4);

  
  p = document.createElement("div");
  p.innerHTML = `
    <p>
      <span style="font-weight: bold">Project Description:  </span>
      ${paragraphs["description"]}
    </p>
    <p>
      <span style="font-weight: bold">Technologies:  </span>
      ${paragraphs["tech"]}
    </p>
  `;
  div.appendChild(p);
 


  anchorLine = document.createElement("p");
  anchorLine.innerHTML = `
    <span style="font-weight: bold">Source Code:  </span>
    <a href=${link["url"]} target="_blank">${link["name"]}</a>
    `;
  div.append(anchorLine);


  div.classList.add("project");
  projectCard.appendChild(div);
  return div;
}

names = ["Talkie Chattie", "Vocabulary Cellar"];
projects = [
  {
    "description": "A web application allows users to swap their stories one another in real time, which is controlled and encrypted by Firebase.",
    "tech": "React.js , Firebase, Node.js",
  },
  {
    "description": "A cross-platform desktop application assists Enlgish learners to store all related information of vocabularies to reduce 'forgetting curve' and expand vocabulary",
    "tech": "React.js , Electron.js",
  },
];
links = [
  {
    name: "Talkie Chattie",
    url: "https://github.com/nnfunny/chat-app-firebase",
  },
  {
    name: "Vocavulary storage",
    url: "https://github.com/nnfunny/vocabulary-cellar",
  },
];

for (let i = 0; i < names.length; i++) {
  let divElement = addProject(names[i], projects[i], links[i]);
  if(i != names.length - 1) {
    divElement.appendChild(document.createElement("hr"));
  }
}

// Education
let educationCard = document.querySelector("#education .card-content");
let bachelor = document.createElement("div");
let diploma = document.createElement("div");

let bachelorText = `
    <h4 style="margin: 0">Bachelor of Computer Science</h4>
    <i>07/2019 - Current</i>
    <p style="margin: 0">Deakin University, Burwood</p>
    <ul style="padding: 0 40px">
        <li> Estimated completion July 2021</li>
        <li>Awarded Deakin STEM Scholarship (20% of total course tuition fees)</li>
    </ul>
    <hr>
`;
bachelor.innerHTML = bachelorText;
educationCard.appendChild(bachelor);

let diplomaText = ` 
    <h4 style="margin: 0">Diploma of Information Technology</h4>
    <i>10/2018 - 01/2020</i>
    <p style="margin: 0">Deakin College, Burwood</p>
    <ul style="padding: 0 40px">
        <li>Major: Information Technology</li>
        <li>Achieved WAM - 86.9</li>
    </ul>
`;
diploma.innerHTML = diplomaText;
educationCard.appendChild(diploma);
