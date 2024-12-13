// COIN FLIP SIMULATOR

//count vars
let numHeads = 0;
let numTails = 0;

//html vars
let btnEl = document.getElementById("btn");
let headsSpanEl = document.getElementById("heads-out");
let tailsSpanEl = document.getElementById("tails-out");

btnEl.addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
  let output = document.getElementById("output");
  if (randNum < 0.5) {
    output.innerHTML = "<img src='img/heads.png'>";
    numHeads += 1;
    headsSpanEl.innerHTML = numHeads;
  } else {
    output.innerHTML = "<img src='img/tails.png'>";
    numTails += 1;
    tailsSpanEl.innerHTML = numTails;
  }
}
