// Subhan Allah
const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const sIncrement = document.getElementById("s-increment");
const sDecrement = document.getElementById("s-decrement");
sIncrement.addEventListener("click", function () {
  if (sInitialValue == 33) {
    return alert("Alhamdulillah! You're done with your Tasbih.");
  }
  sInitialValue += 1;
  subhanAllahDisplay.innerText = sInitialValue;
});
sDecrement.addEventListener("click", function () {
  if (sInitialValue == 0) {
    return alert("You can not go further.");
  }
  sInitialValue -= 1;
  subhanAllahDisplay.innerText = sInitialValue;
});

// Alhamdulillah
const AlhamdulillahDisplay = document.getElementById("AlhamdulillahDisplay");
const aIncrement = document.getElementById("a-increment");
const aDecrement = document.getElementById("a-decrement");
aIncrement.addEventListener("click", function () {
  if (aInitialValue == 33) {
    return alert("Alhamdulillah! You're done with your Tasbih.");
  }
  aInitialValue += 1;
  AlhamdulillahDisplay.innerText = aInitialValue;
});
aDecrement.addEventListener("click", function () {
  if (aInitialValue == 0) {
    return alert("You can not go further.");
  }
  aInitialValue -= 1;
  AlhamdulillahDisplay.innerText = aInitialValue;
});

// Allahu Akbar
const AllahuakbarDisplay = document.getElementById("AllahuakbarDisplay");
const akIncrement = document.getElementById("ak-increment");
const akDecrement = document.getElementById("ak-decrement");
akIncrement.addEventListener("click", function () {
  if (akInitialValue == 34) {
    return alert("Alhamdulillah! You're done with your Tasbih.");
  }
  akInitialValue += 1;
  AllahuakbarDisplay.innerText = akInitialValue;
});
akDecrement.addEventListener("click", function () {
  if (akInitialValue == 0) {
    return alert("You can not go further.");
  }
  akInitialValue -= 1;
  AllahuakbarDisplay.innerText = akInitialValue;
});

//reset button
const buttonReset = document.getElementById("btn-reset");
buttonReset.addEventListener("click", function () {
  subhanAllahDisplay.innerText = 0;
  AlhamdulillahDisplay.innerText = 0;
  AllahuakbarDisplay.innerText = 0;
  sInitialValue = 0;
  aInitialValue = 0;
  akInitialValue = 0;
});
//=========
let sInitialValue = 0;
let aInitialValue = 0;
let akInitialValue = 0;
