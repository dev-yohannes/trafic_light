// lights
var stop = document.querySelector(".stop");
var ready = document.querySelector(".ready");
var go = document.querySelector(".go");

// buttons
var stop_btn = document.querySelector(".stop-btn");
var ready_btn = document.querySelector(".ready-btn");
var go_btn = document.querySelector(".go-btn");
var off_btn = document.querySelector(".off-btn");

// changing the lights

// red light
stop_btn.addEventListener("click", function () {
  stop.classList.remove("stop");
  stop.classList.add("red");

  // removing yellow light
  ready.classList.remove("yellow");
  ready.classList.add("ready");

  // removing green light
  go.classList.remove("green");
  go.classList.add("go");
});

// yellow light
ready_btn.addEventListener("click", function () {
  ready.classList.remove("ready");
  ready.classList.add("yellow");

  // removing red light
  stop.classList.remove("red");
  stop.classList.add("stop");

  // removing green light
  go.classList.remove("green");
  go.classList.add("go");
});

// red light
go_btn.addEventListener("click", function () {
  go.classList.remove("go");
  go.classList.add("green");

  // removing red light
  stop.classList.remove("red");
  stop.classList.add("stop");

  // removing yellow light
  ready.classList.remove("yellow");
  ready.classList.add("ready");
});

// off button
off_btn.addEventListener("click", function () {
  stop.classList.remove("red");
  stop.classList.add("stop");

  ready.classList.remove("yellow");
  ready.classList.add("ready");

  go.classList.remove("green");
  go.classList.add("go");
});
