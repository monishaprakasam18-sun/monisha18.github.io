/* ---------------------------------------------------
SAFE LOAD: Ensure content is visible immediately
--------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
document.body.classList.remove("dark");
});

/* ---------------------------------------------------
THEME TOGGLE (SAFE & STABLE)
--------------------------------------------------- */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

/* ---------------------------------------------------
SKILL RINGS ANIMATION (SAFE VERSION)
--------------------------------------------------- */
const rings = document.querySelectorAll(".skill-ring");

rings.forEach(ring => {
const percent = parseInt(ring.getAttribute("data-percent"));
const circle = document.createElement("div");

```
circle.style.position = "absolute";
circle.style.width = "100%";
circle.style.height = "100%";
circle.style.borderRadius = "50%";
circle.style.border = "10px solid transparent";
circle.style.borderTopColor = "var(--accent)";
circle.style.borderRightColor = "var(--accent)";
circle.style.transform = "rotate(0deg)";
circle.style.transition = "1.4s ease-out";

ring.appendChild(circle);

// Animate after load
setTimeout(() => {
    circle.style.transform = `rotate(${percent * 1.8}deg)`;
}, 500);
```

});

/* ---------------------------------------------------
SMART FILTERING SYSTEM
--------------------------------------------------- */

/* Internship Filter */
document.getElementById("internshipFilter").addEventListener("change", function () {
const value = this.value;
document.querySelectorAll(".timeline-item").forEach(item => {
item.style.display = (value === "all" || item.getAttribute("data-year") === value)
? "block"
: "none";
});
});

/* Research Filter */
document.getElementById("researchFilter").addEventListener("change", function () {
const value = this.value;
document.querySelectorAll("#papers li").forEach(item => {
item.style.display = (value === "all" || item.getAttribute("data-category") === value)
? "block"
: "none";
});
});

/* Certification Filter */
document.getElementById("certFilter").addEventListener("change", function () {
const value = this.value;
document.querySelectorAll("#certifications li").forEach(item => {
item.style.display = (value === "all" || item.getAttribute("data-category") === value)
? "block"
: "none";
});
});

/* ---------------------------------------------------
CHATBOT TOGGLE
--------------------------------------------------- */
const chatIcon = document.getElementById("chatbotIcon");
const chatWindow = document.getElementById("chatbotWindow");

chatIcon.addEventListener("click", () => {
chatWindow.style.display =
chatWindow.style.display === "flex" ? "none" : "flex";
});

/* ---------------------------------------------------
PARTICLES LOAD (GITHUB PAGES SAFE)
--------------------------------------------------- */
particlesJS.load("particles-js", "particles.json", function () {
console.log("Particles loaded successfully.");
});
