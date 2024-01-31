export function canTravelTo(gameMatrix: boolean[][], fromRow: number, fromColumn: number, toRow: number, toColumn: number): boolean {
  if (fromRow === toRow) {
    // Column move
    if (toColumn < 0 || toColumn >= gameMatrix[toRow].length || Math.abs(toColumn - fromColumn) !== 1) {
      // Bad column move
      return false
    }

    return gameMatrix[toRow][toColumn]
  }

  // Row move
  if (toRow < 0 || toRow >= gameMatrix.length || Math.abs(toRow - fromRow) !== 2) {
    // Bad row move
    return false
  }

  const rowMovementValue = toRow - fromRow

  return gameMatrix[toRow][toColumn] && gameMatrix[fromRow + rowMovementValue / 2][toColumn]
}

// const gameMatrix = [
//   [false, false, true, true, false],
//   [false, false, true, false, false],
//   [false, false, true, true, false],
//   [false, true, false, true, false],
//   [false, false, true, false, false]
// ];
//
// console.log(canTravelTo(gameMatrix, 2, 2, 0, 2));
// console.log(canTravelTo(gameMatrix, 2, 2, 2, 1));
// console.log(canTravelTo(gameMatrix, 2, 2, 2, 3));
// console.log(canTravelTo(gameMatrix, 2, 2, 4, 2));