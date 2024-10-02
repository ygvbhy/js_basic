(function () {
  let aName = "Barry";
})();
// IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가.
// console.log(aName); // aName is not defined

var result = (function () {
  var name = "Barry";
  return name;
})();

console.log(result); // Barry
console.clear();

const score = () => {
  let count = 0;
  return {
    current: () => count,
    increment: () => count++,
    reset: () => (count = 0),
  };
};

console.log(typeof score);
console.log(score);
console.log(score().current());
score().increment();
console.log(score().current());
console.clear();

const score1 = (() => {
  let count = 0;
  return {
    current: () => count,
    increment: () => count++,
    reset: () => (count = 0),
  };
})();
console.log(typeof score1);
console.log(score1);
console.log(score1.current());
score1.increment();
console.log(score1.current());
score1.reset();
console.log(score1.current());
console.clear();

const increment = (() => {
  let counter = 0;
  console.log(counter);
  const number = (num) => console.log(`it is ${num} number`);
  return () => {
    counter++;
    number(counter);
  };
})();

console.log(increment);
increment();
increment();
increment();
increment();
increment();
