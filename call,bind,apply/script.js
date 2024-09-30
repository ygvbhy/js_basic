// Call
const fullName = function (city, country) {
  console.log(this.firstName + " " + this.lastName, city, country);
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

// funName 안에서 person1 이라는 객체를 가리키게 됨
// 그 뒤에 인수를 넣어주면 매게변수로 받아와서 사용 가능
fullName.call(person1, "Oslo", "Norway");
console.clear();

// Apply

const fullName1 = function (city, country) {
  console.log(this.firstName + " " + this.lastName, city, country);
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

// apply() 메서드는 call() 메서드와 다르게 배열로 넣어주면 된다.
fullName1.apply(person2, ["Oslo", "Norway"]);
console.clear();

// Bind

function func(language) {
  if (language === "ko") {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: "안녕",
  engGreeting: "Hello",
};

// 직접 실행하는게 아니라 바인딩만 시키는 것임
// 할당 해주는것 그래서 다시 실행 해야 함.
func.bind(greeting, "ko")();
func.bind(greeting)("en");
