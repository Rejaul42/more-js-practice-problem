const phones = [
    {name : 'Samsung', camera: 12, price:30000, storage: 32, color: 'golden'},
    {name : 'Xiaomi', camera: 12, price:26000, storage: 64, color: 'Black'},
    {name : 'Iphone', camera: 12, price:83000, storage: 32, color: 'RoseGold'},
    {name : 'Walton', camera: 12, price:18000, storage: 64, color: 'Black'},
    {name : 'Google', camera: 12, price:60000, storage: 32, color: 'White'},
    {name : 'Sony', camera: 12, price:50000, storage: 64, color: 'Silver'},
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const myPhone = cheapestPhone(phones);
console.log(myPhone);