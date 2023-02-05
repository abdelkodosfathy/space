let MainNav = document.getElementsByClassName("nav-item");
let content = document.getElementsByClassName("content");
let PlanetNav = document.getElementsByClassName("nav-planet");
let PlanetContent = document.getElementsByClassName("planet-content");
let planetImage = document.getElementsByClassName("img-planet");
let crewImage = document.getElementsByClassName("img-crew");
let crewSelector = document.getElementsByClassName("crew-selector");
let crewContent = document.getElementsByClassName("crew-content");
console.log(MainNav);
//to set underline
function itemChicked(el) {
    for(let i = 0; i < MainNav.length; i++){
        MainNav[i].classList.remove("hovered");
        if(i <= 2){
            content[i].classList.add("dis-no");
        }
    }
    MainNav[el].classList.add("hovered");
    content[el].classList.remove("dis-no");
    switch(el){
        case 0:
            document.body.style.cssText = "background-image: url('../photos/home/background-home-desktop.jpg');";
            break;
        case 1:
            document.body.style.cssText = "background-image: url('../photos/destination/background-destination-desktop.jpg');";
            break;
        case 2:
            document.body.style.cssText = "background-image: url('../photos/crew/background-crew-desktop.jpg');";
            break;

    }
}
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

window.onload = itemChicked(0);
MainNav[0].onclick = () => itemChicked(0);
MainNav[1].onclick = () => itemChicked(1);
MainNav[2].onclick = () => itemChicked(2);
MainNav[3].onclick = () => itemChicked(3);

window.onload = planetChicked(0);
PlanetNav[0].onclick = () => planetChicked(0);
PlanetNav[1].onclick = () => planetChicked(1);
PlanetNav[2].onclick = () => planetChicked(2);
PlanetNav[3].onclick = () => planetChicked(3);

window.onload = crewChicked(0);
crewSelector[0].onclick = () => crewChicked(0);
crewSelector[1].onclick = () => crewChicked(1);
crewSelector[2].onclick = () => crewChicked(2);
crewSelector[3].onclick = () => crewChicked(3);
