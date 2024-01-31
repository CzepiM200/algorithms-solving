import { longestCommonPrefix } from './longest-common-prefix'

describe('longest common prefix', () => {
  it.each([
    [["flower", "flow", "flight"], "fl"],
    [["dog", "racecar", "car"], ""],
  ])('should find longest common prefix', (data, expected) => {
    const result = longestCommonPrefix(data)

    expect(result).toEqual(expected)
  })
})
