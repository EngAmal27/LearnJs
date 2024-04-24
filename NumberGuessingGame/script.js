

let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum) + minNum);

console.log(answer)


let guess;
let attempts = 0;
let running = true;



while (running) {

    guess = window.prompt(`guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert('please enter a number');
    } else if (guess < minNum || guess > maxNum) {
        window.alert('please enter a number between 1 and 100');
    } else {

       attempts++
       if(guess>answer){
        window.alert('too high');
       }else if(guess<answer){
        window.alert('too low');    
       }else{
        window.alert(`correct! it took you ${attempts} attempts`);
        running = false;
       }

    } 
}

