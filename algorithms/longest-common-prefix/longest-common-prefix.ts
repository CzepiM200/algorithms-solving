export function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i]

    let j = 0
    while (j < prefix.length) {
      if (str[j] !== prefix[j]) {
        prefix = prefix.slice(0, j)
        break
      }
      j++
    }
  }

  return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))