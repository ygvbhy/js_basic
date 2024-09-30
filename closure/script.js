function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: ", outerVariable); // outside
    console.log("Inner Variable: ", innerVariable); // inside
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");
console.log(newFunction);
console.clear();

// closure 로 인해 outerVariable 을 기억하고 있다가 액세스 가능하다.

let a = "a";

function functionA() {
  let b = "b";
  console.log(a, b); // a b
  functionB();
}

function functionB() {
  let c = "c";
  console.log(a, b, c); // b is not defined
}

// functionA();

// closure 활용 해서 해결
function a1() {
  let b = "b";
  function b1() {
    let c = "c";
    console.log(a, b, c); // a b c
  }

  b1();
}

a1();
