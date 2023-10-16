var vh = window.innerHeight;
var vh_max = 100; // this is equivalent to 100 vh in css
var vh_to_px = (vh_max * vh) / 100;
// Get Navbar height
var nav_height = document.getElementsByTagName("nav")[0].offsetHeight; // This is in pixels
var section_header = document.getElementById("Header");
var section_projects = document.getElementById("Projects");
var section_contact = document.getElementById("Contact");

// Set the first section padding off by navbar height
section_projects.style.paddingTop = nav_height + "px";
console.log(nav_height);
console.log(section_projects.style.paddingTop);

// Get Header Section height
// section_header.style.height = (vh_to_px - nav_height) + "px";
section_header.style.height = vh_max + "dvh";

// Set Contact section padding
section_contact.style.height = (vh_to_px - nav_height) + "px";
section_contact.style.paddingTop = nav_height + "px";


// Project dropdowns
var project_dropdowns = document.getElementsByClassName("project-dropdown");
console.log(project_dropdowns.length);

function project_display(index) {
    if (project_dropdowns[index].classList.contains("active")) {
        project_dropdowns[index].classList.remove("active");
        project_dropdowns[index].style.display = "None";
        console.log("test1");
    } else {
        project_dropdowns[index].classList.add("active");
        project_dropdowns[index].style.display = "Grid";
        console.log("test2");
    }
}

document.getElementById("project-button-tensai").addEventListener("click", function () {
    if (!this.hasChildNodes) return false;
    // var dropdown = "project-dropdown-"+this.id.split("project-button-")[1];
    // dropdown = document.getElementById(dropdown);
    var dropdown = document.getElementById(dropdown_getTarget(this.id));
    var state = "active";

    if (dropdown_display(dropdown, state)) {this.innerText = "See Less..."; return true;}
    this.innerText = "See More...";
});

function dropdown_getTarget(buttonID) {
    var tag = "project-dropdown-" + buttonID.split("project-button-")[1];
    return tag;
}

function dropdown_display(target, state) {
    if (target.classList.contains(state)) {
        target.classList.remove(state);
        target.style.display = "None";
        return false;
    } else {
        target.classList.add(state);
        target.style.display = "Grid";
        return true;
    }
}

// Scroll
var navbar = document.getElementsByClassName("nav")[0];
navbar.style.marginTop = -(nav_height) + "px";
console.log(navbar.style.marginTop);
function runOnScroll() {
    if (document.documentElement.scrollTop > 2) {
        navbar.classList.add("scrolled");
        navbar.style.marginTop = 0 + "px";
        // document.getElementsByClassName("nav")[0].classList.add("scrolled");
        console.log("above");
    } else {
        document.getElementsByClassName("nav")[0].classList.remove("scrolled");
        console.log("below");
        navbar.style.marginTop = -(nav_height) + "px";
    }
}
window.addEventListener("scroll", runOnScroll);

// Footer - Copyright
var copyright_year = document.getElementById("copyright-year");
var dateStart = 2023;
var date = new Date();
copyright_year.innerText = date.getFullYear() != dateStart ? date.getFullYear() : "Present";