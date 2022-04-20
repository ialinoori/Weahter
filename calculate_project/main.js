let displaybox = document.querySelector(".display");

let list = document.querySelectorAll(".show-display");

function showdisplay(event) {
    const x = event.target.innerText;
    console.log(x);
    if (displaybox.innerHTML == 0) {
        return displaybox.innerHTML = x

    }

    return displaybox.innerHTML += x

}

function allclear() {
    displaybox.innerHTML = 0

}

function clear() {
    let text = displaybox.innerText;
    if (text.length === 1) {
        displaybox.innerText = 0
    } else {
        displaybox.innerText = text.substring(0, text.length - 1)
    }


}

function calculate() {
    let result = displaybox.innerText;
    displaybox.innerText = eval(result)

}

document.querySelector(".calculate").addEventListener("click", calculate)

document.querySelector(".all-clear").addEventListener("click", allclear)

document.querySelector(".clear-last").addEventListener("click", clear)

list.forEach(item => {
    item.addEventListener("click", showdisplay)
})