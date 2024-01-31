export function twoSum(nums: number[], target: number): number[] {
  const sourceArray = [...nums]
  nums.sort((a, b) => a - b)
  let result: Array<number> = []

  for (let i = 0 ; i < nums.length ; i++) {
    for (let j = nums.length - 1 ; j !== i ; j--) {
      if (nums[i] + nums[j] < target) {
        break;
      }
      if (nums[i] + nums[j] === target) {

        const firstIndex = sourceArray.findIndex(item => item === nums[i])
        result = [firstIndex, sourceArray.findIndex((item, idx) => item === nums[j] && idx !== firstIndex)]
        break;
      }
    }
    if (result.length !== 0) {
      break;
    }
  }

  return result
}

// console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 11, 15], 9))
// console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([-3, 4, 3, 90], 0))
