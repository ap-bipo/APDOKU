var note = document.getElementById("note");
note.addEventListener("click", ShowNote);
let NoteToggle = false;
function ShowNote() {
  if (NoteToggle == false) {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var idBox = i.toString() + " " + j.toString();
        var box = document.getElementById(idBox);
        if (box.textContent.length == 9) {
          var Notes = box.querySelectorAll(".board__button__note");
          for (var x of Notes) {
            if (x.classList.contains("HideNote") == false) {
              x.classList.add("Show__Note");
            }
          }
        }
      }
    }
    note.classList.add("IsToggle");
    NoteToggle = true;
  } else if (NoteToggle == true) {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var idBox = i.toString() + " " + j.toString();
        var box = document.getElementById(idBox);
        if (box.textContent.length == 9) {
          var Notes = box.querySelectorAll(".board__button__note");
          for (var x of Notes) {
            x.classList.remove("Show__Note");
          }
        }
      }
    }
    note.classList.remove("IsToggle");
    NoteToggle = false;
  }
}
