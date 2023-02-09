let display = document.querySelector(".display")
let numbers = document.getElementsByClassName("number")

for (i=0; i<numbers.length; i++) {
    let current = i
    numbers[i].addEventListener("click", () => {
        if (display.textContent == "0") {
            display.textContent = numbers.item(current).value
        }else if (display.textContent.length < 8) {
            display.textContent += numbers.item(current).value
        }
    });
}



document.querySelector(".clear").addEventListener("click", () => {
    display.textContent = "0"
})