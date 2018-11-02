const quotes = document.getElementsByClassName('quotes__content__text');
const names = document.getElementsByClassName('quotes__content__description__name');
const bubbles = document.getElementsByClassName('quotes__content__description__bubbles__item');
const left_control = document.getElementById('left_control');
const right_control = document.getElementById('right_control');
let current_position = 0;

right_control.onclick = function() {
    quotes[current_position].classList.remove("active");
    names[current_position].classList.remove("active");
    bubbles[current_position].classList.remove("select");
    current_position++;
    if (current_position > quotes.length - 1) {
        current_position = 0;
    }
    quotes[current_position].classList.add("active");
    names[current_position].classList.add("active");
    bubbles[current_position].classList.add("select");
}

left_control.onclick = function() {
    quotes[current_position].classList.remove("active");
    names[current_position].classList.remove("active");
    bubbles[current_position].classList.remove("select");
    current_position--;
    if (current_position < 0) {
        current_position = quotes.length - 1;
    }
    quotes[current_position].classList.add("active");
    names[current_position].classList.add("active");
    bubbles[current_position].classList.add("select");
}