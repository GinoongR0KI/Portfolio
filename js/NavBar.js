export class NavBar {
    navbar = document.getElementsByTagName("nav")[0];

    constructor () {
        this.navbar.style.marginTop = -this.getHeight() + "px";
    }

    getHeight() {
        return this.navbar.offsetHeight;
    }
    
}