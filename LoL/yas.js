//Yasuo Game ____________________________________________________________________________________
//" " = space bar in keypress
// loading prologue
let yas = document.querySelector(".yas-pic");
let yone = document.querySelector(".yone-pic");
let container = document.querySelector(".context");
let yasContainer = document.querySelector(".yas-context");
let answer_yes = document.querySelector(".button")
let buttonYes = document.querySelector("#yes")
// answer_yes.classList.remove("hidden")


var _CONTENT = [
  "[ A land of unspoiled beauty and natural magic. ]",
  "[ Surrounded by treacherous seas, Ionia is composed of several allied provinces scattered across a massive archipelago, known to many as the 'First Lands.' ]",
  "[ The place where material and spirit realms tend to be more permeable here, especially in the wild forests and mountains. ]",
  " [ The place blessed with rich resources and longstanding history. ]",
  "[ And it is also the home of many magical creatures with some of the most powerful races. These are mages, demi-human, and ninjas who vowed to protect the village. ]",
  "[ In this village, there are two siblings' names on the tongues of the villagers. ]",
  "[ Yone: respectable, calm, and intelligent. ]",
  "[ And the younger brother Yasuo, hated by his village and treated like the scrouge upon Ionia. ]",
  "[ However, Yone and Yasuo always have each other's back. And soon, they both attended a famous martial art school in the village. ]",
  "[ With all the displeasure from other students, Yasuo successfully proved his talent as a swordsman and the first one to impressed Elder Souma, the last master of the legendary wind technique. ]",
  "[ Yasuo's master saw the potential inside Yasuo, yet understands that restraining that boy is no different from controlling a whirlwind. ]",
  "[To put aside Yasuo's arrogance, Yone gifted him a maple seed, the school's highest lesson in humility.]",
  "[ You became Souma's bodyguard] ",
  "",
  "both blah blah blah",
  "testing number 203u9 nhgn"
]

// Current sentence being processed
var _PART = 0;
// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;
// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect

buttonYes.addEventListener("click", (e) => {
  // _PART++;
  _PART = 13
  
  console.log("hi");
  console.log(_PART);
  Type();
  Delete();
  // _INTERVAL_VAL = setInterval(Type, 10);
  answer_yes.classList.add("hidden");
})

function Type() {
  // Get substring with 1 characater added
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // if (_PART == 8) {
  //   yas.classList.remove("hidden");
  // }
  // if (_PART == 7) {
  //   yone.classList.remove("hidden");
  // }

  // if (_PART == 10) {
  //   yone.classList.add("hidden")
  // }

  // if (_PART == 12) {
  //     answer_yes.classList.remove("hidden")
  //   }

  // if (_PART == 12) {
  //   answer_yes.classList.remove("hidden")
  // }

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    // Hide the cursor

    clearInterval(_INTERVAL_VAL);
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Delete, 0);
    }, 2000);
  }
}

// Implements deleting effect
async function Delete() {
  // Get substring with 1 characater deleted
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;
  console.log(_PART);

  // If sentence has been deleted then start to display the next sentence
  if (text === '') {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then stop
    if (_PART === 5) {
      await sleep(3.5);// stop at the last sentence without resetting the sentence counting again
    }
    if (_PART == 11) {
      _PART = _PART;
      answer_yes.classList.remove("hidden");
      return;
    }
    if (_PART == (_CONTENT.length - 1)) {
      _PART = _PART
      return;
    }
    else
      _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Type, 40);
    }, 90);
  }
}


// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 10);

async function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

//_____________________________________________________________________________________
// yasuo line
// var _CONTENT2 = [
//   "[ testing1 ]",
//   "[ testing2 ]",
//   "[ testing3 ]",
//   ]

// // Current sentence being processed
// var _PART2 = 0;
// // Character number of the current sentence being processed 
// var _PART_INDEX2 = 0;

// // Holds the handle returned from setInterval
// var _INTERVAL_VAL2;
// // Element that holds the text
// var _ELEMENT2 = document.querySelector("#yas-text");

// // Implements typing effect

// function Type() {
//   // Get substring with 1 characater added
//   var text2 = _CONTENT2[_PART2].substring(0, _PART_INDEX2 + 1);
//   _ELEMENT2.innerHTML = text2;
//   _PART_INDEX2++;

//   // If full sentence has been displayed then start to delete the sentence after some time
//   if (text2 === _CONTENT2[_PART2]) {
//     // Hide the cursor

//     clearInterval(_INTERVAL_VAL2);
//     setTimeout(function() {
//       _INTERVAL_VAL2 = setInterval(Delete, 0);
//     }, 2000);
//   }
// }

// // Implements deleting effect
// function Delete() {
//   // Get substring with 1 characater deleted
//   var text2 = _CONTENT2[_PART2].substring(0, _PART_INDEX2 - 1);
//   _ELEMENT2.innerHTML = text2;
//   _PART_INDEX2--;

//   // If sentence has been deleted then start to display the next sentence
//   if (text2 === '') {
//     clearInterval(_INTERVAL_VAL2);

//     // If current sentence was last then stop
//     if (_PART2 == (_CONTENT2.length - 1)) {
//       _PART2 = _PART2;
//       return;
//     }
//     else
//       _PART2++;

//     _PART_INDEX2 = 0;

//     // Start to display the next sentence after some time
//     setTimeout(function() {
//       _INTERVAL_VAL2 = setInterval(Type, 40);
//     }, 100);
//   }
// }


// // Start the typing effect on load
// _INTERVAL_VAL2 = setInterval(Type, 10);