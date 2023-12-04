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
// start of sctipt for technology.js

var techselectors = document.getElementsByClassName('tech-selec');
var techName = document.getElementById('tech-name');
var techDiscription = document.getElementById('tech-discription');
var text = document.getElementById('tech-info-t');
var canChange = true;


var fristTechName = 'LAUNCH VEHICLE';
var secondTechName = 'SPACEPORT';
var thirdTechName = 'SPACE CAPSULE';

var fristTechDiscription = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
var secondTechDiscription = `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`;
var thirdTechDiscription = `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`;

var techImg = document.getElementById('tech-img');

function technologyChange(ele){
    if (canChange === true) {
        canChange = false;
        for (let i = 0; i < techselectors.length; i++) {
            techselectors[i].classList.remove('active-tech')
        }
        ele.classList.add('active-tech')

        text.style.animation = '1.5s linear textAnimation ';
        setTimeout(() => {
            if (Number(ele.innerHTML) == 1) {
                techName.innerHTML = fristTechName;
                techDiscription.innerHTML = fristTechDiscription;
            } else if (Number(ele.innerHTML) == 2) {
                techName.innerHTML = secondTechName;
                techDiscription.innerHTML = secondTechDiscription;
            } else if (Number(ele.innerHTML) == 3) {
                techName.innerHTML = thirdTechName;
                techDiscription.innerHTML = thirdTechDiscription;
            }
        }, 750);

        if (screen.width > 1024) {
            techImg.style.animation = '1.5s linear imageAnimation ';
        } else {
            techImg.style.animation = '1.5s linear imageAnimationMobile ';
        }

        setTimeout(() => {
            if (screen.width > 1024) {
                if (Number(ele.innerHTML) == 1) {
                    techImg.src = `./assets/technology/image-launch-vehicle-portrait.jpg`;
                } else if (Number(ele.innerHTML) == 2) {
                    techImg.src = `./assets/technology/image-spaceport-portrait.jpg`;
                } else if (Number(ele.innerHTML) == 3) {
                    techImg.src = `./assets/technology/image-space-capsule-portrait.jpg`;
                }
            }else{
                if (Number(ele.innerHTML) == 1) {
                    techImg.style.content = `url(../assets/technology/image-launch-vehicle-landscape.jpg)`;
                } else if (Number(ele.innerHTML) == 2) {
                    techImg.style.content = `url(../assets/technology/image-spaceport-landscape.jpg)`;
                } else if (Number(ele.innerHTML) == 3) {
                    techImg.style.content = `url(../assets/technology/image-space-capsule-landscape.jpg)`;
                }
            }
        }, 750);

        setTimeout(() => {
            canChange = true
            text.style.animation = "";
            techImg.style.animation = "";
        }, 1500);
    }
}
// The End...