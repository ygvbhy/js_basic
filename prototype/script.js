let user = {
  name: "John",
  age: 45,
};

console.log(user);
console.log(user.name);
console.log(user.hasOwnProperty("email"));

function Person(name, email, birthday) {
  this.name = name;
  this.email = email;
  this.birthday = new Date(birthday);
}

Person.prototype.calcualateAge = function () {
  const diff = Date.new() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const john = new Person("john", "email@email.com", "7-10-91");
const han = new Person("han", "email@email.com", "2-11-91");

console.log(john);
console.log(han);

function Human(name, email, birthday) {
  const person = Object.create(personsPrototype);
  person.name = name;
  person.email = email;
  person.birthday = new Date(birthday);
  return person;
}

const personsPrototype = function () {
  const diff = Date.new() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const john1 = new Human("john", "email@email.com", "7-10-91");
const han1 = new Human("han", "email@email.com", "2-11-91");

console.log(han1);
