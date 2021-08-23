// 내가 푼 방법은 programmers folder에 있음.

// 조금 더 단순하게 생각....
function solution(board, moves) {
  let answer = 0;
  const stack = [];
  moves.forEach((move) => {
    for (let row = 0; row < board.length; row++) {
      if (board[row][move - 1] !== 0) {
        const pickNum = board[row][move - 1];
        board[row][move - 1] = 0;
        if (pickNum === stack[stack.length - 1]) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(pickNum);
        }
        break;
      }
    }
  });

  return answer;
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
