function game() {
  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let isOver = false;
  let winner = null;

  const startNewRound = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    isOver = false;
    winner = null;
  };

  const playTurn = (index) => {
    if (isOver || board[index] !== "") {
      return false; // Invalid move
    }
    board[index] = currentPlayer;
    checkWinner();
    checkTie();
    if (!isOver) switchPlayer();
    return true; // Valid move
  };

  let getBoard = () => {
    return board;
  };

  let switchPlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  };

  const checkWinner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const condition of winningConditions) {
      const [a, b, c] = condition.map((index) => board[index]);
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        winner = a;
        isOver = true;
        break;
      }
    }
  };

  const checkTie = () => {
    if (!board.includes("") && !winner) {
      isOver = true;
      winner = "Tie";
    }
  };

  const getGameStatus = () => {
    return { isOver, winner };
  };

  const getCurrentPlayer = () => {
    return currentPlayer;
  };

  return {
    playTurn,
    getBoard,
    startNewRound,
    getGameStatus,
    getCurrentPlayer,
  };
}

function displayController() {
  const gameInstance = game();
  const cells = document.querySelectorAll(".cell");
  const grid = document.querySelector(".grid");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalMessage = document.querySelector(".modal h2");
  const restartButton = document.querySelector(".btn-primary");

  const updateTurnIndicator = () => {
    const currentPlayer = gameInstance.getCurrentPlayer();
    grid.classList.remove("turn-x", "turn-o");

    if (gameInstance.getGameStatus().isOver) return;
    grid.classList.add(currentPlayer === "X" ? "turn-x" : "turn-o");
  };

  const updateScreen = () => {
    const board = gameInstance.getBoard();
    cells.forEach((cell, index) => {
      cell.innerHTML = `<span>${board[index]}</span>`;
    });
  };

  const handleCellClick = (e) => {
    const index = parseInt(e.target.dataset.index, 10);
    if (isNaN(index)) return;

    if (gameInstance.playTurn(index)) {
      updateScreen();
      updateTurnIndicator();
      const { isOver, winner } = gameInstance.getGameStatus();
      if (isOver) {
        showModal(winner);
      }
    }
  };

  const showModal = (winner) => {
    const miniBoard = grid.cloneNode(true);
    miniBoard.classList.remove("grid", "turn-x", "turn-o");
    miniBoard.classList.add("modal-board");

    modalMessage.parentNode.insertBefore(miniBoard, modalMessage);

    modalMessage.textContent =
      winner === "Tie" ? "It's a draw!" : `Player ${winner} wins!`;
    modalOverlay.classList.add("active");
  };

  const restartGame = () => {
    const miniBoard = document.querySelector(".modal-board");
    if (miniBoard) miniBoard.remove();

    gameInstance.startNewRound();
    updateScreen();
    updateTurnIndicator();
    modalOverlay.classList.remove("active");
  };

  cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
  restartButton.addEventListener("click", restartGame);

  updateTurnIndicator();
  updateScreen();
}

displayController();
