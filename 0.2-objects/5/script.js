const getTotalPriceOfShoppingBag = (shoppingBag) => {
    // const keys = Object.keys(shoppingBag)
    // console.log(keys)
    // const values = Object.values(shoppingBag)
    // console.log(values['0'].quantity * groceries["Chocolate"].price)
    //console.log(Object.keys(groceries))
    Object.values(shoppingBag).map((result) => {
        console.log('result',result.product)
        // for (key in groceries) {
        //     const keys = groceries[key];
        //     console.log(keys)
        // }

    });
    const result2 = Object.values(groceries);
    const result3 = Object.values(result2)
    console.log(result3)


   

    // if(Object.keys(groceries) === shoppingBag.product) {
    //     const new1 =Object.keys(groceries).price * shoppingBag.quantity;
    //     console.log(new1)
    // }
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
//console.log('totalPrice',totalPrice)