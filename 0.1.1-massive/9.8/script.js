
const math1 = [">", "<", "=", "+", "-", "*", "/"]
let currArr = [];
function getMathResult(expression) {
    expression.forEach((value, index, array) => {
        if (typeof value === 'string' || typeof value === 'number') {
            currArr.push(value)
        }
    })
}
getMathResult(['300', 'javascript', 'python', 'Elvis', '+', 200]);

let sign;
let number;
let intNumber;
let newCurrArr = [];
const newTrueArr = currArr.filter((value, index, array) => {
    if(typeof value === 'string' && value / 1) {
        number = value / 1
        newCurrArr.push(number)
    }
    if(typeof value === 'number' && value / 1) {
        return value;
    }
    let el1;
     math1.forEach((el) => {
        if (value === el) {
            el1 = el;
        }
    });
    if(el1 === value) {
        sign = el1
    }
})
const newTrueArr1 = newTrueArr.concat(newCurrArr)

switch(sign) {
    case '-':
        const result1 = newTrueArr1[0] - newTrueArr1[1];
        console.log(result1)
    break;
    case '+':
        const result2 = newTrueArr1[0] + newTrueArr1[1];
        console.log(result2)
    break;
    case '>':
        const result3 = newTrueArr1[0] > newTrueArr1[1];
        console.log(result3)
    break;
    case '<':
        const result4 = newTrueArr1[0] < newTrueArr1[1];
        console.log(result4)
    break;
    case '=':
        const result5 = newTrueArr1[0] === newTrueArr1[1];
        console.log(result5)
    break;
    case '*':
        const result6 = newTrueArr1[0] * newTrueArr1[1];
        console.log(result6)
    break;
    case '/':
        const result7 = newTrueArr1[0] / newTrueArr1[1];
        console.log(result7)
    break;
    default:
        console.log("Ошибка, сэр!");
}

