const shoppingCart = [
    { name: 'Shoe', price: 1200, quantity: 2},
    { name: 'Shirt', price: 2000, quantity: 5},
    { name: 'Pant', price: 2500, quantity: 3},
    { name: 'Belt', price: 800, quantity: 2},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const result = totalCost(shoppingCart);
console.log(result);