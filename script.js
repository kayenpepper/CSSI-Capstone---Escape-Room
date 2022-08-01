// querySelector for html elements
const harryPotterStart = document.querySelector("#harryPotterStart");
const robloxStart = document.querySelector("#robloxStart");
const spaceStart = document.querySelector("#spaceStart");
const startButton = document.querySelector("#start");

// start button switch
startButton.addEventListener("click", (e) => {
  console.log("start");
  location.replace(`${checkButton()}.html`);
});

function checkButton() {
  var getSelectedValue = document.querySelector(
    'input[name="gameroom"]:checked');
  console.log(getSelectedValue.value);
  return getSelectedValue.value;
}

// space js
const scanButton = document.querySelector("#scan");
const swipeButton = document.querySelector("#swipeCard");
const wiresButton = document.querySelector("#fixWires");
console.log(scanButton);
console.log()


// typing text first screen
// do later

// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 80;

// function typeWriter(text) {
//   console.log("typing...");
//   if (i < text.length) {
//     document.getElementById("firstText").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// typeWriter(txt);
// setTimeout(() => { console.log("World!"); }, 5000);
// txt= `systems rebooted.`;
// typeWriter();