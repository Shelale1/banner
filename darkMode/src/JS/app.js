// const mainSide= document.getElementById("sides")
const bigDiv = document.querySelector(".big");
const littleDiv = document.querySelector(".little");

let darkMode = localStorage.getItem("theme");

const addDarkMode = () => {
 document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "qara");
 

};
const removeDarkMode = () => {
    document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "");
 
};

bigDiv.addEventListener("click", () => {
  darkMode = localStorage.getItem("theme");

  !darkMode ? addDarkMode() : removeDarkMode();

 
});

darkMode && addDarkMode();
