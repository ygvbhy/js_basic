const sum = (x, y) => x + y;
console.log(sum(10, 20));

const curriedSum = (x) => (y) => x + y;
console.log(curriedSum(10)(20));

const makeFood = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

const hamburger = makeFood("Bread")("Ham")("Tomato"); // 3개의 인수를 다 넣어야지 함수가 실행 됨
console.log(hamburger);

const cleanerMakeFood = (ingredient1) => (ingredient2) => (ingredient3) =>
  `${ingredient1} ${ingredient2} ${ingredient3}`;

const sandwich = makeFood("Bread")("Ham")("Tomato"); // 3개의 인수를 다 넣어야지 함수가 실행 됨
console.log(sandwich);

function log(date, important, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}]: [${important}] ${message}`);
}
// console.log(log(new Date(), "DEBUG", "some bug"));

//currying function

function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

const curriedLog = curry(log);
// curriedLog(new Date())("DEBUG")("some bug");

function c(func) {
  return function cu(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return cu.apply(this, args.concat(args2));
      };
    }
  };
}

const cc = c(log);

console.log(cc(new Date())("DEBUG")("some bug"));
