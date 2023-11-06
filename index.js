import { Toast } from "./js/Toast.js";

// Scroll
let navbar = document.querySelector("#Navbar");
let nav_height = navbar.offsetHeight;

navbar.style.marginTop = -(nav_height) + "px";
function runOnScroll() {
    if (document.documentElement.scrollTop > 2) {
        navbar.classList.add("scrolled");
        navbar.style.marginTop = 0 + "px";
    } else {
        navbar.classList.remove("scrolled");
        navbar.style.marginTop = -(nav_height) + "px";
    }
}
window.addEventListener("scroll", runOnScroll);

// Dev Summary
let dev_summary = document.querySelectorAll(".dev-summary")[0];
dev_summary.style.bottom = nav_height + "px";

// Show Truth Buttons
let truthButtons = document.querySelectorAll("[data-roki-tag='viewtruth']");
truthButtons.forEach((element, index) => {
    let container = document.querySelectorAll("[data-roki-special-id='"+element.dataset.targetElement+"']")[0];
    let description = document.querySelectorAll("[data-roki-special-id='"+element.dataset.targetElement+"']")[0].firstElementChild;
    let truthCard = document.querySelectorAll("[data-roki-special-id='"+element.dataset.targetElement+"']")[0].lastElementChild;

    element.addEventListener('click', () => {

        if (container.classList.contains(".shown")) {
            container.classList.remove(".shown");
            container.classList.add(".hidden");
            console.log("remove");

            description.style.animation = "project-exit-L";
            description.style.animationDuration = "0.2s";
            description.addEventListener('animationend', () => {
                description.style.display = "none";
                truthCard.style.display = "block";
                truthCard.style.animation = "project-entrance-R";
                truthCard.style.animationDuration = "0.2s";
            }, {once: true});
        } else {
            container.classList.remove(".hidden");
            container.classList.add(".shown");
            console.log("shown");

            truthCard.style.animation = "project-exit-R";
            truthCard.style.animationDuration = "0.2s";
            truthCard.addEventListener('animationend', () => {
                truthCard.style.display = "none";
                description.style.display = "block";
                description.style.animation = "project-entrance-L";
                description.style.animationDuration = "0.2s";
            }, {once: true});
        }
    });


});

// Toast
let toast_items = document.querySelectorAll(".toast-item");
toast_items.forEach(element => {
    // element.addEventListener("animationend", () => {
    //     element.parentElement.removeChild(element);
    // }, {once: true});
    element.addEventListener("animationend", (event) => {
        console.log(event.animationName);
        if (event.animationName == "toast-created") {element.classList.remove("created"); return false;} 
        console.log(element.style.animationName);
        element.parentElement.removeChild(element);
    });

    let close_button = element.querySelector("[data-roki-toast-target='"+element.dataset.rokiToast+"'");
    close_button.addEventListener("click", () => {
        // console.log("clicked");
        // element.parentElement.removeChild(element);
        element.classList.add("closed");
    });
});

// Toast
let toast_container = document.querySelector(".toast");
document.querySelector(".mobile").addEventListener("click", () => {
    let date = new Date();
    let toastItem = new Toast(date.getTime(), "Mobile Navigation Issue", "Attention: Mobile Navigation Bar functionality is yet to be developed. I have left you this message to inform you that. Yes... I made a Toast instead of developing the navigation bar...");
    toast_container.appendChild(toastItem);
});