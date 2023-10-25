export class Section {
    id;
    obj;

    constructor (id) {
        this.id = id;
        this.obj = document.querySelector(id);
    }

    setHeight (height) {
        this.obj.style.height = height;
        console.log("height set to: " + height);
    }

    getHeight () {
        return this.obj.offsetHeight;
    }

    setPadding (direction = 4, padding) {
        switch (direction) {
            case 0:
                this.obj.style.paddingRight = padding;
            break;
            case 1:
                this.obj.style.paddingBottom = padding;
            break;
            case 2:
                this.obj.style.paddingLeft = padding;
            break;
            case 3:
                this.obj.style.paddingTop = padding;
            break;
            default:
                this.obj.style.padding = padding;
        }
    }
}