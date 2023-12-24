const { fetchPromise, fetchObject, fetchArrayPromise } = require('../functions/promise')

test('Promise - async / await', async () => {
    const data = await fetchPromise()
    expect(data).toBe('peannut butter')
})

test('Promise - Data must be an object', () => {
    return expect(fetchObject()).resolves.toEqual({ one: 1, two: 2 })
})

// Not working
// test('Promise - will not succeed', () => {
//     return expect(fetchPromise()).rejects.toThrow('error');
// });

test('Promise - Data must be an Array', () => {
    return expect(fetchArrayPromise()).resolves.toEqual([1, 2, 3])
})

