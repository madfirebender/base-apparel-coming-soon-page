const submit = document.querySelector(".submit")
const error = document.querySelector(".error")
const form = document.querySelector("form")
const input = document.querySelector("input")
const label = document.querySelector("label")

form.addEventListener("submit", e => {
    e.preventDefault()

    const inputValue = input.value.trim()

    if (!isEmail(inputValue)) {
        error.style.display = "block"
        label.style.display = "block"
    } else {
        error.style.display = "none"
        label.style.display = "none"
    }
});

submit.addEventListener("click", e => {
    e.preventDefault()

    const inputValue = input.value.trim()

    if (!isEmail(inputValue)) {
        error.style.display = "block"
        label.style.display = "block"
    } else {
        error.style.display = "none"
        label.style.display = "none"
    }
});

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};

