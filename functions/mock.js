function fetchPromise() {
    return new Promise((resolves, rejects) => {
        setTimeout(() => resolves('peannut butter'), 1000)
    })
}

module.exports = fetchPromise