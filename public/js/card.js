function addCard(id, h2Name) {
    let portfolioContent = document.querySelector(".portfolio-content");
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let content = document.createElement("div");

    div.classList.add("card-item");
    div.id = id;

    h2.innerHTML = h2Name;

    content.classList.add("card-content");
    
    div.appendChild(h2);
    div.appendChild(content);
    portfolioContent.appendChild(div);
}

let ids = ["about-me", "projects", "education", "skills"];
let h2Names = ["About Me", "Projects", "Education", "Skills"];

for(let index = 0; index < ids.length; index++) {
    addCard(ids[index], h2Names[index]);
}