var SettingButton = document.getElementById("setting__button");
var SettingBoard = document.getElementById("setting__board");
var XSetting = document.getElementById("X__DarkMode");
var DarkMode = document.getElementById("DarkMode");
var DarkModeShowBoard = document.getElementById("DarkMode__ShowBoard");
XSetting.addEventListener("click", HideSetting);
SettingButton.addEventListener("click", ShowSetting);
const centerX = -window.innerWidth / 2 - SettingBoard.offsetWidth / 2;
const centerY = window.innerHeight / 2 - SettingBoard.offsetHeight / 2;
console.log(SettingButton);
let Rotation = 0;
SettingBoard.style.visibility = "hidden";
SettingBoard.style.opacity = 0;
function ShowSetting() {
  Rotation += 1;
  DarkMode.style.display = "block";
  anime({
    targets: XSetting,
    width: [0, 67],
    height: [0, 67],
    easing: "easeInOutQuad",
    duration: 300,
  });
  anime({
    targets: this,
    duration: 1000,
    rotate: Rotation.toString() + "turn",
    easing: "easeInOutSine",
  });
  SettingBoard.style.visibility = "visible";
  DarkModeShowBoard.style.display = "flex";
  anime({
    targets: SettingBoard,
    duration: 1000,
    opacity: [0, 1],
    translateY: [150, 0],
    easing: "spring",
  });
  anime({
    targets: SettingBoard,
    duration: 1000,
    easing: "easeInOutSine",
    zIndex: [1, 2],
  });
}
function HideSetting() {
  anime({
    targets: this,
    width: [67, 0],
    height: [67, 0],
    easing: "easeInOutQuad",
    duration: 300,
  });
  anime({
    targets: SettingBoard,
    duration: 300,
    opacity: [1, 0],
    translateY: [0, 10],
    easing: "spring",
  });
  anime({
    targets: SettingBoard,
    zIndex: [2, -1],
    duration: 300,
    easing: "easeInOutSine",
  });
  SettingBoard.visibility = "hidden";
  DarkModeShowBoard.style.display = "none ";
}
