const listParent = document.querySelector("ul");

const list = document.querySelectorAll("li");

// 요소 지우기
// 부모 노드에서 자식을 찾아서 지우는 방식
listParent.removeChild(list[1]);

// 요소 교체하기
const oldElement = document.getElementById("A");
const newElement = document.createElement("span");

newElement.textContent = "Hi";
oldElement.parentNode.replaceChild(newElement, oldElement);
