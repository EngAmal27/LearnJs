


let age = 13;
let drink = age >= 18 ? "wine" : "water";
console.log(drink)





let yourName = 'moka'
let greeting = yourName === 'moka' ? 'hello moka' : 'hello';
console.log(greeting)
function feast(beast, dish) {
    //your function here
       let beastStart = beast[0];
        let beastEnd = beast.slice(-1);
        let dishStart = dish[0];
        let dishEnd = dish.slice(-1);
        
      
        beastStart === dishStart && beastEnd === dishEnd
        ? console.log(true)
        : console.log(false);
      
    }

    feast("great blue heron", "garlic naan")


    switch (yourName) {
        case 'moka':
            console.log('hello moka');
            break;
        default:
            console.log('hello');
    }