# Boat movements

![Screenshot 2024-01-31 at 22.13.56.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fn7%2Fwf8yf4c52zz3tzpcf0qsnxjc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_B1FfvP%2FScreenshot%202024-01-31%20at%2022.13.56.png)

### Start code
```js
function canTravelTo(gameMatrix: boolean[][], fromRow: number, fromColumn: number, toRow: number, toColumn: number): boolean {
    // Write your code here
    return false;
}

const gameMatrix = [
    [false, false, true, true, false],
    [false, false, true, false, false],
    [false, false, true, true, false],
    [false, true, false, true, false],
    [false, false, true, false, false]
];

console.log(canTravelTo(gameMatrix, 2, 2, 0, 2));
console.log(canTravelTo(gameMatrix, 2, 2, 2, 1));
console.log(canTravelTo(gameMatrix, 2, 2, 2, 3));
console.log(canTravelTo(gameMatrix, 2, 2, 4, 2));
```