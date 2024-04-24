



function Happybirthday(name, age) {
    console.log(`happy birthday ${name} you are ${age} years old`);
}
Happybirthday('moka', 13)
function add(x, y) {
    return x + y
}
function subtract(x, y) {
    return x - y
}
function multiple(x, y) {
    return x * y
}
console.log(add(5, 6))
console.log(subtract(5, 6))
console.log(multiple(5, 6))


// Even or odd number 


function isEven(number){
    return number % 2 === 0 ? true : false;
}

console.log(isEven(50))

function isValid(email){
    return email.includes("@") ? 'this email is Valid ' : 'this email is  NOt Valid '
}


console.log(isValid('mokafakeemail'))