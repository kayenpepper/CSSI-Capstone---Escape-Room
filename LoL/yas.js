//Yasuo Game ____________________________________________________________________________________
//" " = space bar in keypress
// loading prologue
let container = document.querySelector(".context");
var _CONTENT = [
  "[ Ionia ]",
  "[ A land of unspoiled beauty and natural magic. ]",
  "[ Surrounded by treacherous seas, Ionia is composed of a number of allied provinces scattered across a massive archipelago, known to many as the 'First Lands'. ]",
  "[ The place where material and spirit realms tends to be more permeable here, especially in the wild forests and mountains. ]",
  " [ The place where it's blessed with rich resources and a longstanding history. ]",
  "[ And it is also the home of many magical creatures with some of the most powerful races including the mages, demi-human, and the ninjas whose vowed to protect the village. ]"
];

// Current sentence being processed
var _PART = 0;
// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;
// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect

function Type() {
  // Get substring with 1 characater added
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

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
function Delete() {
  // Get substring with 1 characater deleted
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === '') {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then stop
    if (_PART == (_CONTENT.length - 1)) {
      _PART = _PART; // stop at the last sentence without resetting the sentence counting again
      container.classList.add("hidden");
      button.classList.remove("hidden");
      return;
    }
    else
      _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Type, 40);
    }, 100);
  }
}


// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 10);