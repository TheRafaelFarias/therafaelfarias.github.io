const OPEN_ANIMATION_CLASS = "navbar-opening-animation";
const CLOSE_ANIMATION_CLASS = "navbar-closing-animation";

function toggleNavbarState() {
  const navbarElement = document.getElementById("navbar");

  if (navbarElement === null) {
    console.log("Couldn't find the navbar id on any element");
    return;
  }

  const navbarClasses = navbarElement.classList;

  if (navbarClasses.length === 1) {
    navbarClasses.add(OPEN_ANIMATION_CLASS)
    return
  }
  
  if (navbarClasses.contains(CLOSE_ANIMATION_CLASS)) {
    navbarClasses.replace(CLOSE_ANIMATION_CLASS, OPEN_ANIMATION_CLASS);
    return;
  }

  navbarClasses.replace(OPEN_ANIMATION_CLASS, CLOSE_ANIMATION_CLASS);
}

function copyToClipboard(stringToCopy) {
  navigator.clipboard.writeText(stringToCopy).then(() => {
    alert('Discord nickname copied to clipboard')
  })
}
