"use strict";

var os = require('os');

function init(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = 'x';
    }
  }
}

function createBoard(rows) {
  var board = new Array();
  for (let i = 0; i < rows; i++) {
    board[i] = new Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = 'x';
    }
  }
  return board;
}

function solvePuzzle(rows) {
  var board = createBoard(rows);
  for (let col = 0; col < board.length; col++ ){
      placeQueen(board, 0, col, 0)
      console.log("\n\n")
      init(board);
  }
}

function placeQueen(board, row, col, count) {
  board[row][col] = 'Q';
  count++;

  //success case
  if (count == board.length) {
    printBoard(board);
    return true;
  }

  if (row+1 >= board.length ){
    return false;
  }

  let placed = false
  for (let c = 0; c < board.length; c++) {
    const check = isValidPosition(board, row + 1, c);
    if (check == true) {
      placeQueen(board, row + 1, c, count);
      placed = true;
    }
  }
  if (placed == false) {
    count--;
    board[row][col] = 'x';
  }
  return false;
}


function isValidPosition(board, row, col) {

  //check horizontal row for Queen
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == 'Q') {
      return false;
    }
  }

  //check vertical column for queen
  for (let i = 0; i < board[col].length; i++) {
    if (board[i][col] == 'Q') {
      return false;
    }
  }

  //check diagonally right upwards
  for (let i = row, j = col; i >= 0 && j < board.length; i-- , j++) {
    if (board[i][j] == 'Q') {
      return false;
    }
  }

  //check diagonally left upwards
  for (let i = row, j = col; i >= 0 && j >= 0; i-- , j--) {
    if (board[i][j] == 'Q') {
      return false;
    }
  }
  return true;
}



function printBoard(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      process.stdout.write('[' + board[i][j].toString() + ']');
    }
    process.stdout.write(os.EOL);
  }
  console.log("\n")
}

solvePuzzle(4);