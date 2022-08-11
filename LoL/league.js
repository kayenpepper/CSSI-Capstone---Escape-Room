const progressBar = document.getElementsByClassName("scanning")[0];
const counters = document.querySelectorAll('.counter')
const speed = 50 //lower = faster the percentages go
const audioWelcome = new Audio(
  "leaguesound.mp3"
)

let percentage = 0
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    progressBar.style.setProperty('--width', width + .1);
    // remove and add button
}, 7);



//counter percentage
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target"); //target is string , added + sign to change it to number
    const count = +counter.innerText; // the string that output as count, initially 0

    const increase = target / speed;  // increasement speed

    if (count<target) {
      counter.innerText = count + increase;
      setTimeout(updateCount, 130); // how fast loading percentages go
    }
    else {
      count.innerText = target;
    }
    if (count == target) {
      document.location.href = 'league.html';
      audioWelcome.muted();
    }
  }

  updateCount();
});

