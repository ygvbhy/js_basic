// 1강 console
console.log("안녕하세요!");
console.log(123);
console.log(false);
console.log(true);
var greeting = "안녕하세요.";
console.log(greeting);
console.log({ a: "a", b: "b" });

// 객체를 테이블 형식으로 출력
console.table({ a: "a", b: "b" });

// 에러 메시지
console.error("Error!");

// 경고 메시지
console.warn("Warn!");

// time 부터 timeEnd 까지의 걸린 시간 측정 - 뒤의 ID 값은 같아야 함
console.time("Hello");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd("Hello");

// 여태까지 출력한 콘솔 없앰
console.clear();

// 2강 var, let, const
// var
var A = 1 + 1;
console.log(A); // 2

var greeting = "hello";
console.log(greeting);

var greeting = "hi";
console.log(greeting);

greeting = "how are you?";
console.log(greeting);
// 같은 변수 명에 재선언 부터 재할당까지 가능하기 때문에 잘 안씀

// let
// 중복 선언은 불가능 하지만 재할당은 가능함
// let greeting1 = "hi";
console.log(greeting);

let greeting1 = "let Hello";
// vsc 에서 에러 출력
// 블록 범위 변수 'greeting1' 을 다시 선언 할 수 없다.
console.log(greeting);

greeting1 = "hello";
console.log(greeting);

// const
// 중복선언과 재할당 전부 불가능
const greeting2 = "const hi";
console.log(greeting2);

// greeting2 = "hello";
// console.log(greeting2);
// const 로 선언 된 변수 이므로 재할당시 오류 출력
// Uncaught TypeError: Assignment to constant variable.

// 3깅 변수의 참조 범위(scope)

// 유효한 참조 범위
// var => 함수 레벨 스코프
function func() {
  if (true) {
    var a = "a";
    console.log(a);
  }
  console.log(a);
}
// console.log(a);
// not found
func();

// let, const => 블록 레벨 스코프
function func1() {
  if (true) {
    let b = "b";
    const c = "c";
    console.log(b);
    console.log(c);
  }
  // console.log(b);
  // not found
  // console.log(c);
  // not found
}
func1();
