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

// 5강 js 타입 변환
// 1. Js 함수로 변환
// 2. Js 자체에 의해 변환

// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// Converting Numbers to Booleans

// 함수를 사용해서
let val;
val = 123;
// number to string
val = String(123);
val = val + "";

// boolean to string
val = false;
val = String(val);
val = val + "";

// Date to String
val = new Date();
val = String(val);

// Array to String
val = [1, 2, 3, 4, 5];
val = String(val);

// toString()
val = 123;
val = val.toString();

// String to number
val = "123";
val = Number(val);
val = +val;
val = Number(true);
val = Number(false);
val = Number(null);
val = Number([1, 2, 3]);
// NaN = Not a Number

val = "111.40";
// 소수점 유지
val = parseFloat(val);
// 소수점 제거
val = parseInt(val);

console.log(val);
console.log(typeof val);

const val1 = 2;
const val2 = 3;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

// 문자열 + 숫자 면 그냥 문자열을 이어 붙인 값으로 출력 됨
const val3 = String(2);
const val4 = 3;
const sum1 = val3 + val4;

console.log(sum1);
console.log(typeof sum1);
console.clear();

// 6강 자바스크립트 연산 및 Math Object
const n1 = 20;
const n2 = 10;

let cal;
// 간단한 연산
cal = n1 + n2; // 30
cal = n1 - n2; // 10
cal = n1 * n2; // 200
cal = n1 / n2; // 2
cal = n1 % n2; // 0 - n2 를 n1 에 나눴을때의 나머지

// Math Object
cal = Math.E;
cal = Math.PI;
cal = Math.round(2.4); // 2
cal = Math.ceil(2.4); // 3
cal = Math.floor(2.8); // 2
cal = Math.abs(-5); // 5 = 절대값
cal = Math.min(2, 3, 4, 5, 6, 7, 8, -1); // -1
cal = Math.max(2, 3, 4, 5, 6, 7, 8, -1); // 8
cal = Math.random(); // 0 ~ 1 사이의 숫자 반환
cal = Math.floor(Math.random() * 20 + 1); // 1 ~ 20 까지 랜덤

console.log(cal);
console.clear();

// 7강 Template Literals
// `` 백틱 문자를 사용하여 문자열을 표현한 것을 템플릿 리터럴이라고 한다.
// 줄바꿈 가능, 문자열 내부에 표현식을 포함할 수 있게 됨
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}`);
console.clear();
