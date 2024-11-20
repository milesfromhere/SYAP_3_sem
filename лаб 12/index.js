class Sudoku {
  constructor() {
    this.sudoku = Array.from({ length: 9 }, () => Array(9).fill(0));
  }

  isValid(row, col, num) {
    for (let x = 0; x < 9; x++) {
      if (this.sudoku[row][x] === num || this.sudoku[x][col] === num) return false;
    }
    const startRow = 3 * Math.floor(row / 3);
    const startCol = 3 * Math.floor(col / 3);
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (this.sudoku[startRow + r][startCol + c] === num) return false;
      }
    }
    return true;
  }

  generateFullBoard() {
    const fill = (row, col) => {
      if (row === 9) return true;
      const nextRow = col === 8 ? row + 1 : row;
      const nextCol = (col + 1) % 9;
      if (this.sudoku[row][col] !== 0) return fill(nextRow, nextCol); 
      const numbers = this.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      for (let num of numbers) {
        if (this.isValid(row, col, num)) {
          this.sudoku[row][col] = num;
          if (fill(nextRow, nextCol)) return true;
          this.sudoku[row][col] = 0;
        }
      }
      return false;
    };
    fill(0, 0); 
  }
  

  removeRandomCells(count) {
    let removed = 0;
    while (removed < count) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (this.sudoku[row][col] !== 0) {
        this.sudoku[row][col] = 0;
        removed++;
      }
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  checkBoard() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const num = this.sudoku[row][col];
        if (num !== 0) {
          this.sudoku[row][col] = 0;
          if (!this.isValid(row, col, num)) {
            this.sudoku[row][col] = num;
            return { valid: false, row, col };
          }
          this.sudoku[row][col] = num;
        }
      }
    }
    return { valid: true };
  }

  printBoard() {
    this.sudoku.forEach(row => console.log(row.join(" ")));
  }
}

const sudoku = new Sudoku();

sudoku.generateFullBoard();
sudoku.removeRandomCells(40);

console.log("Поле до заполнения (частично заполненное):");
sudoku.printBoard();

console.log("Поле после полного заполнения:");
sudoku.generateFullBoard();
sudoku.printBoard();

const check = sudoku.checkBoard();
if (check.valid) {
  console.log("Поле заполнено корректно!");
} else {
  console.log(`Ошибка в строке ${check.row + 1}, столбце ${check.col + 1}`);
}
