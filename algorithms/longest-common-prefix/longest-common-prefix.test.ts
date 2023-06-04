import { longestCommonPrefix } from './longest-common-prefix'

describe('roman to integer', () => {
  it.each([
    [["flower", "flow", "flight"], "fl"],
    [["dog", "racecar", "car"], ""],
  ])('should convert romanian number to integer number', (data, expected) => {
    const result = longestCommonPrefix(data)

    expect(result).toEqual(expected)
  })
})
