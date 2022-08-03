// // querySelector for html elements
// const startButton = document.querySelector("#start");

// // start button switch
// if(startButton){
//   startButton.addEventListener('click', checkButton, false);
// }

function checkButton() {
  var getSelectedValue = document.querySelector(
    'input[name="gameroom"]:checked');
  console.log(getSelectedValue.value);
  location.replace(`${getSelectedValue.value}.html`);
}



document.getElementById("start").onclick = function () {
        location.href = "space/space.html";}
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