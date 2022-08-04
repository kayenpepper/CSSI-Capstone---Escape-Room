let button = document.querySelector("#enter");
const audioLoading = new Audio(
  "amongus.mp3"
)
const audioCountdown = new Audio(
  "countdown.mp3"
)
const audioEntering = new Audio(
  "entering.mp3"
)
// if(button){
//   button.addEventListener('click', function () {
//         location.href = "amongus.html";}, false);
// }

document.getElementById("enter").onclick = function () {
        audioEntering.muted = true;
        location.href = "amongus.html";
        };

let container = document.querySelector(".wrapper");
// Typing EFFECT
var _CONTENT = [ 
	"Systems operational...",
  "Systems starting...",
  "3",
  "2",
  "1",
  "Welcome Purple..."
];

// Current sentence being processed
var _PART = 0;
// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;
// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
if( _PART == 0)
  audioLoading.play();

function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;
  
  //audio background
  if (_PART == 1) {         //adding audio for typing effect
    audioLoading.play();}
  else if(_PART == 5) {
    audioLoading.play()
  }
  else if(_PART == 2){
    audioCountdown.play()}
  
	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then stop
		if(_PART == (_CONTENT.length - 1)){  
      _PART = _PART; // stop at the last sentence without resetting the sentence counting again
      container.classList.add("hidden");
      button.classList.remove("hidden");
      return;}
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 100);
	}
}


// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 99);

