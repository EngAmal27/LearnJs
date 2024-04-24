
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
let count = 0;



decrease.onclick = function () {
    count--;
    document.getElementById("myh1").textContent = count;
}

increase.onclick = function () {
    count++;
    document.getElementById("myh1").textContent = count;
}

reset.onclick = function () {
    count = 0;
    document.getElementById("myh1").textContent = count;
}
