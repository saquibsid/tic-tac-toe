import { Component, OnInit } from '@angular/core';
import { Config, DEFAULT_CONFIG } from './config';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  config: Config = DEFAULT_CONFIG;
  board: string[][] = [];
  currentPlayerIndex: number = 0;
  winner: string | null = null;
  movesCount = 0;

  ngOnInit(): void {
    this.resetGame();
  }

  resetGame(): void {
    this.board = Array(this.config.size).fill(null)
      .map(() => Array(this.config.size).fill(''));
    this.currentPlayerIndex = 0;
    this.winner = null;
    this.movesCount = 0;
  }

  play(row: number, col: number): void {
    if (this.board[row][col] || this.winner) return;

    const currentPlayer = this.config.players[this.currentPlayerIndex];
    this.board[row][col] = currentPlayer;
    this.movesCount++;

    if (this.checkWinner(row, col, currentPlayer)) {
      this.winner = currentPlayer;
    } else {
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.config.players.length;
    }
  }

  checkWinner(row: number, col: number, player: string): boolean {
    const directions = [
      [0, 1], [1, 0], [1, 1], [1, -1] // H, V, D1, D2
    ];

    for (let [dx, dy] of directions) {
      let count = 1;
      count += this.countInDirection(row, col, dx, dy, player);
      count += this.countInDirection(row, col, -dx, -dy, player);

      if (count >= this.config.winLength) return true;
    }
    return false;
  }

  countInDirection(x: number, y: number, dx: number, dy: number, player: string): number {
    let count = 0;
    for (let step = 1; step < this.config.winLength; step++) {
      const nx = x + dx * step;
      const ny = y + dy * step;
      if (nx < 0 || ny < 0 || nx >= this.config.size || ny >= this.config.size) break;
      if (this.board[nx][ny] !== player) break;
      count++;
    }
    return count;
  }
}

