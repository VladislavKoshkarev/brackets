module.exports = function check(str, bracketsConfig) {
  let stack = []
  for (let char = 0; char < str.length; char++) {
    console.log(stack)
    let currentChar = str[char]
    bracketsConfig.forEach(arr => {
      if ((currentChar === arr[1]) && stack.length === 0) stack.push(currentChar)
      else if ((currentChar === arr[1]) && stack[stack.length - 1] === arr[0]) {stack.pop()}
      else {
        if ((currentChar === arr[0])) stack.push(currentChar)
        else if (stack.length === 0) return false;
      }
      })
  }
  return (stack.length === 0)
}
