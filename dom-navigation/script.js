let val;

const list = document.querySelector("ul");
const listItem = document.querySelector("li.list-group-item:first-child");

val = list.childNodes; // NodeList 반환, line break 도 포함 되어 반환
val = list.childNodes[0].nodeName;
val = list.childNodes[3];
val = list.childNodes[3].nodeType; // 1

// nodeType
// 1 - Element
// 2 - Attribute (deprecated) - 사용하지 않음
// 3 - text node
// 8 - Commnet Node - 주석
// 9 - Document itself
// 10 - Doctype

// children element nodes 반환
val = list.children; // html COLLECTION 반환 (line break 포함 안됨)
val = list.children[1];
list.children[1].textContent = "hi";

// First chile
val = list.firstChild;
// list.firstChild === list.childNodes[0]
val = list.firstElementChild;

// Last child
val = list.lastChild;
// list.lastChild === list.childNodes[list.childNodes.length - 1]
val = list.lastElementChild;

// child 요소 count
val = list.childElementCount;

// parent node 반환 - 부모 요소 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// previous Sibling 반환
val = listItem.previousSibling;
val = list.previousElementSibling;

// 위의 두개는 동일한 라인의 다음과 이전으로 찾는 거임
// 부모요소로 가는건 아님

console.log("val :", val);

// console.log("list:", list);
// console.log("listItem:", listItem);
