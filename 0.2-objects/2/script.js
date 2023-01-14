const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
]


const giveTalonsInOrder = ((people, ordersArr) => {
    const reArr = people.reduce((previousValue, currentValue) => {
        previousValue[currentValue.id] = currentValue
        return previousValue
    }, {});
    return ordersArr.map((value) => reArr[value])
 })

 const result = giveTalonsInOrder(people, ordersArr)
 console.log(result)