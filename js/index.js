import {Init} from "./Init.js";
import {Section} from "./Section.js";
import { NavBar } from "./NavBar.js";

const init = new Init(); // Declares all variables

const navbar = new NavBar();

// Sections
const section_header = new Section("#Header");
const section_about = new Section("#About");
const section_projects = new Section("#Projects");

    // Set heights
section_header.setHeight("100dvh");

section_about.setPadding(3, navbar.getHeight()+"px");

section_projects.setHeight("100dvh");
section_projects.setPadding(1, navbar.getHeight() + "px"); // Bottom Padding
section_projects.setPadding(3, navbar.getHeight() + "px"); // Top Padding

function runOnScroll() {
    if (document.documentElement.scrollTop > 2) {
        navbar.navbar.classList.add("scrolled");
        navbar.navbar.style.marginTop = 0 + "px";
    } else {
        document.getElementsByClassName("navbar")[0].classList.remove("scrolled");
        navbar.navbar.style.marginTop = -(navbar.getHeight()) + "px";
    }
}

window.addEventListener("scroll", runOnScroll);

//