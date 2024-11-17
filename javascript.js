let num1 = ""
let num2 = ""
let operation = ""
let activeInput = "num1" // active input begins on num1 because first input is awlays num1
let currentDisplayNumber = ""
let numberInputs = "0123456789"
let equalButton = document.querySelector("#equal-button")
let numberButtons = document.querySelectorAll(".core-button")
let operationButtons = document.querySelectorAll(".operation-button")
let clearButton = document.querySelector("#clear-button")
let swapSignButton = document.querySelector("#swap-sign-button")
let percentButton = document.querySelector("#percent-button")

// press number buttons to display them
// the below works for clicking buttons
// numberButtons.forEach(button => {
//     button.addEventListener("click", (e) => { 
//         numberSelected = e.target.textContent
//         if (numberSelected == "." && currentDisplayNumber.includes(".")) {
//         }
//         else {
//             currentDisplayNumber += numberSelected
//             document.querySelector("#display-text").textContent = currentDisplayNumber
//             if (activeInput == "num1") { // log number 1, prep for 2nd number, clear display
//                 num1 = currentDisplayNumber
//             }
//             else if (activeInput == "num2") { // log number 2 and clear active input
//                 num2 = currentDisplayNumber
//             }
//         }
//     }) 
// })

// press number buttons with mouse
numberButtons.forEach(button => {
        button.addEventListener("click", (e) => enterNumber(e.target.textContent))
    })

// use keyboard for numbers & backspace
document.addEventListener("keyup", (e) => {
    if (e.key == "Backspace") {
        currentDisplayNumber = currentDisplayNumber.slice(0,-1)
        document.querySelector("#display-text").textContent = currentDisplayNumber
    } 
    else if (numberInputs.includes(e.key)) {
        console.log(e.key)
        enterNumber(e.key)        
    }
})

function enterNumber(number) {
    if (number == "." && currentDisplayNumber.includes(".")) {
                }
    else {
        currentDisplayNumber += number
        document.querySelector("#display-text").textContent = currentDisplayNumber
        if (activeInput == "num1") { // log number 1, prep for 2nd number, clear display
            num1 = currentDisplayNumber
        }
        else if (activeInput == "num2") { // log number 2 and clear active input
            num2 = currentDisplayNumber
        }}
    }

// press operation buttons to set the operator
operationButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // set the operation, highlight the button, clear display
        operationButtons.forEach((button) => {button.style.backgroundColor = "#6b7609"})
        operation = e.target.textContent
        e.target.style.backgroundColor = "#abbd0f"
        if (activeInput == "num1" || activeInput == "num2") { // if you press an operator and just entered the first number
            document.querySelector("#display-text").textContent = ""
            currentDisplayNumber = ""
            activeInput = 'num2'
            clearButton.textContent = "C"
        }}
)})

// press equal button and calculate
equalButton.addEventListener("click", (e) => {
    operationButtons.forEach((button) => {button.style.backgroundColor = "#6b7609"})
    currentDisplayNumber = operate(num1, num2, operation)
    console.log(num1, operation, num2, currentDisplayNumber)
    document.querySelector("#display-text").textContent = currentDisplayNumber
    num1 = currentDisplayNumber
    num2 = ""
    operation = ""
})

// clear button
clearButton.addEventListener("click", (e) => {
    if (activeInput == "num1") {
        currentDisplayNumber = ""
        clearButton.textContent = "AC"       
    }
    else if (activeInput == "num2" && currentDisplayNumber == "") {
        num1 = ""
        num2 = ""
        activeInput = "num1"
        clearButton.textContent = "AC"
        operationButtons.forEach((button) => {button.style.backgroundColor = "#6b7609"})
        operation = ""
    }
    else if (activeInput == "num2") {
        currentDisplayNumber = ""
        clearButton.textContent = "C"
    }
    document.querySelector("#display-text").textContent = ""
})

// swap sign button
swapSignButton.addEventListener("click", (e) => {
    currentDisplayNumber *= -1
    document.querySelector("#display-text").textContent = currentDisplayNumber
})

// % button
percentButton.addEventListener("click", (e) => {
    currentDisplayNumber *= .01
    document.querySelector("#display-text").textContent = currentDisplayNumber
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
