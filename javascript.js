let display = document.querySelector(".display")
let numbers = document.getElementsByClassName("number")
let operators = document.getElementsByClassName("operator")
let reset = false
let number1
let number2
let operator

for (i=0; i<numbers.length; i++) {
    let current = i
    numbers[i].addEventListener("click", () => {
        if (display.textContent == "0" || reset === true) {
            display.textContent = numbers.item(current).value
            reset = false
        }else if (display.textContent.length < 8 && display.textContent != "nope") {
            display.textContent += numbers.item(current).value
        }
    });
}

for (i=0; i<operators.length; i++) {
    let current = i
    operators[i].addEventListener("click", () => {
        if (number1 === undefined && display.textContent != "nope") {
            number1 = display.textContent
            operator = operators.item(current).value
            clear()
        }else if (display.textContent != "nope") {
            display.textContent = operate()
            number1 = display.textContent
            operator = operators.item(current).value
        }
    })
}

document.querySelector(".clear").addEventListener("click", () => {
    operator = undefined
    number1 = undefined
    number2 = undefined
    display.textContent = "0"
})

document.querySelector(".dot").addEventListener("click", () => {
    if (display.textContent.includes(".") === false) {
        display.textContent += "."
    }
})

document.querySelector(".sign").addEventListener("click", () => {
    if (display.textContent != "nope") {
        display.textContent = display.textContent * -1
    }
})

document.querySelector(".percent").addEventListener("click", () => {
    if (display.textContent !="nope") {
        display.textContent = display.textContent / 100
    }
})

document.querySelector(".equal").addEventListener("click", () => {
    if (display.textContent != "nope" && number1 != undefined) {
        display.textContent = operate()
        number1 = undefined
        number2 = undefined
    }
})

function clear() {
    display.textContent = "0"
}

function operate() {
    number2 = display.textContent
    clear()
    let result
    if (operator == "+") {
        reset = true
        result = +number1 + +number2
    }else if (operator == "-") {
        reset = true
        result = +number1 - +number2
    }else if (operator == "*") {
        reset = true
        result = +number1 * +number2
    }else if (operator == "/" && number2 != "0") {
        reset = true
        result = +number1 / +number2
    }else if (operator =="/" && number2 =="0") {
        result = "nope"
    }
    return result.toString().slice(0,8)
}