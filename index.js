let count = document.querySelector('.inner_top_box')
let number = 0

let button_one = document.querySelector('.button1')
button_one.onclick = () => {
    if (number < 10) {
        number++
        count.innerHTML = number
    }
}

let button_two = document.querySelector('.button2')
button_two.onclick = () => {
    if (number > 0) {
        number--
        count.innerHTML = number

    }
}

let button_three = document.querySelector('.button3')
button_three.onclick = () => {
    if (number >= 0 || number <= 10) {
        number = 0
        count.innerHTML = number

    }
}

let button_four = document.querySelector('.button4')
button_four.onclick = () => {
    number = Math.round(Math.random()*10)
    count.innerHTML = number

}