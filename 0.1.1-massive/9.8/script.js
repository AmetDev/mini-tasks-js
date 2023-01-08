const math1 = [">", "<", "=", "+", "-", "*", "/"]
let currArr = [];
function getMathResult(expression) {
    expression.forEach((value, index, array) => {
        if (typeof value === 'string' || typeof value === 'number') {
            currArr.push(value)
        }
    })
}
getMathResult([300, '-', '200'])
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
        return value;
    }
})
const newTrueArr1 = newTrueArr.concat(newCurrArr)
let index0;
let index1;
let index2;
newTrueArr1.forEach((value, index) => {
   if(index === 0) {
    value = index0;
    
   }
    // if(index == 0) {
    //     index0 = value[0]
    // }
    // if (index == 1) {
    //    index1 = value[1]
    // }
    // if(index == index2) {
    //     index2 = value[2]
    // }
})
console.log(index0, index1, index2)


switch(sign) {
    case '-':
        
        
        break;
}
