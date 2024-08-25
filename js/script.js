const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const navbarScroll = document.querySelector(".navbar");
document.addEventListener("scroll", function() {
  if (window.scrollY > 0 && !navbarScroll.contains(document.activeElement)) {
    navbarScroll.style.backgroundColor = "rgba(1, 1, 3, 0.8)";
    navbarScroll.style.transition = "background-color 0.8s ease-in-out"
  } else {
    navbarScroll.style.backgroundColor = "";
  }
});