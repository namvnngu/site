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

let ids = ["about-me", "exp", "projects", "education", "skills"];
let idsA = ["about-me-a", "exp-a", "projects-a", "education-a", "skills-a"];
let h2Names = ["About Me", "Experience", "Projects", "Education", "Skills"];

for (let index = 0; index < ids.length; index++) {
  addCard(ids[index], idsA[index], h2Names[index]);
}

// About me
let aboutMeCard = document.querySelector("#about-me .card-content");
let aboutMeP = `
    <p>Hi, I am Nam. I am a funny geek who loves building programs that makes people’s lives easier. I am passionate about web development. I am pursuing to be a professional programming competitor.</p>
    <p>My favorite programming languages are Javascript, C++ and Java. I cherish spending my spare time coding and keeping myself learning new programming languages.</p>
    <p>I am seeking opportunities to work as a software developer or web developer at the moment. Please feel free to contact me for a position in your company.</p>
    `;
aboutMeCard.innerHTML = aboutMeP;

// Experience Card

// Projects
function addProject(name, paragraphs, link) {
  let projectCard = document.querySelector("#projects .card-content");
  let div = document.createElement("div");
  let anchorLine, p, h4;

  h4 = document.createElement("h4");
  h4.innerHTML = name;
  div.appendChild(h4);

  paragraphs.forEach((paragraph) => {
    p = document.createElement("p");
    p.innerHTML = paragraph;
    div.appendChild(p);
  });

  anchorLine = document.createElement("p");
  anchorLine.innerHTML = `Source code: <a href=${link["url"]} target="_blank">${link["name"]}</a>`;
  div.append(anchorLine);

  div.appendChild(document.createElement("hr"));

  div.classList.add("project");
  projectCard.appendChild(div);
}

names = ["Talkie Chattie", "Vocabulary Cellar"];
projects = [
  [
    "Project Description: A web application allows users to swap their stories one another in real time, which is controlled and encrypted by Firebase.",
    "Technologies: React.js , Firebase, Node.js",
  ],
  [
    "Project Description: A cross-platform desktop application assists Enlgish learners to store all related information of vocabularies to reduce 'forgetting curve' and expand vocabulary",
    "Technologies: React.js , Electron.js",
  ],
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
  console.log(names[i]);
  addProject(names[i], projects[i], links[i]);
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
let skillCard = document.querySelector("#skills .card-content");
let skillItem;

skills.forEach((skill) => {
  skillItem = document.createElement("p");
  skillItem.innerHTML = skill;
  skillCard.appendChild(skillItem);
});
