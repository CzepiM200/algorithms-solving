import { twoSum } from "./two-sum"

describe('two sum', () => {
  it.each([
    [{
      array: [1, 2, 3, 4, 5, 6, 7, 11, 15], target: 9
    }, [1, 6]],
    [{
      array: [3, 2, 4], target: 6
    }, [1, 2]],
    [{
      array: [-3, 4, 3, 90], target: 0
    }, [0, 2]],
  ])('should find indexes of two numbers witch add up to target value', (data, expected) => {
    const result = twoSum(data.array, data.target)

    expect(result).toEqual(expected)
  })
})
