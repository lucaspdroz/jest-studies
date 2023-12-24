const { throwsInput } = require('../functions/throws')

test('Validates a throw at wrong input', () => {
    expect(() => {
        // The function validate if it's  a type of number, if not throws (witch is correct)
        throwsInput('invalidInput')
    }).toThrow()
})

test('Validates the function if the input not throws', () => {
    expect(() => {
        //  if you not create the throw expectation will work as intended, so it's a new test
        throwsInput(1)
    })
})