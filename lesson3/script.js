// Method Chaining


let userName = window.prompt('what is your name ?');

userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase() + userName.slice(-1).toUpperCase();
console.log(userName);


