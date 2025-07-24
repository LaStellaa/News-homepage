"use strict";

const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
const menuCloseIcon = document.querySelector(".menu-close-icon");

// Function to check if the screen size is mobile
const isMobileScreen = () => window.matchMedia("(max-width: 767px)").matches;

// Function to show the menu
const showMenu = () => {
  if (isMobileScreen()) {
    menu.style.visibility = "visible"; // Make the menu visible
    menu.style.opacity = "1"; // Fully opaque
    menuCloseIcon.style.display = "flex"; // Show the close icon
    menuCloseIcon.style.opacity = "1";
    menuIcon.style.display = "none"; // Hide the menu icon
  }
};

// Function to hide the menu
const hideMenu = () => {
  if (isMobileScreen()) {
    menu.style.visibility = "hidden"; // Hide the menu
    menu.style.opacity = "0"; // Fully transparent
    menuCloseIcon.style.display = "none"; // Hide the close icon
    menuCloseIcon.style.opacity = "0";
    menuIcon.style.display = "block"; // Show the menu icon
  }
};

// Ensure menu resets correctly on resize
const resetMenuOnResize = () => {
  if (!isMobileScreen()) {
    // Reset all inline styles to let CSS take over
    menu.style.visibility = "";
    menu.style.opacity = "";
    menuCloseIcon.style.display = "";
    menuCloseIcon.style.opacity = "";
    menuIcon.style.display = "";
  }
};

// Event listeners
menuIcon.addEventListener("click", showMenu);
menuCloseIcon.addEventListener("click", hideMenu);
window.addEventListener("resize", resetMenuOnResize);
