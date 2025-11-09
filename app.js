// Mobile Navigation Toggle - Fixed Version
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
console.log(navLinks.classList.contains("active"));
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");

    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else {
    navLinks.classList.add("active");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
});

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("active");
  } else {
    backToTopButton.classList.remove("active");
  }
});

// Form Submission
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // In a real application, you would send this data to a server
  console.log("Form submitted:", { name, email, message });

  // Show success message (in a real app, you'd handle this properly)
  alert("Thank you for your message! I'll get back to you soon.");

  // Reset form
  contactForm.reset();
});

// Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const targetId = this.getAttribute("href");
//     if (targetId === "#") return;

//     const targetElement = document.querySelector(targetId);
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop - 80,
//         behavior: "smooth",
//       });
//     }
//   });
// });

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
    nav.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  } else {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    nav.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  }
});
