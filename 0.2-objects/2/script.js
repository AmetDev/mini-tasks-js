const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
]

giveTalonsInOrder(people, ordersArr)
function giveTalonsInOrder(patients, orders) {
    patients.map((value, index) => {
       if (value.id === orders) {
        console.log('true')
       }
    })
}
