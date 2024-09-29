for (let elemnet of document.querySelectorAll("*")) {
  elemnet.addEventListener(
    "click",
    (e) => alert(`캡쳐링 : ${elemnet.tagName}`),
    true
  );

  elemnet.addEventListener("click", (e) =>
    alert(`버블링 : ${elemnet.tagName}`)
  );
}
