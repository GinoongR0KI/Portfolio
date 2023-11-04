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