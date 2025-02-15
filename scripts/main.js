

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/nyatchi.webp");
  } else {
    myImage.setAttribute("src", "images/Nyatchi_original.webp");
  }
});