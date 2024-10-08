function fetchData() {
  return new Promise((resolve, reject) => {
    // 비동기 요청
    const success = false;
    success ? resolve("성공") : reject("실패");
  });
}

fetchData()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("http://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error))
  .finally(() => console.log("작업 끝!"));

async function makeRequest() {
  try {
    const res1 = await fetch("http://jsonplaceholder.typicode.com/todos/1");
    const json = await res1.json();
    console.log(json);
  } catch (error) {
  } finally {
    console.log("모든 작업 끝");
  }
}
makeRequest();
