// Dom
let val;

val = document;

val = document.baseURI; // 웹 페이지의 절대 URI 반환
val = document.head; // head 태그 반환
val = document.body; // body 태그 반환

val = document.forms; // form 태그 반환
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts[0].getAttribute("src");

// 하나의 요소에 접근
const headerContainer = document.getElementById("header-container");

// 스타일 변경 - display:none 로 변경한것
// headerContainer.style.display = "none";

// display none 까지 된 텍스트도 다 보여줌
headerContainer.textContent = "Text Contant";
// 사용자에게 보여지는 텍스트만 보여줌 - 공백은 한칸만 있는걸로 치환해서 보여줌
headerContainer.innerText = "Inner Text";
// 모든 html 코드를 포함해서 보여줌
headerContainer.innerHTML = "<span>Inner HTML</span>";

// 선택자로 접근
// class 의 경우 .className
// id 의 경우 #id
// document.querySelector("");

// 여러 요소에 접근
// getElement's' 임
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelectorAll();

const items = document.getElementsByClassName("list-group-item");
items[0].style.color = "blue";
items[3].textContent = "hi";

let lists = document.getElementsByTagName("li");

lists = Array.from(lists);

lists.forEach((list, i) => {
  list.textContent = `${i}. List`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
liOdd.forEach((list, i) => {
  list.style.background = "gray";
});
console.log(liOdd);
