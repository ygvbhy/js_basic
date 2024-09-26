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

console.clear();

// 3강 호이스팅
console.log(test3); // undefined
var test3 = "hello";
// 선언 단계와 할당 단계로 분할한다.
// 인터프리터가 분석을 함. 위에서부터 순차적으로
// 하지만 호이스팅으로 변수를 먼저 할당한 뒤 undefined 를 할당 함
// 이후 할당 라인으로 오면 선언된 hello 할당 함

// 함수는 hoisting 되어 제일 먼저 선언 됨
func3();
function func3() {
  console.log("hoisting Test");
}

console.clear();

// console.log(test4); // Uncaught ReferenceError: Cannot access 'test4' before initialization
// 초기화 전에는 test4 에 접근할 수 없다.
// let test4 = "hello";
// 여전히 호이스팅이 되지만 아무런 값도 할당 되지 않는다. undefined 도 안함.
// TDZ(Temporal Dead Zone) 이라 부름.

// 결론
// var 사용 안함.
// 변수를 생성할 때 재할당이 필요없다면 const 사용 하면 됨.
// 재할당이 필요하면 let 으로 선언

// 4강 js 타입
// 원시 타입
// boolean, string, number, null, undefined, Sysbol (불변성을 가지고 있다.)
// 참조 타입
// Object, Array
// 자바스크립트는 느슨한 타입의 동적 언어.
// 특정 타입과 연결되지 않으며, 모든 타입으로 할당 및 재할당 가능
// 이걸 막기 위해 TS 를 사용함
// ex)
let foo = 1;
console.log(typeof foo); // type Number
foo = "string";
console.log(typeof foo); // type String
foo = true;
console.log(typeof foo); // type Boolean

// 원시 타입
// String
const anem = "han";
// number
const age = 30;
// Boolean
const hasJob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = Symbol();

// 첨조 타입
// Array 배열 - 배열도 typeof 로 하면 object 로 나오기 때문에
// Array.isArray() 로 해야 함
const hobbies = ["wakjubg", "books"];
// Object 객체
const address = {
  province: "경기도",
  city: "성남시",
};
console.clear();
