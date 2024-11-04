let num1 = ""
let num2 = ""
let operation = ""
let activeInput = "num1"

// press number buttons to display them
let numberButtons = document.querySelectorAll(".core-button")
numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        numberSelected = e.target.textContent
        if (activeInput === "num1") {
            num1 += numberSelected
            document.querySelector("#display").textContent = num1
        }
        else if (activeInput === "num2") {
            num2 += numberSelected
            document.querySelector("#display").textContent = num2
        }
    })
})

// press operation buttons to set the operator
let operationButtons = document.querySelectorAll(".operation-button")
operationButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        operationButtons.forEach((button) => {button.style.backgroundColor = "#6b7609"})
        operation = e.target.textContent
        e.target.style.backgroundColor = "#abbd0f"
        document.querySelector("#display").textContent = ""
        activeInput = "num2"
        clearButton.textContent = "C"
        })
    })

// press equal button and calculate
let equalButton = document.querySelector("#equal-button")
equalButton.addEventListener("click", (e) => {
    operationButtons.forEach((button) => {button.style.backgroundColor = "#6b7609"})
    answer = operate(num1, num2, operation)
    console.log(answer)
    document.querySelector("#display").textContent = answer
    num1 = answer
    num2 = ""
    operation = ""
})


// clear button
let clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click", (e) => {
     if (clearButton.textContent === "AC") {
        console.log("full reset")
        operationButtons.forEach((button) => {button.style.backgroundColor = "#6b7609"})
        num1 = ""
        num2 = ""
        clearButton.textContent = "AC"
    }
    else if (clearButton.textContent === "C") {
        console.log("second reset")
        num2 = ""
        clearButton.textContent = "AC"
    }
    document.querySelector("#display").textContent = ""
})


// operator functions
function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}


function divide(num1, num2) {
    return Number(num1) / Number(num2)
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function makeNumberNegative(num) {
    return Number(num) * -1
}

function operate(num1, num2, operation) {
    console.log(num1, num2, operation)
    if (operation === "+") {
        return add(num1, num2)
    }
    else if (operation === "-") {
        return subtract(num1, num2)
    }
    else if (operation === "x") {
        return multiply(num1, num2)
    }
    else if (operation === "÷") {
        if (num2 === "0")
            return "bruh"
        else {
            return divide(num1, num2)
        }
    }
}
