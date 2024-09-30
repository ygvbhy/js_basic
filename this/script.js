// method => oobject
const audio = {
  title: "a",
  play() {
    console.log("play this", this);
  },
};

audio.play();

audio.stop = function () {
  console.log("stop this", this);
};

audio.stop();
console.clear();

// Function => Window object
function palyAudio() {
  console.log(this);
}

palyAudio();
console.clear();

// Constructor Function => {}
function AudioFunction(title) {
  this.title = title;
  console.log(this);
}

const a = new AudioFunction("audio");
console.clear();

const radio = {
  title: "radio",
  categories: ["rock", "pop", "music"],
  displayCategories() {
    this.categories.forEach(
      // this 의 내부 함수 이므로 위에서 봤던 Function 에서의 this 는 window object 를 참조 하므로
      // this.title 값은 없음
      // 그래서 다음 값으로 사용하려는 object 를 같이 넘겨주면 this 가 해당 값을 참조 하여 데이터 활용 가능 또는 this 를 입력하면 상위 값을 참조함
      function (category) {
        console.log(`title: ${this.title}, category: ${category} `);
      },
      this
    );
  },
};

radio.displayCategories();
console.clear();

const radio1 = {
  title: "radio",
  categories: ["rock", "pop", "music"],
  displayCategories() {
    // Arrow Function 은 항상 상위 스코프의 this 를 참조함
    // Lexical this
    this.categories.forEach((category) => {
      console.log(`title: ${this.title}, category: ${category} `);
    });
  },
};
radio1.displayCategories();
