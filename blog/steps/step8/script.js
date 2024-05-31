function toggleMenu() {
  let navBar = document.querySelector('.top-nav nav');
  if (navBar.style.display === "flex") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "flex";
  }
}

// If you've made the screen narrow and clicked the hamburger icon, it
// will set the inline display style of the nav menu, which overrides
// our other CSS. So let's reset the inline display style whenever we resize.
function resetNavMenuDisplay() {
  let navBar = document.querySelector('.top-nav nav');
  navBar.style.display = '';
}


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.menu').addEventListener('click', toggleMenu);
  window.addEventListener('resize', resetNavMenuDisplay)
});
