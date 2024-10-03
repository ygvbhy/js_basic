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
console.clear();

// subClass
class Hu {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hello. my name is ${this.name}`;
  }
}

class Client extends Hu {
  constructor(name, email, phone, address) {
    super(name, email);
    this.phone = phone;
    this.address = address;
  }
}

const man = new Client("man", "email@email.com", "01-0101-1010", "서울");
console.log(man.introduce());
console.log(man);
