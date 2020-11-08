let decimals = document.getElementById("decimals")

let timesInput = document.getElementById("timesInput") // this times pi
let divideInput = document.getElementById("divideInput") // this divide by pi
let invertedDivideInput = document.getElementById("invertedDivideInput")

let timesOutput = document.getElementById("timesOutput") // display answer of times pi
let divideOutput = document.getElementById("divideOutput") // display answer of divide by pi
let invertedDivideOutput = document.getElementById("invertedDivideOutput")

let pi = 3.141592653589793

function getId(id) {
    return document.getElementById(id)
}

function calculate(type) {
    if(type === "times"){
        console.log(timesInput.value)
        var value = timesInput.value
        var result = pi * value
        
        return result
    } else if(type === "divide") {
        console.log(divideInput.value)
        var value = divideInput.value
        var result = pi / value

        return result
    } else if(type === "invertedDivide") {
        var value = invertedDivideInput.value
        var result = value / pi

        return result
    }
}

timesInput.oninput = function() {
    timesOutput.textContent = calculate("times")
}

divideInput.oninput = function() {
    divideOutput.textContent = calculate("divide")
}

invertedDivideInput.oninput = function() {
    invertedDivideOutput.textContent = calculate("invertedDivide")
}

getId("getDiameterByRadiusInput").oninput = function() {}