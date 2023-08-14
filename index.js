// Subhan Allah
const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const sIncrement = document.getElementById("s-increment");
const sDecrement = document.getElementById("s-decrement");

// Alhamdulillah
const AlhamdulillahDisplay = document.getElementById("AlhamdulillahDisplay");
const aIncrement = document.getElementById("a-increment");
const aDecrement = document.getElementById("a-decrement");

// Allahu Akbar
const AllahuakbarDisplay = document.getElementById("AllahuakbarDisplay");
const akIncrement = document.getElementById("ak-increment");
const akDecrement = document.getElementById("ak-decrement");

//reset button
const buttonReset = document.getElementById("btn-reset");
//=========
let sInitialValue = 0;
let aInitialValue = 0;
let akInitialValue = 0;

sIncrement.addEventListener("click", function () {
  sInitialValue += 1;
  subhanAllahDisplay.innerText = sInitialValue;
});
sIncrement.addEventListener("click", function () {
  aInitialValue += 1;
  AlhamdulillahDisplay.innerText = aInitialValue;
});
sIncrement.addEventListener("click", function () {
  akInitialValue += 1;
  AllahuakbarDisplay.innerText = akInitialValue;
});
