class Person {
  constructor(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
  }

  introduce() {
    return `Hello. my name is ${this.name}`;
  }

  static multipleNumbers(x, y) {
    return x * y;
  }
}

const john = new Person("John", "email@email.com", "10-3-98");

console.log(john);
