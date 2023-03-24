const box = document.querySelector(".box");
const handle = document.querySelectorAll(".handle");
const display = document.querySelector(".display");
const displayText = document.querySelector(".display-text");

for (item of handle) {
  item.oninput = () => setValue();
}

handle[0].oninput = () => {
  resetOthers();
  box.style.borderRadius = handle[0].value + "px";
  displayText.value = `border-radius: ${handle[0].value}px;`;
};

function resetAll() {
  handle[0].value = 0;
  box.style.borderRadius = handle[0].value + "px";
}
function resetOthers() {
  handle[1].value = 0;
  handle[2].value = 0;
  handle[3].value = 0;
  handle[4].value = 0;
  box.style.borderRadius = handle[0].value + "px";
}

function setValue() {
  resetAll();
  displayText.value = `border-radius: ${handle[1].value}px ${handle[2].value}px ${handle[3].value}px ${handle[4].value}px;`;
  box.style.borderTopRightRadius = handle[1].value + "px";
  box.style.borderTopLeftRadius = handle[2].value + "px";
  box.style.borderBottomRightRadius = handle[3].value + "px";
  box.style.borderBottomLeftRadius = handle[4].value + "px";
}

displayText.addEventListener("click", () => {
  displayText.select();
  displayText.setSelectionRange(0, 999999);
  navigator.clipboard.writeText(displayText.value);
  window.getSelection().removeAllRanges();
  let temp = displayText.value;
  displayText.value = "COPIED!";
  setTimeout(() => {
    displayText.value = temp;
  }, 1000);
});
