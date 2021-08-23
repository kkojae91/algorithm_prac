// moves배열 순회 columns Index
// 2차원 배열(board) 완전 탐색
// 0이 아닌 경우 pop()
// 0일 경우 무시

class Game {
  constructor(board, moves, length) {
    this.board = board;
    this.moves = moves;
    this.length = length;
    this.stack = [];
    this.answer = 0;
  }

  start() {
    for (const move of this.moves) {
      this.bruteForce(move - 1);
    }
    return this.answer;
  }

  bruteForce(move) {
    for (let row = 0; row < this.length; row++) {
      for (let col = 0; col < this.length; col++) {
        if (move === col && this.board[row][col] !== 0) {
          const pickNum = this.board[row][col];
          this.board[row][col] = 0;
          this.checkStack(pickNum);
          return;
        }
      }
    }
  }

  checkStack(pickNum) {
    if (this.stack.length === 0) {
      this.stack.push(pickNum);
    } else {
      const prev = this.stack[this.stack.length - 1];
      if (prev === pickNum) {
        this.answer += 2;
        this.stack.pop();
      } else {
        this.stack.push(pickNum);
      }
    }
  }
}

function solution(board, moves) {
  const length = board.length;
  const game = new Game(board, moves, length);
  const result = game.start();
  return result;
}

function main() {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];
  const moves = [1, 5, 3, 5, 1, 2, 1, 4];
  console.log(solution(board, moves));
}

main();
