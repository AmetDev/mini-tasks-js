const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
const newMatrix = []
matrix.forEach((elements) => {
    elements.forEach((value) => {
        newMatrix.push(value)
    })
})
console.log(newMatrix)