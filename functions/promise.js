function fetchPromise() {
    return new Promise((resolves, reject) => {
        setTimeout(() => resolves('peannut butter'), 1000)
    })
}

function fetchObject() {
    return new Promise((resolves, reject) => {
        setTimeout(() => resolves({ one: 1, two: 2 }), 1000)
    })
}

function fetchArrayPromise() {
    return new Promise((resolves, reject) => {
        setTimeout(() => resolves([1, 2, 3]), 1000)
    })
}




module.exports = { fetchPromise, fetchObject, fetchArrayPromise };