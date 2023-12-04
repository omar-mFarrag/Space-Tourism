// this part for mega menu 
var mobileMenu = document.getElementById("mobile-menu");
var menuButton = document.getElementById('menu-button')
var mobileMenuCounter = 0;
function showAndHideMobileMenu(){
    mobileMenuCounter ++;
    if ( mobileMenuCounter % 2 === 0 ) {
        mobileMenu.style.transform = "translateX(100%)";
        menuButton.src = './assets/shared/icon-hamburger.svg';
    }else{
        mobileMenu.style.transform = "translateX(0%)";
        menuButton.src = './assets/shared/icon-close.svg';
    }
}
// asdfasdfasdfasdf

var crewPoints = document.getElementsByClassName('crew-selecting-point');
var nameo =  document.getElementById('name');
var jobTitle =  document.getElementById('job-title');
var bio =  document.getElementById('bio');
var clickedPoint = 0;
var crewInfoText = document.getElementById('crew-info-text');
var crewImage = document.getElementById('crew-image');
function crewChange(clicked){
    for (let i = 0; i < crewPoints.length; i++) {
        crewPoints[i].classList.remove('active-crew')
    }
    clicked.classList.add('active-crew');
    for (let i = 0; i < crewPoints.length; i++) {
        if (crewPoints[i].classList.contains('active-crew')) {
            clickedPoint = i;
        }
    }
    infoChange();
}

// names, bio and job titles

var names = ['Douglas Hurley', 'MARK SHUTTLEWORTH', 'Victor Glover', 'Anousheh Ansari']
var jobTitles = ['Commander ', 'Mission Specialist ', 'PILOT', 'Flight Engineer']
var bios = ['Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. ',
            'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
            'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.' ,
            'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
        ]

function infoChange() {
    crewInfoText.style.animation = '1.5s linear crewInfo ';
    crewImage.style.animation = '1.5s linear crewImage ';
    setTimeout(() => {
        nameo.innerHTML = names[clickedPoint];
        jobTitle.innerHTML = jobTitles[clickedPoint];
        bio.innerHTML = bios[clickedPoint];
        crewImage.src = `./assets/crew/${clickedPoint + 1}.png`;
    }, 750);
    setTimeout(() => {
        crewInfoText.style.animation = '';
        crewImage.style.animation = '';
    }, 1500);
}