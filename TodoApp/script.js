const list = document.getElementById("list");
const createBtn = document.getElementById("create");

let todos = [];

const createTodoElement = (item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("item");

  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.checked = item.complate;

  if (item.complate) {
    itemElement.classList.add("complete");
  }

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = item.text;
  inputElement.setAttribute("disabled", "");

  const actionsElement = document.createElement("div");
  actionsElement.classList.add("actions");

  const editbtnElement = document.createElement("button");
  editbtnElement.classList.add("material-icons");
  editbtnElement.innerText = "edit";

  const removeBtnElement = document.createElement("button");
  removeBtnElement.classList.add("material-icons", "remove-btn");
  removeBtnElement.innerText = "remove_circles";

  inputElement.addEventListener("input", () => {
    item.text = inputElement.value;
    saveToLocalStorege();
  });

  checkboxElement.addEventListener("change", () => {
    item.complate = checkboxElement.checked;
    item.complate
      ? itemElement.classList.add("complete")
      : itemElement.classList.remove("complete");

    saveToLocalStorege();
  });

  inputElement.addEventListener("blur", () => {
    inputElement.setAttribute("disabled", "");
    saveToLocalStorege();
  });

  editbtnElement.addEventListener("click", () => {
    inputElement.removeAttribute("disabled");
    inputElement.focus();
  });

  removeBtnElement.addEventListener("click", () => {
    todos = todos.filter((t) => t.id !== item.id);
    itemElement.remove();
    saveToLocalStorege();
  });

  itemElement.append(checkboxElement);
  itemElement.append(inputElement);

  actionsElement.append(editbtnElement);
  actionsElement.append(removeBtnElement);

  itemElement.append(actionsElement);

  return { itemElement, inputElement, editbtnElement, removeBtnElement };
};

function saveToLocalStorege() {
  const data = JSON.stringify(todos);
  localStorage.setItem("todos", data);
}

function loadFromLocalStorage() {
  const data = localStorage.getItem("todos");
  if (data) todos = JSON.parse(data);
}

createBtn.onclick = () => {
  // 새로운 아이템 객체 생성
  const item = { id: new Date().getTime(), text: "", complate: false };

  // 배열 처음에 새로운 아이템을 추가
  todos.unshift(item);

  // 요소 생성 하기
  const { itemElement, inputElement, editbtnElement, removeBtnElement } =
    createTodoElement(item);

  // 리스트 요소 안에 방금 생성한 요소 추가
  list.prepend(itemElement);

  inputElement.removeAttribute("disabled");
  inputElement.focus();
  saveToLocalStorege();
};

function displayTodos() {
  loadFromLocalStorage();

  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
    const { itemElement } = createTodoElement(item);

    list.append(itemElement);
  }
}

displayTodos();
