const { fetchData, fetchPeannutButter } = require('../functions/async')

test('Async test - returns peannut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peannut butter')
            done()
        } catch (error) {
            done(error)
        }
    }

    fetchPeannutButter(callback)
})

test('Async fetch - returns object', done => {
    function callback(data) {
        try {
            expect(data).toEqual({ one: 1, two: 2 })
            done()
        } catch (error) {
            done(error)
        }
    }

    fetchData(callback)
})