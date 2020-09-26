const calc = require('./calculator');

describe('Test the calculator in English', () => {
  it("should return 2 with input 'one plus one'", () => {
    expect(calc.calculate('one plus one')).toEqual(2);
  });

  it("should return 6 with input 'one plus five'", () => {
    expect(calc.calculate('one plus five')).toEqual(6);
  });

  it("should return 14 with input 'four plus ten'", () => {
    expect(calc.calculate('four plus ten')).toEqual(14);
  });

  it("should return 3 with input 'nine minus six'", () => {
    expect(calc.calculate('nine minus six')).toEqual(3);
  });

  it("should return 6 with input 'eight minus two'", () => {
    expect(calc.calculate('eight minus two')).toEqual(6);
  });

  it("should return -9 with input 'one minus ten'", () => {
    expect(calc.calculate('one minus ten')).toEqual(-9);
  });

  it("should return 20 with input 'five times four'", () => {
    expect(calc.calculate('five times four')).toEqual(20);
  });

  it("should return 21 with input 'three times seven'", () => {
    expect(calc.calculate('three times seven')).toEqual(21);
  });

  it('should return unknown operation when an unknown operation is passed in', () => {
    expect(calc.calculate('one foo one')).toBe('unknown operation');
  });
});

describe('Test the calculator in German', () => {
  it('should return 2 with input "einz plus einz"', () => {
    expect(calc.calculate('einz plus einz')).toEqual(2);
  });

  it("should return 6 with input 'einz plus funf'", () => {
    expect(calc.calculate('einz plus funf')).toEqual(6);
  });

  it("should return 14 with input 'vier pluz zehn'", () => {
    expect(calc.calculate('vier plus zehn')).toEqual(14);
  });

  it("should return 3 with input 'neun minus sechs'", () => {
    expect(calc.calculate('neun minus sechs')).toEqual(3);
  });

  it("should return 6 with input 'acht minus zwei'", () => {
    expect(calc.calculate('acht minus zwei')).toEqual(6);
  });

  it("should return -9 with input 'einz minus zehn'", () => {
    expect(calc.calculate('einz minus zehn')).toEqual(-9);
  });

  it("should return 20 with input 'funf mal vier'", () => {
    expect(calc.calculate('funf mal vier')).toEqual(20);
  });

  it("should return 21 with input 'drei mal sieben'", () => {
    expect(calc.calculate('drei mal sieben')).toEqual(21);
  });
});
