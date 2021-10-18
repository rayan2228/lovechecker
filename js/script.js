let calculatorElm = document.querySelector(".calculate")
let calculatorValueElm = document.querySelector(".calculatevalue")
let person1Elm = document.querySelector("#person1")
let person2Elm = document.querySelector("#person2")
let resetElm = document.querySelector(".reset")


// data layer
let loveScore = 0

// generate random number


// calculate
function calculate(e) {
    e.preventDefault()
    if (person1Elm.value === "" && person2Elm.value === "") {
        alert("Please Fill Up Inputs")
    } else {
        let randomNumber = () => { return Math.ceil(Math.random() * 100) }
        loveScore = randomNumber()
        calculatorValueElm.textContent = loveScore + "%"
        calculatorValueElm.style.top = "10px"
        calculatorValueElm.style.left = "-1px"
        calculatorValueElm.style.fontSize = "41px"
    }

}
calculatorElm.addEventListener("click", calculate)
resetElm.addEventListener("click", () => {
    calculatorValueElm.textContent = "Calculator"
    calculatorValueElm.style.top = "25px"
    calculatorValueElm.style.left = "0px"
    calculatorValueElm.style.fontSize = "20px"
})