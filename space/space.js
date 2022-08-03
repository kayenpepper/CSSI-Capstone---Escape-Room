// space js
const scanButton = document.querySelector("#scanButton");
const swipeButton = document.querySelector("#swipeButton");
const wiresButton = document.querySelector("#wiresButton");
console.log(scanButton);
console.log(swipeButton);
console.log(wiresButton);

scanButton.addEventListener("click", (e) => {
  console.log("scan");
});

swipeButton.addEventListener("click", (e) => {
  console.log("swipe");
});

wiresButton.addEventListener("click", (e) => {
  console.log("wires");
});
