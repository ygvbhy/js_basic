const buttonList = document.querySelector("#buttons");
const button = document.createElement("button");
button.setAttribute("class", "buttonClass");
button.innerText = "Click Me";
buttonList.appendChild(button);

buttonList.addEventListener("click", () => alert("Button Clicked"));

// const buttons = document.getElementsByClassName("buttonClass");

// for (const button of buttons) {
//   button.addEventListener("click", () => {
//     alert("Button Clicked");
//   });
// }
