// space js
const clue1 = document.querySelector(".clue1");
const clue2 = document.querySelector(".clue2");
const clue3 = document.querySelector(".clue3");
const scanButton = document.querySelector("#scanButton");
const swipeButton = document.querySelector("#swipeButton");
const wiresButton = document.querySelector("#wiresButton");
const progressBar = document.getElementsByClassName("scanning")[0];
const scanButtonLabel = document.querySelector("#scanID");
const ID =  document.getElementById("ID-image");
let body = document.querySelector(".amongusBckg");
const wires = document.querySelector(".wires");
const wiresContainer = document.querySelector(".wire-container");
const audioEnteringShip = new Audio(
  "entering.mp3"
)
const audioScanning = new Audio(
  "scanningSound.mp3"
)

const swipeTop = document.querySelector('.top');
const swipeBottom = document.querySelector('.bottom');
const swipeContainer = document.querySelector('.wrapper1')
const swipeID = document.querySelector('.photo')

// play audio when entering the game
audioEnteringShip.play();

// Scanning ID
scanButton.addEventListener("click", (e) => {
  console.log("scan");
  progressBar.classList.remove("hidden");
  setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  progressBar.style.setProperty('--width', width + .05);
    //sound effect
  if (width == 93.00 )
    audioTask.play();
  if (width < 93.00)
    audioScanning.play();
    // remove and add button
  if (width === 100.00 )
    scanButtonLabel.classList.remove("hidden");
  if (width === 100.00 )
    progressBar.classList.add("hidden");
  if (width === 100.00 ){
    scanButton.disabled = true;
    clue1.classList.toggle("hidden")
  }
}, 5);
});





swipeButton.addEventListener("click", (e) => {
  console.log("swipe");
  swipeTop.classList.toggle("hidden");
  swipeBottom.classList.toggle("hidden");
  swipeContainer.classList.toggle("hidden");
  swipeID.classList.toggle("hidden");
});



wiresButton.addEventListener("click", (e) => {
  console.log("wires");
  // show wires
  wiresContainer.classList.toggle("hidden");
});


// wires box
console.clear();
let completedLights = [0, 0, 0, 0];

// drag wire 1
new Draggable('.drag-1', {
  onDrag: function () { updateLine('.line-1', this.x + 120, this.y + 185); },
  onRelease: function () {
    if (this.x !== 670 || this.y !== 188 ) {
      reset('.drag-1', '.line-1', 70, 185);
      toggleLight(2, false);
    } else if (this.x === 670 && this.y === 188) toggleLight(2, true)
  },
  liveSnap: {points: [{x: 670, y: 188}],radius: 20}
});
// drag wire 2
new Draggable('.drag-2', {
  onDrag: function () { updateLine('.line-2', this.x + 120, this.y + 375); },
  onRelease: function () {
    if (this.x !== 670 || this.y !== -188 ) {
      reset('.drag-2', '.line-2', 60, 375);
      toggleLight(1, false);
    } else if (this.x === 670 && this.y === -188) toggleLight(1, true)
  },
  liveSnap: {points: [{x: 670, y: -188}],radius: 20}
});
// drag wire 3
new Draggable('.drag-3', {
  onDrag: function () { updateLine('.line-3', this.x + 120, this.y + 560); },
  onRelease: function () {
    if (this.x !== 670 || this.y !== 0 ) {
      reset('.drag-3', '.line-3', 60, 560);
      toggleLight(3, false);
    } else if (this.x === 670 && this.y === 0) toggleLight(3, true)
  },
  liveSnap: {points: [{x: 670, y: 0}],radius: 20}
});
// drag wire 4
new Draggable('.drag-4', {
  onDrag: function () { updateLine('.line-4', this.x + 120, this.y + 745); },
  onRelease: function () {
    if (this.x !== 670 || this.y !== 0 ) {
      reset('.drag-4', '.line-4', 60, 745);
      toggleLight(4, false);
    } else if (this.x === 670 && this.y === 0) toggleLight(4, true)
  },
  liveSnap: {points: [{x: 670, y: 0}],radius: 20}
});

// connect wire end to end
function updateLine(selector, x, y) {
  gsap.set(selector, {
    attr: {
      x2: x,
      y2: y
    }
  });
}

// turn on light when a wire is connected
function toggleLight(selector, visibility) {
  if (visibility) {
    completedLights[selector - 1] = 1;
    // if all wires connected
    if (completedLights[0] === 1 && completedLights[1] === 1 && completedLights[2] === 1 && completedLights[3] === 1) {
      audioTask.play();
      window.setTimeout(() => {
        reset('.drag-1', '.line-1', 70, 185);
        reset('.drag-2', '.line-2', 60, 375);
        reset('.drag-3', '.line-3', 60, 560);
        reset('.drag-4', '.line-4', 60, 745);
        toggleLight(2, false);
        toggleLight(1, false);
        toggleLight(3, false);
        toggleLight(4, false);
      }, 2000);
      wiresContainer.classList.add("hidden");
      wiresButton.disabled = true;
      clue3.classList.toggle("hidden");
    }
    // not all the lights are on
  } else {
    completedLights[selector - 1] = 0;
  }
  
  gsap.to(`.light-${selector}`, {
    opacity: visibility ? 1 : 0,
    duration: 0.3
  });
}

// reset wire position if drag to wrong place
// Quoc don't delete!!! 
function reset(drag, line, x, y) {
  gsap.to(drag, {
    duration: 0.3,
    ease: 'power2.out',
    x: 0,
    y: 0
  });
  gsap.to(line, {
    duration: 0.3,
    ease: 'power2.out',
    attr: {
      x2: x,
      y2: y
    }
  });
}

// audio for wire completion
const audioTask = new Audio('https://assets.codepen.io/127738/Among_Us-Task-complete.mp3');

// swipe cards
const card = document.getElementById('card');
const reader = document.getElementById('reader');
let active = false;
let initialX;
let timeStart, timeEnd;
const soundAccepted = new Audio('https://thomaspark.co/projects/among-us-card-swipe/audio/CardAccepted.mp3');
const soundDenied = new Audio('https://thomaspark.co/projects/among-us-card-swipe/audio/CardDenied.mp3');

document.addEventListener('mousedown', dragStart);
document.addEventListener('mouseup', dragEnd);
document.addEventListener('mousemove', drag);
document.addEventListener('touchstart', dragStart);
document.addEventListener('touchend', dragEnd);
document.addEventListener('touchmove', drag);

function dragStart(e) {
  if (e.target !== card) return;

  if (e.type === 'touchstart') {
    initialX = e.touches[0].clientX;
  } else {
    initialX = e.clientX;
  }

  timeStart = performance.now();
  card.classList.remove('slide');
  active = true;
}

function dragEnd(e) {
  if (!active) return;

  e.preventDefault();
  let x;
  let status;

  if (e.type === 'touchend') {
    x = e.touches[0].clientX - initialX;
  } else {
    x = e.clientX - initialX;
  }

  if (x < reader.offsetWidth) {
    status = 'invalid';
  }

  timeEnd = performance.now();
  card.classList.add('slide');
  active = false;

  setTranslate(0);
  setStatus(status);
}

function drag(e) {
  if (!active) return;

  e.preventDefault();
  let x;

  if (e.type === 'touchmove') {
    x = e.touches[0].clientX - initialX;
  } else {
    x = e.clientX - initialX;
  }

  setTranslate(x);
}

function setTranslate(x) {
  if (x < 0) {
    x = 0;
  } else if (x > reader.offsetWidth) {
    x = reader.offsetWidth;
  }

  x -= (card.offsetWidth / 2);

  card.style.transform = 'translateX(' + x + 'px)';
}

function setStatus(status) {
  if (typeof status === 'undefined') {
    let duration = timeEnd - timeStart;

    if (duration > 700) {
      status = 'slow';
    } else if (duration < 400) {
      status = 'fast';
    } else {
      status = 'valid';
    }
  }

  reader.dataset.status = status;
  playAudio(status);
}

function playAudio(status) {
  soundDenied.pause();
  soundAccepted.pause();
  soundDenied.currentTime = 0;
  soundAccepted.currentTime = 0;

  if (status === 'valid') {
  soundAccepted.play();
  swipeButton.disabled = true;
  clue2.classList.toggle("hidden")
  swipeTop.classList.toggle("hidden");
  swipeBottom.classList.toggle("hidden");
  swipeContainer.classList.toggle("hidden");
  swipeID.classList.toggle("hidden");
  } else {
    soundDenied.play();
  }
}
