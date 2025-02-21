const darkmodebutton = document.getElementById("darkmode-button");
const lightmodebutton = document.getElementById("lightmode-button");
const bodyElement = document.querySelector("body");
const h2Element = document.querySelector("h2");
const h3Element = document.querySelector("h3");

const pElement = document.querySelector("p");
const liElement = document.querySelector("li");
const labelElement = document.querySelector("label");

//darkmode
darkmodebutton.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = " rgb(38, 38, 38)";
  pElement.style.color = "#fff";
  h2Element.style.color = "#fff";
  h3Element.style.color = "#fff";

  labelElement.style.color = "#fff";
});

//lightmode
lightmodebutton.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = " rgb(193, 236, 250)";
  h2Element.style.color = "#000";
  h3Element.style.color = "#000";

  pElement.style.color = "#000";
  labelElement.style.color = "#000";
});
