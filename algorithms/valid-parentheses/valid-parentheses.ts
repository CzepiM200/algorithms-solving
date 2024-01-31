export function isValid(s: string): boolean {
  const pairs = { ')': '(', '}': '{', ']': '[' }
  if (pairs[s[0]])
    return false

  const parenthesesStack = [s[0]]

  for (let i = 1 ; i < s.length ; i++) {
    if (!pairs[s[i]]) {
      parenthesesStack.push(s[i])
    } else if (pairs[s[i]]) {
      const element = parenthesesStack.pop()
      if (pairs[s[i]] !== element) {
        return false
      }
    }
  }

  return !parenthesesStack.length
}

// console.log(isValid("()")) // true
// console.log(isValid("()[]{}")) // true
// console.log(isValid("(]")) // false
// console.log(isValid("([)]")) // false
// console.log(isValid("(")) // false
// console.log(isValid("[])")) // false
// console.log(isValid("))")) // false
