// shallow copy
const aArray = [1, 2, 3];

// shallow copy with spread operator
const bArray = [...aArray, 4];

console.log(aArray);
console.log(bArray);
console.log(aArray === bArray); // false

// shallow copy with Object.assign()
const cArray = Object.assign([], bArray);
console.log(cArray);
console.log(bArray === cArray); // false

// Nested Array and Objects
cArray.push([5, 6, 7]);
console.log(cArray);
const dArray = [...cArray, 10];
console.log(dArray);
dArray[4].push(8);
console.log(cArray); // [1, 2, 3, 4, [5, 6, 7, 8]]
console.log(dArray); // [1, 2, 3, 4, [5, 6, 7, 8], 10]
console.clear();

// 얕은 동결
const aObj = {
  a: "a",
  b: "b",
  c: { a: 1, b: 2 },
};
Object.freeze(aObj);
aObj.a = "c";
console.log(aObj);

aObj.c.a = 3;
console.log(aObj);
console.clear();

// deep copy with json.parse(json.stringify())
const newAObj = JSON.parse(JSON.stringify(aObj));
aObj.c.a = 4;
console.log(aObj);
console.log(newAObj);

// deep copy with newsted spread operator
const newBObj = { ...aObj, c: { ...aObj.c } };
console.log(newBObj);

const a = structuredClone(aObj);
console.log(a);
