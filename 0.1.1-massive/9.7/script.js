const goals = [8, 1, 1, 3, 2, -1, 5]
const my1 = [8, 1, 1, 3, 2, -1, 5]
let numberOfGoals =  0;
let number = 0;
function faleofwin(boolean) {
    return boolean = my1.includes(-1)
}


for (i = 0; i < goals.length; i++) {
    if(goals[i] === -1) {
        goals.splice(i, 1)
    }
    while(goals[i] > numberOfGoals) {
        numberOfGoals++
        goals['index'] = number
    }
}

console.log(`Самый результативный матч был под номером ${number+1}. В нем было забито ${numberOfGoals}`)

let minNumberOfoals = 0;
for(i = 0; i < goals.length; i++) {
    while(goals[i] < minNumberOfoals) {
        minNumberOfoals--
    }
}
console.log(`Самый результативный матч был под номером ${i+1}. В нем было забито ${minNumberOfoals}`)

let sum = 0
goals.reduce((acc, element) => {
    sum =  acc + element
    return acc + element
}, 0)
numberOfGoals = sum
console.log(`Общее количество голов за сезон равно ${numberOfGoals}`)
if (faleofwin() === true) {
    console.log('Были автоматические поражения: Да')
} else {
    console.log('Были автоматические поражения: нет')
}
console.log(`Среднее количество голов за матч ${Math.round(numberOfGoals / goals.length)}`)

const new2 =  my1.sort((a, b) => {
    return a - b
})
console.log(new2.join(', '))
