function makeIterator(numbers) {
  let nexIndex = 0;

  return {
    next: function () {
      return nexIndex < numbers.length
        ? { value: numbers[nexIndex++], done: false }
        : { value: undefined, done: true };
    },
  };
}

// 숫자 배열 생성
const numbersArray = [1, 2, 3];
const numbersIterator = makeIterator(numbersArray);

// [Symbol.iterator] 를 이용하면 반복 가능한 값을 반복기로 생성 가능
const num = numbersArray[Symbol.iterator]();

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

const numbersIterable = [1, 2, 3];
const numbersNotIterable = { a: 1, b: 2 };
console.log(typeof numbersIterable);
console.log(typeof numbersNotIterable);
for (const n of numbersIterable) {
  console.log(n);
}
console.clear();

const set = new Set([1, 2, 3, 4]);
console.log(set);

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

console.log(set[Symbol.iterator]().next());
console.log(map[Symbol.iterator]().next());
console.clear();

function* sayNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const number = sayNumbers(); // 호출해서 반환된 값이 제네레이터 값임
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());

function* generatorFunction() {
  yield 1;
}

const genertator = generatorFunction();
console.log(genertator === genertator[Symbol.iterator]()); // true
console.clear();

function* createIds() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.return(10));
console.clear();

function* generatorFunction1() {
  yield* [1, 2, 3];
}

const g = generatorFunction1();
for (const number of g) {
  console.log(number);
}
