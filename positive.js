const numbers = [30, 22, 90, 64, 98, 0, 54, -50, 21, 45, 38];

function onlyPositive(inputNumber){
    let positiveNumbers = [];
    for(let i = 0; i <inputNumber.length; i++){
        const number = numbers[i];
        if(number >= 0){
            positiveNumbers.push(number);
        }
        else{
            break;
        }
    }
    return positiveNumbers;
}
const result = onlyPositive(numbers);
console.log(result);