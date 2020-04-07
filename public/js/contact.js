function addContact(link, icon) {
    let contactLists = document.querySelector(".contact-list");
    let li = document.createElement("li");
    let a = document.createElement("a");
    let i = document.createElement("i");

    a.href = link;
    a.target = "_blank";

    i.classList.add("fab");
    i.classList.add(icon);

    a.appendChild(i);
    li.appendChild(a);
    contactLists.appendChild(li);
}

let links = [
    "https://www.linkedin.com/in/nam-nguyen-cs",
    "https://github.com/nnfunny",
    "https://www.instagram.com/nam.viet.nguyen/",
    "https://www.facebook.com/vietnam.nguyen.186",
    "https://twitter.com/namnguyenDev"
]

let icons = [
    "fa-linkedin",
    "fa-github",
    "fa-instagram",
    "fa-facebook",
    "fa-twitter"
]
for(let index = 0; index < links.length; index++) {
    addContact(links[index], icons[index])
}