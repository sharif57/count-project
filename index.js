let count = 0;

function increment() {
    count++
    document.getElementById("countDisplay").innerText = count;
}
function decrement() {
    if(count > 0){
        count--
    }
    document.getElementById("countDisplay").innerText = count;
}
function reset() {
    count =0
    document.getElementById("countDisplay").innerText = count;
}

function addNumber() {
    const numberInput = document.getElementById("numberInput").value;
    const number = parseInt(numberInput);
    
    if (!isNaN(number)) {
        count += number;
        document.getElementById("countDisplay").innerText = count;
    }
}