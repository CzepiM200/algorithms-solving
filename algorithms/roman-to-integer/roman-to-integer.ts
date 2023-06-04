export function romanToInt(s: string): number {
  const romanToDec = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    '-': 0
  }

  const romanCharacters = s.split('')
  romanCharacters.push('-')
  const sums = []
  let sum = 0
  for (let i = 0 ; i < romanCharacters.length - 1 ; i++) {
    if (romanToDec[(romanCharacters[i])] >= romanToDec[(romanCharacters[i + 1])]) {
      sum = sum + (romanToDec[(romanCharacters[i])])
    } else {
      sum = sum + (romanToDec[(romanCharacters[i + 1])] - romanToDec[(romanCharacters[i])]
      )
      i++
    }
  }

  return sum
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) //50
console.log(romanToInt('MCMXCIV')) // 1994
