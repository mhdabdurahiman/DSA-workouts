const bitwiseOddOrEven = (num) => {
    if ((num & 1) === 0){
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
bitwiseOddOrEven(5);
