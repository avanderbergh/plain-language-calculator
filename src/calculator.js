// Create a Calutor class with a calculate function that takes a sting as input paramer
// and retuns a number.

// For example:
// "one plus one" returns 2
// "one plus five" returns 6
// "four plus ten" returns 14
// "nine minus six" returns 3
// "eight minus two" returns 6
// "one minus ten" returns -9
// "five times four" returns 20
// "three times seven" returns 21

function convertToNumber(word) {
  const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
  };
  return numbers[word];
}
module.exports = class Calculator {
  static calculate(input) {
    const [left, operation, right] = input.split(' ');
    const num1 = convertToNumber(left);
    const num2 = convertToNumber(right);

    switch (operation) {
      case 'plus':
        return num1 + num2;
      case 'minus':
        return num1 - num2;
      case 'times':
        return num1 * num2;
      default:
        return 'unknown operation';
    }
  }
};
