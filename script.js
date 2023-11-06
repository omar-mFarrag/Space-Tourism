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

// This part for Destination page
var destinationName = "";
var destinationImage = document.getElementById('destination-Image');
var planetName = document.getElementById('planet-name');
var destinationSelection = document.getElementsByClassName('your-destination');
var destinationDescription = ``
var dda = document.getElementById('dda');
var i = 0;
var canSelectDestination = true
function selectedDestination(dest){
    if(canSelectDestination === true){
        canSelectDestination = false;
        // to get destinaiton name
        destinationName = dest.className.split(" ")[1];
        // to change image of planet
        destinationImage.src = `./assets/destination/image-${destinationName}.png`;
        // to change and add animation for planet name
        planetName.style.animation = '1.5s linear DestinationName ';
        setTimeout(() => {
            planetName.innerHTML = destinationName.toUpperCase();
        }, 750);
        setTimeout(() => {
            planetName.style.animation = '';
        }, 1600);
        // to change selection destination
        for (let i = 0; i < destinationSelection.length; i++) {
            destinationSelection[i].classList.remove('active-destination');
        }
        dest.classList.add('active-destination');
        if (dest.className.split(" ")[1] === 'moon') {
            destinationDescription = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        } else if(dest.className.split(" ")[1] === 'mars' ) {
            destinationDescription = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
        } else if(dest.className.split(" ")[1] === 'europa'){
            destinationDescription = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        } else if(dest.className.split(" ")[1] === 'titan'){
            destinationDescription = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        }
        // to change destination description
        dda.innerHTML = "";
        typeWriter();
        if (dest.className.split(" ")[1] === 'moon') {
            nextDestance = '384,400 KM';
            nextTime = '3 DAYS';
        } else if(dest.className.split(" ")[1] === 'mars' ) {
            nextDestance = '225 MIL. KM';
            nextTime = '9 MONTHS';
        } else if(dest.className.split(" ")[1] === 'europa'){
            nextDestance = '628 MIL. KM';
            nextTime = '3 YEARS';
        } else if(dest.className.split(" ")[1] === 'titan'){
            nextDestance = '1.6 BIL. KM';
            nextTime = '7 YEARS';
        }
        typingSpeed = 750 / nextDestance.length;
        typingSpeedT = 750 / nextTime.length;
        destanceDelete();
        timeDelete();
        setTimeout(() => {
            currentDestance = nextDestance;
            destanceTyping();
            currentTime = nextTime;
            timeTyping();
        },750);
        setTimeout(() => {
            deleteLocation = currentDestance.length;
            deleteLocationT = currentTime.length;
            i = 0;
            typingLocation = 0;
            typingLocationT = 0;
            canSelectDestination = true;
        },  1600);
    }
}
var speed = 1500 / destinationDescription.length;
function typeWriter() {
    if (i < destinationDescription.length) {
        document.getElementById("dda").innerHTML += destinationDescription.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

var currentDestance = '384,400 km'
var nextDestance = ''
var deleteLocation = currentDestance.length;
var deleteSpeed = 600 / (currentDestance.length + 1);

function destanceDelete() {
    if ( deleteLocation > -1 ) {
        document.getElementById('d-destance').innerHTML = currentDestance.slice(0, deleteLocation)
        setTimeout(destanceDelete , deleteSpeed);
        console.log(deleteLocation);
        deleteLocation--;
    }
}

var typingLocation = 0
var typingSpeed = 600 / nextDestance.length;
function destanceTyping(){
    if(typingLocation < nextDestance.length){
        console.log('*' + typingLocation);
        document.getElementById('d-destance').innerHTML += nextDestance.charAt(typingLocation)
        typingLocation++;
        setTimeout(destanceTyping, typingSpeed);
    }
}

var currentTime = '3 DAYS'
var nextTime = ''
var deleteLocationT = currentTime.length;
var deleteSpeedT = 600 / (currentTime.length + 1);

function timeDelete() {
    if ( deleteLocationT > -1 ) {
        document.getElementById('d-time').innerHTML = currentTime.slice(0, deleteLocationT)
        setTimeout(timeDelete , deleteSpeedT);
        deleteLocationT--;
    }
}

var typingLocationT = 0
var typingSpeedT = 600 / nextTime.length;
function timeTyping(){
    if(typingLocationT < nextTime.length){
        document.getElementById('d-time').innerHTML += nextTime.charAt(typingLocationT)
        typingLocationT++;
        setTimeout(timeTyping, typingSpeedT);
    }
}