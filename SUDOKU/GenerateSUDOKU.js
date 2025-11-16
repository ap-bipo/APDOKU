export let SolBoard = [];
export let QuesBoard = [];
let Limit = 24;
//------------- GENERATE SUDOKU BOARD --------------------------
function rd(l, r) {
  var sum = 0;
  for (var i = 0; i < 10; i++) {
    if (Math.floor(Math.random() * 2) == 1) {
      sum += Math.pow(2, i);
    }
  }
  return l + (sum % (r - l + 1));
}
function generateSudoku() {
  const grid = Array.from({ length: 9 }, () => Array(9).fill(0));
  fillGrid(grid);
  return grid;
}
function fillGrid(grid) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        const numbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (let num of numbers) {
          if (CheckSquare(grid, row, col, num) == true) {
            grid[row][col] = num;
            if (fillGrid(grid)) {
              return true;
            }
            grid[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}
function CheckSquare(grid, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num) {
      return false;
    }
  }
  for (let x = 0; x < 9; x++) {
    if (grid[x][col] === num) {
      return false;
    }
  }
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startCol; c < startCol + 3; c++) {
      if (grid[r][c] === num) {
        return false;
      }
    }
  }

  return true;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
SolBoard = generateSudoku();
for (var i = 0; i < 9; i++) {
  QuesBoard[i] = [];
  for (var j = 0; j < 9; j++) {
    QuesBoard[i][j] = SolBoard[i][j];
  }
}
console.table(SolBoard);
//-------- GENERATE THE BOAD----------------
function GenerateQuesBoard(grid) {
  let Pos = [];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      Pos.push(i.toString() + j.toString());
    }
  }
  Pos = shuffleArray(Pos);
  for (var i = 0; i < Limit; i++) {
    var RowInd = Pos[i][0] - "0";
    var ColInd = Pos[i][1] - "0";
    grid[RowInd][ColInd] = "-";
  }
  return grid;
}
QuesBoard = GenerateQuesBoard(QuesBoard);
