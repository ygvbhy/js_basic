console.log("안녕하세요!");
console.log(123);
console.log(false);
console.log(true);
let greeting = "안녕하세요.";
console.log(greeting);
console.log({ a: "a", b: "b" });

// 객체를 테이블 형식으로 출력
console.table({ a: "a", b: "b" });

// 에러 메시지
console.error("Error!");

// 경고 메시지
console.warn("Warn!");

// time 부터 timeEnd 까지의 걸린 시간 측정 - 뒤의 ID 값은 같아야 함
console.time("Hello");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd("Hello");

// 여태까지 출력한 콘솔 없앰
console.clear();
