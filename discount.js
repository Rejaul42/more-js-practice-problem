// 1. if ticket numbers less then 100, then per ticket price is 100.
// 2. if ticket numbers is more then 100 and less then 200. then first 100 rate is 100 tk per ticket and second 100 rate is 90tk per ticket.
// 3. if ticket numbers is more then 200 . then 
//  first 100 rate is ---> 100tk
//  second 100 rate is ---> 90tk
// rest ticket rate is ---> 70tk


function ticketTotalPrice(ticketQuantity){
    const first100Rate = 100;
    const second100rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const first100Price = ticketQuantity * first100Rate;
        return first100Price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicket = ticketQuantity -100;
        const second100Price = restTicket * second100rate;
        const totalCost = first100Price + second100Price;
        return totalCost;
    }
    else{
        const first100Price = 100* first100Rate;
        const second100Price = 100 * second100rate;
        const restTicket = ticketQuantity - 200;
        const restTicketPrice = restTicket * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}
const totalPrice = ticketTotalPrice(300);
console.log(totalPrice);