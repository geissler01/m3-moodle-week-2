let numFirst = document.getElementById("firs-number");
let numSecond = document.getElementById("firs-number");
let result = document.getElementById("result");

const sum = document.getElementById("result");
let suma = numFirst + numSecond;

sum.addEventListener("click", () => {
    result.value = suma.textContent
})

// let result = numFirst +numSecond;