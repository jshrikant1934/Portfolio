// Scroll animation effect
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
// Typing Effect
const roles = [
  "Software Developer",
  "Leadership Handler",
  "Quick Learner",
  "Problem Solver"
  
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
let typingElement = document.getElementById("typing");

function typeEffect() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
      typingElement.textContent = currentRole;
    } else if (isDeleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
      typingElement.textContent = currentRole;
    }

    if (j === roles[i].length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // wait before deleting
      return;
    } else if (j < 0) {
      isDeleting = false;
      i++;
      if (i === roles.length) i = 0; // loop back
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 120); // speed
}

typeEffect();
