test('testing null', () => {
    const data = null
    expect(data).toBeFalsy()
})

test('testing 0', () => {
    const data = 0
    expect(data).toBeFalsy()
})

test('testing truthy', () => {
    const data = 1
    expect(data).toBeTruthy()
})
