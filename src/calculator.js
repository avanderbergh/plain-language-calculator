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

// the same exaples above should also work in German

function convertToNumber(word) {
  const numbers = {
    one: 1,
    einz: 1,
    ein: 1,
    two: 2,
    zwei: 2,
    three: 3,
    drei: 3,
    four: 4,
    vier: 4,
    five: 5,
    funf: 5,
    six: 6,
    sechs: 6,
    seven: 7,
    sieben: 7,
    eight: 8,
    acht: 8,
    nine: 9,
    neun: 9,
    ten: 10,
    zehn: 10,
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
      case 'mal':
        return num1 * num2;
      default:
        return 'unknown operation';
    }
  }
};
