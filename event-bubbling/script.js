const form = document.querySelector("form");
const div = document.querySelector("div");
const p = document.querySelector("p");

// e.target ===> 실제 이벤트가 시작된 '타킷' 요소
// this (event.currentTarget) ===> 핸들러가 할당된 요소.
form.onclick = (e) => {
  e.target.style.backgroundColor = "lightblue";

  setTimeout(() => {
    alert(`target = ${e.target.tagName} , this = ${this.tagName}`);
    e.target.style.backgroundColor = "";
  }, 0);
};
