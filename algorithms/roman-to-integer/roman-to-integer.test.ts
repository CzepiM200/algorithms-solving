import { romanToInt } from "./roman-to-integer"

describe('roman to integer', () => {
  it.each([
    ['III', 3],
    ['IV', 4],
    ['IX', 9],
    ['LVIII', 58],
    ['MCMXCIV', 1994],
  ])('should convert romanian number to integer number', (data, expected) => {
    const result = romanToInt(data)

    expect(result).toEqual(expected)
  })
})
