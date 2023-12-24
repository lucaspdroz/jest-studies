const { sum, minus, multiply, modulus, divides } = require('../functions/sum')

test('one plus two must be three', () => {
    expect(sum(1, 2)).toBe(3)
})

test('one minus two must be negative one', () => {
    expect(minus(1, 2)).toBe(-1)
})

test('one times two must be two', () => {
    expect(multiply(1, 2)).toBe(2)
})

test('one times two must be two', () => {
    expect(divides(1, 2)).toBe(0.5)
})

test('one times two must be two', () => {
    expect(modulus(1, 2)).toBe(1)
})