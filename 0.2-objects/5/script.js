const getTotalPriceOfShoppingBag = (shoppingBag) => {
    console.log(shoppingBag)
};
    
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