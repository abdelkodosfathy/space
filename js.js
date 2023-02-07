let MainNav = document.getElementsByClassName("nav-item");
let content = document.getElementsByClassName("content");
let PlanetNav = document.getElementsByClassName("nav-planet");
let PlanetContent = document.getElementsByClassName("planet-content");
let planetImage = document.getElementsByClassName("image");
let crewImage = document.getElementsByClassName("img-crew");
let crewSelector = document.getElementsByClassName("crew-selector");
let crewContent = document.getElementsByClassName("crew-content");
let techImage = document.getElementsByClassName("img-tech");
let techSelector = document.getElementsByClassName("tech-selector");
let techContent = document.getElementsByClassName("tech-content");
//to move from page to other
function itemChicked(el) {
    var x = ["home/background-home","destination/background-destination","crew/background-crew","technology/background-technology"];
    for(let i = 0; i < MainNav.length; i++){
        MainNav[i].classList.remove("hovered");
        content[i].classList.add("dis-no");
    }
    MainNav[el].classList.add("hovered");
    content[el].classList.remove("dis-no");
    document.body.style.cssText = `background-image: url(\'../photos/${x[el]}-desktop.jpg\');`;
}
//to move from planet to other
function planetChicked(el) {
    for(let i = 0; i < PlanetNav.length; i++){
        PlanetNav[i].classList.remove("hovered");
        PlanetContent[i].classList.add("dis-no");
        planetImage[i].classList.add("dis-no");
    }
    PlanetNav[el].classList.add("hovered");
    PlanetContent[el].classList.remove("dis-no");
    planetImage[el].classList.remove("dis-no");
}
//move from Crew member to other
function crewChicked(el) {
    for(let i = 0; i < crewImage.length; i++){
        crewSelector[i].classList.remove("hovered");
        crewContent[i].classList.add("dis-no");
        crewImage[i].classList.add("dis-no");
    }
    crewSelector[el].classList.add("hovered");
    crewContent[el].classList.remove("dis-no");
    crewImage[el].classList.remove("dis-no");
}
//move from rocket to other
function techChicked(el) {
    for(let i = 0; i < techImage.length; i++){
        techSelector[i].classList.remove("hovered");
        techImage[i].classList.add("dis-no");
        techContent[i].classList.add("dis-no");
    }
    techSelector[el].classList.add("hovered");
    techImage[el].classList.remove("dis-no");
    techContent[el].classList.remove("dis-no");
}

for(let m = 0; m < 4; m++){
    MainNav[m].onclick = () => itemChicked(m);
    PlanetNav[m].onclick = () => planetChicked(m);
    crewSelector[m].onclick = () => crewChicked(m);
}
for(let t = 0; t < 3; t++){
    techSelector[t].onclick = () => techChicked(t);
}
window.onload = () => {
    itemChicked(0);
    planetChicked(0);
    crewChicked(0);
    techChicked(0);
}