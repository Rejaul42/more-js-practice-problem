function papersRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity){
    const firstPerBookPapers = 100;
    const secondPerBookPapers = 200;
    const thirdPerBookPapers = 300;
    
    const firstBookPapers = firstPerBookPapers * firstBookQuantity;
    const secondBookPapers = secondPerBookPapers * secondBookQuantity;
    const thirdBookPapers = thirdPerBookPapers * thirdBookQuantity;

    const totalPapers = firstBookPapers + secondBookPapers + thirdBookPapers;
    return totalPapers;
}

const bookQuantity = papersRequirements(3, 2, 2);
console.log(bookQuantity);