import { canTravelTo } from './boat-movements'

describe('can travel to', () => {
  it('for game matrix should return array correct value', () => {
    const gameMatrix = [
      [false, false, true, true, false],
      [false, false, true, false, false],
      [false, false, true, true, false],
      [false, true, false, true, false],
      [false, false, true, false, false]
    ];

    expect(canTravelTo(gameMatrix, 2, 2, 2, 1)).toEqual(false)
    expect(canTravelTo(gameMatrix, 2, 2, 2, 3)).toEqual(true)
    expect(canTravelTo(gameMatrix, 2, 2, 0, 2)).toEqual(true)
    expect(canTravelTo(gameMatrix, 2, 2, 4, 2)).toEqual(false)
  })
})
