import { selectedNumber} from "./script.js";
const SunPath =
  "M57 2V12M57 102V112M18.1 18.1L25.2 25.2M88.8 88.8L95.9 95.9M2 57H12M102 57H112M18.1 95.9L25.2 88.8M88.8 25.2L95.9 18.1M82 57C82 70.8071 70.8071 82 57 82C43.1929 82 32 70.8071 32 57C32 43.1929 43.1929 32 57 32C70.8071 32 82 43.1929 82 57Z";
const MoonPath =
  "M112 61.955C111.037 72.3794 107.124 82.314 100.721 90.5961C94.3175 98.8782 85.6877 105.165 75.8415 108.722C65.9952 112.278 55.3397 112.957 45.1217 110.679C34.9038 108.401 25.546 103.259 18.1434 95.8566C10.7408 88.454 5.59947 79.0962 3.32111 68.8783C1.04275 58.6603 1.72155 48.0048 5.27808 38.1585C8.83462 28.3123 15.1218 19.6825 23.4039 13.2791C31.686 6.87564 41.6206 2.96335 52.045 2C45.9418 10.2569 43.0049 20.4302 43.7685 30.6695C44.5321 40.9087 48.9454 50.5339 56.2058 57.7942C63.4661 65.0546 73.0913 69.4679 83.3305 70.2315C93.5698 70.9951 103.743 68.0582 112 61.955Z";

let togglee = false;
var Slider = document.getElementById("Mode__Slider");
var ShowBoard = document.getElementById("DarkMode");
let ModeToggle = false;
export var Background="rgb(199,199,199)";
var LightMode = document.getElementById("Light__Mode");
var DarkMode = document.getElementById("Dark__Mode");
DarkMode.addEventListener("click", Slide);
LightMode.addEventListener("click", Slide);
console.log(ShowBoard);
console.log(DarkMode);

function Slide() {
  changingTime();
  if (ModeToggle == false) {
    anime({
      targets: Slider,
      translateX: [{ value: 150, duration: 1000 }],
      easing: "easeOutExpo",
    });
    ModeToggle = true;
  } else {
    anime({
      targets: Slider,
      translateX: [{ value: 0, duration: 1000 }],
      easing: "easeOutExpo",
    });
    ModeToggle = false;
  }
}
function changingTime() {
  if (togglee == false) {
    // dang la sun
    Background="rgb(54,54,54)";
    resetBoard();
    anime({
      targets: "#sun",
      easing: "easeOutElastic",
      duration: 1000,

      d: [{ value: MoonPath }],
    });
    anime({
      targets: ".background",
      easing: "easeOutElastic",
      backgroundColor: "rgb(54,54,54)",
    });

    togglee = true;
  } else {
    Background="rgb(199,199,199)";
    resetBoard();
    anime({
      targets: "#sun",
      easing: "easeOutElastic",
      duration: 1000,
      d: [{ value: SunPath }],
    });
    anime({
      targets: ".background",
      easing: "easeOutElastic",
      backgroundColor: "rgb(199,199,199)",
    });
    togglee = false;
  }
}
function resetBoard(){
  var digits=document.querySelectorAll("#Selected .Number");
  console.log(digits);
  for(var x of digits)
  {
    if(Background=="rgb(54,54,54)")
    {
      x.style.color="white";
    }else
    {
      x.style.color="black";
    }
  }
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var ID__square = i.toString() + " " + j.toString();
      var Square = document.getElementById(ID__square);
      if(Background=="rgb(54,54,54)")
      {
        if (i % 3 == 2 && i < 8) {
          Square.style.borderBottom = "2px solid white";
        }
        if (j % 3 == 2 && j < 8) {
          Square.style.borderRight = "2px solid white";
        }
      }else
      {
        if (i % 3 == 2 && i < 8) {
          Square.style.borderBottom = "2px solid black";
        }
        if (j % 3 == 2 && j < 8) {
          Square.style.borderRight = "2px solid black";
        }
      }
      
      Square.style.backgroundColor=Background;
      if(Background=="rgb(54,54,54)")
      {
        Square.style.color="white";
      }else
      {
        Square.style.color="black";
      }
      if(Square==null)
        {
          continue;
        }
        var Notes = Square.querySelectorAll(".board__button__note");
          for (var x of Notes) {
            if(selectedNumber==null)
            {
            
              if(Background=="rgb(54,54,54)")
                {
                  x.style.color="white";
                
                }else
                {
                  x.style.color="black";
                }
                
              continue;
            }
            if (x.textContent == selectedNumber.textContent) {
              x.style.color="red";
            }else
            {
              if(Background=="rgb(54,54,54)")
              {
                x.style.color="white";
              
              }else
              {
                x.style.color="black";
              }
              
            }
          }
        
    }
  }
}
