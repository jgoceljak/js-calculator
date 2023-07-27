let firstNumber = "";
let secondNumber =  "";
let currentNumber = ""
let operation = "";
let currentNum = 1
let clearLevel = 0;

const digits = document.querySelector(".digits")
digits.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton || e.target.id == 'clear') {
        return;
    }
    let buttonId = e.target.id
    let splitId = buttonId.split('')
    let digit = splitId[1]
    setNumber(digit)
})

const addBtn = document.getElementById('add')
const subBtn = document.getElementById('subtract')
const divBtn = document.getElementById('divide')
const mulBtn = document.getElementById('multiply')
const eqlBtn = document.getElementById('equals')
const clrBtn = document.getElementById('clear')

addBtn.onclick = () => setOperation("+")
subBtn.onclick = () => setOperation("-")
divBtn.onclick = () => setOperation("/")
mulBtn.onclick = () => setOperation("*")
eqlBtn.onclick = () => evaluate()
clrBtn.onclick = () => clearCalculator()

function setOperation(operator) {
    if (operation != "") {
        firstNumber = evaluate()
        updateDisplay(operation)
        secondNumber = ""
        if (operator != "=") {
           operation = operator
        }
    } else {
        console.log("setting operator")
        operation = operator
        updateDisplay(operation)
        currentNum = 2;
    }
    
}


function setNumber(n) {
    if (currentNum == 1) {
       clearLevel = 0
       firstNumber = firstNumber + "" + n
       updateDisplay(firstNumber)
    }
    else {
       clearLevel = 1
       secondNumber = secondNumber + "" + n
       updateDisplay(secondNumber)
    }
}

function updateDisplay(show) {
   if (show != "") {
   const display = document.querySelector('.display')
   display.textContent = show
   } else {
    const display = document.querySelector('.display')
   display.textContent = "0"
   }
}

function evaluate() {
    let result = 0
    switch(operation) {
        case "+":
            result = Number(firstNumber) + Number(secondNumber)
            clearLevel = 0;
            updateDisplay(result)
            return result
        case "-":
            result = Number(firstNumber) - Number(secondNumber)
            clearLevel = 0;
            updateDisplay(result)
            return result
        case "*":
            result = Number(firstNumber) * Number(secondNumber)
            clearLevel = 0;
            updateDisplay(result)
            return result
        case "/":
            result = Number(firstNumber) / Number(secondNumber)
            clearLevel = 0;
            updateDisplay(result)
            return result
        default:
          
      }
    }

function clearCalculator() {
    if (clearLevel == 1) {
        secondNumber = ""
        updateDisplay(secondNumber)
        clearLevel = 0
    } else {
        currentNum = 1
        firstNumber = ""
        updateDisplay(firstNumber)
        secondNumber = ""
        operation = ""
    }
}