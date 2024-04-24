

let minNum = 1;
let maxNum = 100; 
let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
console.log(answer)



let guess;
let attempts = 0;
let running = true;


while (running) {
    guess = window.prompt('guess a number between 1 and 100');
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert('please enter a number');
    }else if(guess > maxNum || guess < minNum){
        window.alert('please enter a number between 1 and 100');
    }else{
        attempts++;
        if(guess > answer){
             window.alert('too high');
        }else if ( guess < answer){
            window.alert('too low');
        }else{
            window.alert(`congrats you guessed the number in ${attempts} attempts`);
            running = false;
        }
    } 

}   



