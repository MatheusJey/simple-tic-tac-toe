import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ai-app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TicTacToeComponent {
  board: string[][] = [];
  currentPlayer  = '';

  constructor() {
    this.newGame();
  }

  newGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
  }

  makeMove(row: number, col: number) {
    if (this.board[row][col] === '') {
      this.board[row][col] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWin() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] !== '' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
        return this.board[i][0];
      }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
      if (this.board[0][j] !== '' && this.board[0][j] === this.board[1][j] && this.board[1][j] === this.board[2][j]) {
        return this.board[0][j];
      }
    }

    // Check diagonals
    if (this.board[0][0] !== '' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      return this.board[0][0];
    }
    if (this.board[0][2] !== '' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      return this.board[0][2];
    }

    // No winner
    return null;
  }

  gameOver() {
    return this.checkWin() !== null || this.board.every(row => row.every(cell => cell !== ''));
  }

  winner() {
    return this.checkWin();
  }
}
