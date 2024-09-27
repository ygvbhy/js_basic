// 챕터 2 - 1강 Window 객체
// window 객체는 브라우저에 의해 자동으로 생성된다.
// 웹 브라우저창을 나타낸다.
// var 키워드로 변수를 선언하거나 함수를 선언하면 window 객체의 프로퍼티가 된다.
var A = 1;
window.A; // 1
console.log(window.A);

let val;

// 브라우저의 총 창 크기
val = window.outerHeight;
val = window.outerWidth;

// 브라우저의 개발자 모드 창을 제외한 화면 표시 영역 크기
val = window.innerWidth;
val = window.innerHeight;

// 스크롤의 Y 위치 - 내려갈 수록 크기가 커짐
val = window.scrollY;
// 스크롤의 X 위치 - 우측으로 갈 수록 커짐
val = window.scrollX;

// 현재 url 에 대한 정보
val = window.location;

val = window.location.href;
// 이렇게 할 경우 링크 이동이 됨.
// window.location.href = "https://google.com";

// history
// 스택 형식으로 지나온 브라우저 링크들이 쌓이는데 이걸 이동 시키는 방법임
// 음수의 경우 뒤로 가기
// window.history.go(-1);
// 뒤로 가기
// window.history.back()

// 브라우저에대한 정보
val = window.navigator;

console.log(val);
