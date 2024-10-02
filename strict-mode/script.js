// 문법적 오류를 잡아주는 모드
// 대부분 뭔가 이상한 코드도 별다른 문제가 없다면 넘기지만
// strict 모드를 설정 하면 이상한 코드는 에러로 걸러버림
"use strict";

function sum(a, b) {
  // "use strict";
  // 이렇게 쓰면 이 함수만 strict 모드 설정
  return a + b;
}

// class 사용하면 자동으로 strict 모드로 설정 됨
class Cat {}

function add(a, a, b) {
  return a + a + b;
}

// class 사용하면 자동으로 strict 모드로 설정 됨
console.log(add(1, 2, 3));

const obj2 = {
  get readOnly() {
    return 7;
  },
};

// readOnly 인데 strict 모드 아니라면 오류 안남
console.log(obj2.readOnly);
obj2.readOnly = 10;
console.log(obj2.readOnly);

const obj = {};
Object.defineProperty(obj, "readOnly", {
  writable: false,
  value: 7,
});

// readOnly 인데 strict 모드 아니라면 오류 안남
console.log(obj.readOnly);
obj.readOnly = 10;
console.log(obj.readOnly);

// strict 모드가 아닐땐 아무런 오류도 없음
// strict 모드 라면 바로 오류남
undefined = 9;
NaN = 10;

let greeting = "hello";

greating = "hi"; // strict 모드 일땐 오류 남 greating is not defined

console.log(greeting); // strict 모드 아닐땐 정상 출력.
console.log(window.greating); // strict 아닐떈 window 객체에 들어가서 선언 됨. 'hi' 출력
