
const elSelect = document.querySelector('#select');
const elInput = document.querySelector('#input');
const elTitle = document.querySelector('#title');

let dollarToSum = 10690.03;
let yevroToSum = 12671.18;
let liraToSum = 1281.68;


form.addEventListener('submit', function(e){
    e.preventDefault();
    if (elSelect.value === "dollar"){
        let c = elTitle.textContent = (elInput.value / dollarToSum).toFixed(2) + '$';
        console.log(c);}
        if (elSelect.value === "yevro"){
            let c = elTitle.textContent = (elInput.value / yevroToSum).toFixed(2) + 'euro';
            console.log(c);
        }
        if (elSelect.value === "lira"){
            let c = elTitle.textContent = (elInput.value / liraToSum).toFixed(2) + 'lira';
            console.log(c);
        }
        
        // let inputValue = input.value.trim()
        // text.textContent = inputValue;
        // input.value = null
        // console.log(select.value)
    })
    