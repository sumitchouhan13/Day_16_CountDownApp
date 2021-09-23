// function execute(i, cb) {
//   setTimeout(function () {
//     var res = i;
//     cb(res);
//   }, i * 1000);
// }

// for (var i = 1; i <= 10; i++) {
//   execute(i, function (resultData) {
//     var area = document.createElement("div");
//     var main = document.getElementById("main_area");
//     area.innerHTML = resultData;
//     main.appendChild(area);
//   });
// }

var success = false;
function execute(i, cb) {
  setTimeout(function () {
    var res = i;
    cb(res);
  }, i * 1100);
}

var i;
for (i = 1; i <= 10; i++) {
  execute(i, function (resultData) {
    var area = document.createElement("div");
    var main = document.getElementById("main_area");
    area.innerHTML = resultData;
    area.setAttribute("style", "font-weight:bold");
    main.appendChild(area);
    setTimeout(function () {
      main.removeChild(area);
    }, 1000);
  });
}

if (i - 1 === 10) {
  success = true;
  setTimeout(function () {
    var area = document.createElement("div");
    var main = document.getElementById("main_area");
    area.innerText = "HAPPY BIRTHDAY!!!";
    area.setAttribute(
      "style",
      "color :#092344; background-color:#027fc0 ; font-weight:bold"
    );
    main.appendChild(area);
  }, 12000);
}
