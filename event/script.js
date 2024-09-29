window.onload = () => {
  // 문서가 load 될 때 이 함수를 실행

  // id 가 'text' 인 요소를 return
  let text = document.getElementById("text");

  text.innerText = "HTML 문서 loaded";
};

// onclick event 등록
// <button class="btn btn-success" onclick="alert('버튼이 클릭됐습니다.')">

// addEveltListener 활용
const aElement = document.querySelector("a");
aElement.addEventListener("click", () => {
  alert("a Element Click");
});

const buttonElement = document.querySelector(".btn2");
buttonElement.addEventListener("click", (e) => {
  let val;

  val = e.target;
  val = e.target.id;
  val = e.target.className; // String 으로 반환
  val = e.target.classList; // 배열로 반환

  val = e.type;
  // 윈도우로부터의 거리 좌표
  val = e.clientY;
  // 요소로부터의 거리 좌표
  val = e.offsetY;
  console.log(val);
});
