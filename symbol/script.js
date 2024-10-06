const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol("hi");

console.log(sym1 === sym2); // false
console.log(sym3.description); // hi

let carA = {
  id: 1,
  name: "morning",
  brand: "kia",
  price: 1000,
};

carA.id = 300;
console.log(carA); // 이렇게 하면 id 값이 바뀌기 때문에 문제가 됨
carA.id = 1;

const idSym = Symbol("id"); // 유니크한 값이라 중복 될 수 없음
carA[idSym] = 300;

console.log(carA);
console.log(Object.getOwnPropertyNames(carA)); // Symbol 은 나오지 않음
for (const key in carA) {
  // 여기서도 나오지 않음
  console.log(key);
}

console.log(Object.getOwnPropertySymbols(carA)); // 이게 심볼을 가져오는 것

const sysm1 = Symbol.for("sym1");
const sysm2 = Symbol.for("sym1");
// 기존 symbol 값은 다르게 들어가지만 for 을 활용해서 작성하면 description이 같으면 같은 값이다
console.log(sysm1 === sysm2);

console.log(Symbol.keyFor(sysm1)); // description 출력
console.log(Symbol.keyFor(sysm2)); // description 출력

console.clear();

const RED = Symbol("red");
const ORANGE = Symbol("orange");
const YELLOW = Symbol("yellow");
const BLUE = Symbol("blue");
const dog = "blue";

function getImportantLevel(color) {
  switch (color) {
    case RED:
      return "very important";
    case ORANGE:
      return "important";
    case YELLOW:
      return "little important";
    case BLUE:
      return "not important";
    default:
      console.log(`${color} not included`);
  }
}

console.log(getImportantLevel(BLUE));
console.log(getImportantLevel(dog)); // 둘이 값이 같음
console.clear();

const length = Symbol("length");
class Car {
  constructor() {
    this[length] = 0;
  }
  add(brand, name) {
    this[brand] = name;
    this[length]++;
  }
}

let myCars = new Car();
myCars.add("kia", "morning");
myCars.add("hyundai", "tucson");
myCars.add("genesis", "gv80");

for (const car in myCars) {
  console.log(car, myCars[car]);
}
