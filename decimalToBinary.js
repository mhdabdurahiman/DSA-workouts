const decimalToBinary = (decimal) => {
    if (typeof(decimal) !== "undefined"){
     let dividend = decimal;
     let binaryArr = [];
     while (dividend > 0 ){
         binaryArr.unshift(dividend % 2)
         dividend = Math.floor(dividend/2)
     }
     console.log(binaryArr)
    }else{
      console.log("Please enter a valid decimal")
    }
 }
 decimalToBinary(10);