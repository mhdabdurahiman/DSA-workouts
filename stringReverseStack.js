function reverseStringUsingStack(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = '';
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr
}

const originalString = "Mohammed Abdu Rahiman";
const reversedString = reverseStringUsingStack(originalString);
console.log(reversedString);
