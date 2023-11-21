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
