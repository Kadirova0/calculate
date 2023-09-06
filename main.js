const display =document.querySelector('.display');
const btns = document.querySelectorAll('button');
const specialOperators = ["%", "/", "*", "-", "+", "="];
let output = "";


const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100")); //there is a problem with the percent function.
    }else if(btnValue === "AC"){
        output = "";
    }else if(btnValue === "+/-"){
        output = output.replace("", "-");
    }else {
        if(output === "" && specialOperators.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
    }



btns.forEach(button => {
    button.addEventListener("click", e => {
        calculate(e.target.dataset.value)}
        );
});