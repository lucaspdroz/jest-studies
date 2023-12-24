function fetchPeannutButter(callback) {
    setTimeout(() => {
        callback('peannut butter')
    }, 1000)
}

function fetchData(callback) {
    setTimeout(() => {
        callback({ one: 1, two: 2 })
    }, 500)
}


module.exports = { fetchData, fetchPeannutButter };