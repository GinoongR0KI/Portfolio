export class Init {
    vh; vw;
    nav_height;

    constructor () {
        this.vh = window.innerHeight;
        this.vw = window.innerWidth;
    }

    vh_to_px (vh) {
        return (vh * this.vh) / 100;
    }

    getHeight (obj) {
        obj = document.querySelector (obj);
        return obj.offsetHeight;
    }
}