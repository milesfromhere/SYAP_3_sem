document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("gameContainer");
    const newGameButton = document.getElementById("newGameButton");
    const checkButton = document.getElementById("checkButton");
    const message = document.getElementById("message");
  
    let sudokuGrid = [];
  
    const generateGrid = () => {
      const grid = Array.from({ length: 9 }, () => Array(9).fill(0));
      fillDiagonalBlocks(grid);
      fillRemaining(grid, 0, 3);
      removeCells(grid, 40);
      return grid;
    };
  
    const fillDiagonalBlocks = (grid) => {
      for (let i = 0; i < 9; i += 3) fillBlock(grid, i, i);
    };
  
    const fillBlock = (grid, row, col) => {
      let num;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          do {
            num = Math.floor(Math.random() * 9) + 1;
          } while (!isSafe(grid, row + i, col + j, num));
          grid[row + i][col + j] = num;
        }
      }
    };
  
    const isSafe = (grid, row, col, num) => {
      for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num || grid[x][col] === num) return false;
      }
      const startRow = row - (row % 3);
      const startCol = col - (col % 3);
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[startRow + i][startCol + j] === num) return false;
        }
      }
      return true;
    };
  
    const fillRemaining = (grid, row, col) => {
      if (row === 9) return true;
      if (col === 9) return fillRemaining(grid, row + 1, 0);
      if (grid[row][col] !== 0) return fillRemaining(grid, row, col + 1);
  
      for (let num = 1; num <= 9; num++) {
        if (isSafe(grid, row, col, num)) {
          grid[row][col] = num;
          if (fillRemaining(grid, row, col + 1)) return true;
          grid[row][col] = 0;
        }
      }
      return false;
    };
  
    const removeCells = (grid, count) => {
      while (count > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (grid[row][col] !== 0) {
          grid[row][col] = 0;
          count--;
        }
      }
    };
  
    const renderGrid = () => {
      gameContainer.innerHTML = "";
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          if (sudokuGrid[row][col] !== 0) {
            cell.textContent = sudokuGrid[row][col];
            cell.classList.add("fixed");
          } else {
            cell.contentEditable = "true";
          }
          cell.dataset.row = row;
          cell.dataset.col = col;
          gameContainer.appendChild(cell);
        }
      }
    };
  
    const checkGrid = () => {
      const cells = document.querySelectorAll(".cell[contenteditable='true']");
      let valid = true;
      cells.forEach((cell) => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        const value = parseInt(cell.textContent);
        if (!value || !isSafe(sudokuGrid, row, col, value)) {
          valid = false;
          cell.style.backgroundColor = "#ffcccc";
        } else {
          cell.style.backgroundColor = "#f0f9f9";
        }
      });
  
      message.textContent = valid
        ? "Поздравляем! Вы решили Судоку!"
        : "Есть ошибки. Проверьте еще раз!";
      message.style.color = valid ? "#2a9d8f" : "#e76f51";
    };
  
    newGameButton.addEventListener("click", () => {
      sudokuGrid = generateGrid();
      renderGrid();
      message.textContent = "";
    });
  
    checkButton.addEventListener("click", checkGrid);
  
    sudokuGrid = generateGrid();
    renderGrid();
  });
  