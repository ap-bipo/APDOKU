import { SolBoard } from "./GenerateSUDOKU.js";
import { QuesBoard } from "./GenerateSUDOKU.js";
import { Background } from "./LightDarkMode.js";

export var selectedNumber = null;
var selectedSquare = null;

var board = document.getElementById("board");
var table = document.getElementById("Selected");
console.log(SolBoard);
console.log(QuesBoard);

function setgame() {
  for (var i = 1; i <= 9; i++) {
    var digits = document.createElement("div");
    digits.classList.add("Number");
    digits.innerText = i.toString();
    digits.addEventListener("click", SelectNumber);
    table.appendChild(digits);
  }
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var BoardButton = document.createElement("div");
      BoardButton.classList.add("box");
      BoardButton.classList.add("Row"+i.toString());
      BoardButton.classList.add("Col"+j.toString());
      BoardButton.id = i.toString() + " " + j.toString();
      BoardButton.addEventListener("click", SelectSquare);
      if (i % 3 == 2 && i < 8) {
        BoardButton.style.borderBottom = "2px solid black";
      }
      if (j % 3 == 2 && j < 8) {
        BoardButton.style.borderRight = "2px solid black";
      }
      BoardButton.style.fontSize = "2rem";
      if (QuesBoard[i][j] == "-") {
        BoardButton.innerText = "";
      } else {
        BoardButton.innerText = QuesBoard[i][j];
      }
      for (var z = 1; z <= 9; z++) {
        var BoardButtonNote = document.createElement("div");
        BoardButtonNote.classList.add("board__button__note");
        BoardButtonNote.classList.add("Hide__Note");
        BoardButtonNote.innerText = z;
        BoardButton.appendChild(BoardButtonNote);
      }

      board.appendChild(BoardButton);
    }
  }
}
function AnimateBoxOVer()
{
  var Row="#board .";
  var Col="#board .";
  var List=this.classList;
  for(var x of List)
  {
    if(x.length>3)
    {
      var sub=x.substring(0,3);
      if(sub=="Row")
      {
        Row+=x;
      }
      if(sub=="Col")
      {
        Col+=x;
      }
    }
  }
  anime({
    targets: Row,
    scale: 1.1,
    delay: anime.stagger(0.4),
    easing: 'easeInOutQuad',
  });
  anime({
    targets: Col,
    scale: 1.1,
    delay: anime.stagger(0.4),
    easing: 'easeInOutQuad',
  });
}
function AnimateBoxOut()
{
  var Row="#board .";
  var Col="#board .";
  var List=this.classList;
  for(var x of List)
  {
    if(x.length>3)
    {
      var sub=x.substring(0,3);
      if(sub=="Row")
      {
        Row+=x;
      }
      if(sub=="Col")
      {
        Col+=x;
      }
    }
  }
  anime({
    targets: Row,
    scale: 1,
    delay: anime.stagger(0.4),
    easing: 'easeInOutQuad',
  });
  anime({
    targets: Col,
    scale: 1,
    delay: anime.stagger(0.4),
    easing: 'easeInOutQuad',
  });
  
}
function SelectNumber() {
  if (selectedNumber == null) {
    // chua bat
    
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var ID__square = i.toString() + " " + j.toString();
        var Square = document.getElementById(ID__square);
        if (Square.classList.contains("Hint__Number") == true) {
          Square.classList.remove("Hint__Number");
        }
      }
    }
    selectedNumber = this;
    selectedNumber.classList.add("SelectedNumber");
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var ID__square = i.toString() + " " + j.toString();
        var Square = document.getElementById(ID__square);
        if (Square == null) {
          continue;
        }
        if (Square.innerText == this.innerText) {
          Square.classList.add("Hint__Number");
        }
      }
    }
    resetNoteBoard();
  } else {
    // tat cai hien tai di
    if (selectedNumber == this) {
      
      selectedNumber.classList.remove("SelectedNumber");
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
          var ID__square = i.toString() + " " + j.toString();
          var Square = document.getElementById(ID__square);
          if (Square.classList.contains("Hint__Number") == true) {
            Square.classList.remove("Hint__Number");
          }
        }
      }
      selectedNumber = null;
      resetNoteBoard();
      return;
    }
    
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var ID__square = i.toString() + " " + j.toString();
        var Square = document.getElementById(ID__square);
        if (Square.classList.contains("Hint__Number") == true) {
          Square.classList.remove("Hint__Number");
        }
      }
    }
    selectedNumber.classList.remove("SelectedNumber");
    selectedNumber = this;
    selectedNumber.classList.add("SelectedNumber");
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var ID__square = i.toString() + " " + j.toString();
        var Square = document.getElementById(ID__square);
        if (Square == null) {
          continue;
        }
        if (Square.innerText == this.innerText) {
          if (Square.textContent.length > 9) {
            Square.classList.add("Hint__Number");
          }
        }
      }
    }
  }
  resetNoteBoard();
}
function getNumber(Xau) {
  var s = "";
  for (var i = 0; i < Xau.length; i++) {
    if (Xau[i] >= "0" && Xau[i] <= "9") {
      s += Xau[i];
    }
  }
  return s;
}
function SelectSquare() {
  if (selectedNumber == null) {
    return;
  }
  if (this.textContent.length > 9) {
    return;
  }
  var IDsquare = this.id;
  var RowInd = IDsquare[0];
  var ColInd = IDsquare[2];
  selectedSquare = this;
  if (note.classList.contains("IsToggle") == true) {
    // note active
    var Notes = this.querySelectorAll(".board__button__note");
    for (var x of Notes) {
      if (x.textContent == selectedNumber.textContent) {
        if (x.classList.contains("Hide__Note")) {
          x.classList.add("Show__Note");
          x.classList.remove("Hide__Note");
        } else {
          x.classList.add("Hide__Note");
          x.classList.remove("Show__Note");
        }
      }
    }
  } else {
    if (selectedNumber.innerText != SolBoard[RowInd][ColInd]) {
      var Mistake = document.getElementById("error__box");
      var Score = parseInt(getNumber(Mistake.innerText), 10);
      Score++;
      Mistake.innerText = "Mistake: " + Score.toString();
      anime({
        targets: this,
        keyframes: [
          { backgroundColor: "rgba(192, 67, 36, 0.692)" },
          { backgroundColor: Background},
        ],
        easing: "easeOutSine",
        duration: 500,
      });
      return;
    } else {
      anime({
        targets: this,
        keyframes: [
          { backgroundColor: "rgba(36, 192, 36, 0.603)" },
          { backgroundColor: Background},
        ],
        easing: "easeOutSine",
        duration: 500,
      });
      this.innerText = selectedNumber.innerText;
      this.style.fontSize = "2rem";
    }
  }
}
function resetNoteBoard()
{
  for(var i=0;i<9;i++)
  {
  for(var j=0;j<9;j++)
  {

    var ID__square = i.toString() + " " + j.toString();
    var Square = document.getElementById(ID__square);
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
window.onload = (event) => {
  setgame();
};
