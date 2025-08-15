function add(a,b) {
    return a + b;
}
function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return 'null';
    } else {
        return a / b;
    }
}

console.log(add(2,3))
console.log(subtract(10,4))
console.log(multiply(6,7))
console.log(divide(8,2))
console.log(divide(5,0))
console.log(divide(4,2))