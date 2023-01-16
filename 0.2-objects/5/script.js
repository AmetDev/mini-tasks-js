const getTotalPriceOfShoppingBag = (shoppingBag) => {
    // const keys = Object.keys(shoppingBag)
    // console.log(keys)
    // const values = Object.values(shoppingBag)
    // console.log(values['0'].quantity * groceries["Chocolate"].price)
    if(groceries[""] == shoppingBag.product) {
        const new1 =groceries[""].price * shoppingBag.quantity;
        console.log(new1)
    }
}

const groceries = {
    "Orange Juice": {
        price: 1.5,
        discount: 10,
    },
    "Chocolate": {
        price: 2,
        discount: 0,
    }
}

const shoppingBag = [
    {product: 'Chocolate', quantity: 3},
    {product: 'Orange Juice', quantity: 23},
]
const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice',totalPrice)