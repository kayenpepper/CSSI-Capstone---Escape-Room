const next1 = document.querySelector("#next1");
let page = document.querySelector(".hero");
let playroblox = document.querySelector("#playroblox");
let card = document.querySelector(".card");
let payrobux = document.querySelector("#payrobux");
let buyrobux = document.querySelector("#buyrobux");
let amountofrobux = document.querySelector("#amountofrobux");
let options = document.querySelector(".options");
let robux80 = document.querySelector("#robux80");
let robux400 = document.querySelector("#robux400");
let robux800 = document.querySelector("#robux800");
let creditq = document.querySelector("#creditq");
let lookaround = document.querySelector("#lookaround");
let maincharacter = document.querySelector("#maincharacter");
let baconhair = document.querySelector("#baconhair");
let talktobacon = document.querySelector("#talktobacon");


let textbox1 = document.querySelector("#textbox1");
let textbox2 = document.querySelector("#textbox2");
let textbox3 = document.querySelector("#textbook3");
let textbox4 = document.querySelector("#textbox4");
let textbox5 = document.querySelector("#textbox5");
let textbox6 = document.querySelector("#textbox6");
let textbox7 = document.querySelector("#textbox7");
let textbox8 = document.querySelector("#textbox8");
let textbox9 = document.querySelector("#textbox9");
let textbox10 = document.querySelector("#textbox10");
let gotoshop = document.querySelector("#gotoshop");
let shop = document.querySelector(".shop");
let shoptitle = document.querySelector("#shoptitle");
let bloxiegun = document.querySelector("#bloxiegun");
let blocksword = document.querySelector("#blocksword");
let bloxycola = document.querySelector("#bloxycola");
let next2 = document.querySelector("#next2");
let defeatchoice = document.querySelector("#defeatchoice");
let servantchoice = document.querySelector("#servantchoice");
let wizardchoice = document.querySelector("#wizardchoice");
let youlost = document.querySelector("#youlost");
let adoptme = document.querySelector("#adoptme");
let brookhaven = document.querySelector("#brookhaven");
let mm2 = document.querySelector("#mm2");
let doors = document.querySelector("#doors");
let door3 = document.querySelector("#door3");
let next3 = document.querySelector("#next3");
let useweapon = document.querySelector("#useweapon");
let next4 = document.querySelector("#next4");

let robux = 0;
let chosenoption = 0;

// show next button
const myTimeout1 = setTimeout(showNext, 2000);

function showNext() {
  next1.classList.remove("hidden");
}

function myStopFunction() {
  clearTimeout(myTimeout1);
}

next1.addEventListener("click", (e) => {
  next1.classList.add("hidden");
  textbox1.classList.add("hidden");
  page.classList.remove("firstbg");
  playroblox.classList.remove("hidden");
});

playroblox.addEventListener("click", (e) => {
  playroblox.classList.add("hidden");
  textbox2.classList.remove("hidden");
  card.classList.remove("hidden");
  payrobux.classList.remove("hidden");
});

payrobux.addEventListener("click", (e) => {
  if (robux < 25) {
    alert("Not enough robux");
    buyrobux.classList.remove("hidden");
  } else {
    // after robux is bought
    robux = robux - 25;
    amountofrobux.innerHTML = "Robux: " + robux;
    setTimeout(() => {
    card.classList.add("hidden");
    textbox3.classList.add("hidden");
    payrobux.classList.add("hidden");
    amountofrobux.classList.add("hidden");
    }, 1500);
    page.classList.add("emptybg");
    maincharacter.classList.remove("hidden");
    maincharacter.classList.add("rblxcenter");
    textbox4.classList.remove("hidden");
    lookaround.classList.remove("hidden");
    }
  });

buyrobux.addEventListener("click", (e) => {
  textbox2.classList.add("hidden");
  card.classList.add("hidden");
  payrobux.classList.add("hidden");
  buyrobux.classList.add("hidden");
  amountofrobux.classList.remove("hidden");
  amountofrobux.innerHTML = "Robux: " + robux;
  options.classList.remove("hidden");
  alert("Next page will display virtual money, nothing will happen to your real money");
});

function creditinfo() {
  creditq.classList.remove("hidden");
}

robux80.addEventListener("click", (e) => {
  amountofrobux.classList.add("hidden");
  options.classList.add("hidden");
  robux += 80;
  creditinfo();
});

robux400.addEventListener("click", (e) => {
  amountofrobux.classList.add("hidden");
  options.classList.add("hidden");
  robux += 400;
  creditinfo();
});

robux800.addEventListener("click", (e) => {
  amountofrobux.classList.add("hidden");
  options.classList.add("hidden");
  robux += 800;
  creditinfo();
});

const keysPressed = [];
const secretCode = "2006";

window.addEventListener("keypress", (e) => {
  keysPressed.push(e.key);

  let attemptedSecret = keysPressed.slice(-secretCode.length);
  let attemptedSecretString = attemptedSecret.join("");
  if (attemptedSecretString === secretCode) {
    creditq.classList.add("hidden");
    amountofrobux.classList.remove("hidden");
    amountofrobux.innerHTML = "Robux: " + robux;
    card.classList.remove("hidden");
    textbox2.classList.remove("hidden");
    textbox2.innerHTML = "Yay, now I can play!";
  }
});

lookaround.addEventListener("click", (e) => {
  textbox4.classList.add("hidden");
  lookaround.classList.add("hidden");
  textbox5.classList.remove("hidden");
  page.classList.remove("emptybg");
  page.classList.add("baconsbg");
  maincharacter.classList.add("hidden");
  talktobacon.classList.remove("hidden");
});

talktobacon.addEventListener("click", (e) => {
  talktobacon.classList.add("hidden");
  textbox5.classList.add("hidden");
  page.classList.remove("baconsbg");
  page.classList.add("emptybg");
  maincharacter.classList.remove("hidden");
  maincharacter.classList.remove("rblxcenter");
  maincharacter.classList.add("mcpos");
  baconhair.classList.remove("hidden");
  baconhair.classList.add("bpos");
  baconhair.classList.add("fade-out");
  textbox6.classList.remove("hidden");
  setTimeout(() => {
  baconhair.classList.add("hidden");
  gotoshop.classList.remove("hidden");
  }, 5000);
});

gotoshop.addEventListener("click", (e) => {
gotoshop.classList.add("hidden");
page.classList.remove("emptybg");
textbox6.classList.add("hidden");
maincharacter.classList.add("hidden");
shop.classList.remove("hidden");
shoptitle.classList.remove("hidden");
amountofrobux.classList.remove("hidden");
amountofrobux.innerHTML = "Robux: " + robux;
});

function boughtitem() {
shoptitle.classList.add("hidden");
shop.classList.add("hidden");
amountofrobux.classList.add("hidden");
page.classList.add("castlebg");
textbox7.classList.remove("hidden");
  setTimeout(() => {
  next2.classList.remove("hidden");
  }, 1500);
}

bloxiegun.addEventListener("click", (e) => {
if (robux < 625) {
    alert("Not enough robux, cannot buy");
  } else {
  chosenoption = 1;
  robux = robux - 625;
  boughtitem();
}
});

blocksword.addEventListener("click", (e) => {
if (robux < 470) {
    alert("Not enough robux, cannot buy");
  } else {
  chosenoption = 2;
  robux = robux - 470;
  boughtitem();
}
});

bloxycola.addEventListener("click", (e) => {
if (robux < 10) {
    alert("Not enough robux, cannot buy");
  } else {
  chosenoption = 3;
  robux = robux - 10;
  boughtitem();
}
});

next2.addEventListener("click", (e) => {
  page.classList.remove("castlebg");
  textbox7.classList.add("hidden");
  next2.classList.add("hidden");
  page.classList.add("guardsbg");
  getintoc.classList.remove("hidden");
  textbox8.classList.remove("hidden"); 
});

function homepage() {
 youlost.classList.remove("hidden"); 
}

defeatchoice.addEventListener("click", (e) => {
  page.classList.remove("guardsbg");
  textbox8.classList.add("hidden"); 
  getintoc.classList.add("hidden");
  homepage();
});

wizardchoice.addEventListener("click", (e) => {
  page.classList.remove("guardsbg");
  textbox8.classList.add("hidden"); 
  getintoc.classList.add("hidden");
  homepage();
});

servantchoice.addEventListener("click", (e) => {
  page.classList.remove("guardsbg");
  textbox8.classList.add("hidden"); 
  getintoc.classList.add("hidden");
  page.classList.add("doorsbg");
  doors.classList.remove("hidden");
  doortitle.classList.remove("hidden");
});

door3.addEventListener("click", (e) => {
doors.classList.add("hidden");
page.classList.remove("doorsbg");
page.classList.add("lairbg");
textbox9.classList.remove("hidden"); 
maincharacter.classList.add("mcpos2");
maincharacter.classList.remove("hidden");
doortitle.classList.add("hidden");
next3.classList.remove("hidden");
});

next3.addEventListener("click", (e) => {
next3.classList.add("hidden");
password.classList.remove("hidden");
passwordtitle.classList.remove("hidden");
page.classList.remove("lairbg");
textbox9.classList.add("hidden");
maincharacter.classList.add("hidden");
});

brookhaven.addEventListener("click", (e) => {
  password.classList.add("hidden");
  passwordtitle.classList.add("hidden");
  homepage();
});

mm2.addEventListener("click", (e) => {
  password.classList.add("hidden");
  passwordtitle.classList.add("hidden");
  homepage();
});

adoptme.addEventListener("click", (e) => {
  password.classList.add("hidden");
  passwordtitle.classList.add("hidden");
  maincharacter.classList.add("mcpos");
  bossbacon.classList.remove("hidden");
  bossbacon.classList.remove("bpos");
  bossbacon.classList.add("bpos2");
  maincharacter.classList.remove("hidden");
  maincharacter.classList.remove("mcpos2");
  maincharacter.classList.remove("mcpos");
  maincharacter.classList.add("mcpos3");
  textbox10.classList.remove("hidden"); 
  useweapon.classList.remove("hidden"); 
  page.classList.add("fightbg");
});

useweapon.addEventListener("click", (e) => {
  useweapon.classList.add("hidden"); 
  if (chosenoption < 3) {
    textbox10.classList.add("hidden"); 
    maincharacter.classList.add("hidden");
    bossbacon.classList.add("hidden");
    page.classList.remove("fightbg");
    homepage();
  } else {
    textbox10.classList.add("hidden"); 
    bossbacon.classList.add("hidden");
    congratstitle.classList.remove("hidden");
    next4.classList.remove("hidden");
  }
});

next4.addEventListener("click", (e) => {
  next4.classList.add("hidden");
  congratstitle.classList.remove("hidden");
  page.classList.remove("fightbg");
  page.classList.add("trophybg");
  maincharacter.classList.add("hidden");
  playagain.classList.remove("hidden")
});

