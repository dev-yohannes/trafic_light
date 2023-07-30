// lights
var stop = document.querySelector(".stop");
var ready = document.querySelector(".ready");
var go = document.querySelector(".go");

// buttons
var stop_btn = document.querySelector(".stop-btn");
var ready_btn = document.querySelector(".ready-btn");
var go_btn = document.querySelector(".go-btn");
var off_btn = document.querySelector(".off-btn");

// functions

// removing yellow
function removingYellow() {
  ready.classList.remove("yellow");
  ready.classList.add("ready");
}

// removing green
function removingGreen() {
  go.classList.remove("green");
  go.classList.add("go");
}

// removing red
function removingRed() {
  stop.classList.remove("red");
  stop.classList.add("stop");
}

// changing the lights

// red light
stop_btn.addEventListener("click", function () {
  stop.classList.remove("stop");
  stop.classList.add("red");

  // removing yellow light
  removingYellow();

  // removing green light
  removingGreen();
});

// yellow light
ready_btn.addEventListener("click", function () {
  ready.classList.remove("ready");
  ready.classList.add("yellow");

  // removing red light
  removingRed();

  // removing green light
  removingGreen();
});

// red light
go_btn.addEventListener("click", function () {
  go.classList.remove("go");
  go.classList.add("green");

  // removing red light
  removingRed();

  // removing yellow light
  removingYellow();
});

// off button
off_btn.addEventListener("click", function () {
  removingRed();

  removingYellow();

  removingGreen();
});
