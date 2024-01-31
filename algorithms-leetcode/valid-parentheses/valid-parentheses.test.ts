import { isValid } from './valid-parentheses'

describe('valid parentheses', () => {
  it.each([
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["([)]", false],
    ["(", false],
    ["[])", false],
    ["[]]", false],
    ["[]}", false],
    ["))", false],
  ])('should check if string with parentheses is valid', (data, expected) => {
    const result = isValid(data)

    expect(result).toEqual(expected)
  })
})
