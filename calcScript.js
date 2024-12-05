const CalculatorScreen = document.getElementById("calcScreen");
const ClearButton = document.getElementById("clearBtn");
const EqualsTo = document.getElementById("equalSymbol");
const NumbersAndMathSymbols = document.getElementsByClassName("numsAndSymbols");


//when a number or math symbol is clicked it will added to the calculator screen
function addNumberOrSymbol(){
    let numberOrSymbol = event.target.innerText;
    CalculatorScreen.innerText += numberOrSymbol;
}

//when the equal sign is clicked it will evaluate the equation shown in the calculator screen
function calculateEquation(){
    let calculation = eval(CalculatorScreen.innerText);
    CalculatorScreen.innerText = calculation;

    //if the result displays "infinity", it will instead display "ERROR"
    if(calculation === Infinity){
        CalculatorScreen.innerText = "ERROR";
    }
    if(calculation === -Infinity){
        CalculatorScreen.innerText = "ERROR";
    }
}

//when the clear button is clicked it will clear the content inside the calculator screen
function ClearScreen(){
    CalculatorScreen.textContent = "";
}

//adds an event listener for the equal sign and clear button
EqualsTo.addEventListener('click', calculateEquation);
ClearButton.addEventListener('click', ClearScreen);

//adds an event listener to every button except the equal sign and clear button
for(let i = 0; i < NumbersAndMathSymbols.length; i++){
    NumbersAndMathSymbols[i].addEventListener('click', addNumberOrSymbol);
}