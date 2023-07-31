let firstNumber = "";
let secondNumber =  "";
let currentNumber = ""
let operation = "";
let currentNum = 1
let clearLevel = 0;
let justOperated = false;
let hitEquals = false;

const digits = document.querySelector(".digits")
digits.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton || e.target.id == 'clear' || e.target.id == 'negative') {
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
const ngtBtn = document.getElementById('negative')

addBtn.onclick = () => setOperation("+")
subBtn.onclick = () => setOperation("-")
divBtn.onclick = () => setOperation("/")
mulBtn.onclick = () => setOperation("*")
eqlBtn.onclick = () => evaluate(true)
clrBtn.onclick = () => clearCalculator()
ngtBtn.onclick = () => negative()

function setOperation(operator) {
    if (operation != "") {
        console.log(operation)
        firstNumber = evaluate()
        console.log(firstNumber)
        operation = operator
        hitEquals = false
        secondNumber = ""
        if (operator != "=") {
           operation = operator
           hitEquals = false
           updateDisplay(operation)
        }
    } else {
        operation = operator
        updateDisplay(operation)
        currentNum = 2;
    }
    
}

function negative(){
    if (justOperated) {
           return;
    }
    if (currentNum == 1){
           let realValue = Number(firstNumber)
           if (realValue > 0) {
            firstNumber = "-" + firstNumber
           } else {
            firstNumber = "" + Math.abs(realValue)
           }
           console.log(firstNumber)
           updateDisplay(firstNumber)
    } else {
        let realValue = Number(secondNumber)
        if (realValue > 0) {
         secondNumber = "-" + secondNumber
        } else {
         secondNumber = "" + Math.abs(realValue)
        }
        updateDisplay(secondNumber)

    }
}


function setNumber(n) {
    if (hitEquals){
        console.log("resetting")
        if (n == 0) {
            console.log("running first")
            firstNumber = ""
        } else {
        console.log("running second")
        firstNumber =  "" + n
        }
        currentNum = 1;
        updateDisplay(firstNumber)
        secondNumber = ""
        operation = ""
        hitEquals = false
        console.log(firstNumber)
        justOperated = false;
    
    } else {
    if (currentNum == 1) {
        if ((firstNumber == "" || firstNumber == "0") && n == 0) {
            return;
        } else {
       console.log("setting first")
       clearLevel = 0
       firstNumber = firstNumber + "" + n
       updateDisplay(firstNumber)
        }
        justOperated = false;
    }
    else {
        if ((secondNumber == "" || secondNumber == "0") && n == 0) {
            return;
        } else {
        console.log("setting second")
       clearLevel = 1
       secondNumber = secondNumber + "" + n
       updateDisplay(secondNumber)
        }
        justOperated = false;
    }
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

function evaluate(equals) {
    let result = 0
    switch(operation) {
        case "+":
            result = Number(firstNumber) + Number(secondNumber)
            clearLevel = 0;
            updateDisplay(result)
            if (equals) {
                hitEquals = true;
            }
            justOperated = true;
            return result;
        case "-":
            result = Number(firstNumber) - Number(secondNumber)
            clearLevel = 0;
            updateDisplay(result)
            if (equals) {
                hitEquals = true;
            }
            justOperated = true;
            return result
        case "*":
            result = Number(firstNumber) * Number(secondNumber)
            clearLevel = 0;
            updateDisplay(result)
            if (equals) {
                hitEquals = true;
            }
            justOperated = true;
            return result
        case "/":
            result = Number(firstNumber) / Number(secondNumber)
            clearLevel = 0;
            updateDisplay(result)
            if (equals) {
                hitEquals = true;
            }
            justOperated = true;
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