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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcXVvdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVvdGVzX19jb250ZW50X190ZXh0Jyk7XHJcbmNvbnN0IG5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVvdGVzX19jb250ZW50X19kZXNjcmlwdGlvbl9fbmFtZScpO1xyXG5jb25zdCBidWJibGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVvdGVzX19jb250ZW50X19kZXNjcmlwdGlvbl9fYnViYmxlc19faXRlbScpO1xyXG5jb25zdCBsZWZ0X2NvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdF9jb250cm9sJyk7XHJcbmNvbnN0IHJpZ2h0X2NvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHRfY29udHJvbCcpO1xyXG5sZXQgY3VycmVudF9wb3NpdGlvbiA9IDA7XHJcblxyXG5yaWdodF9jb250cm9sLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHF1b3Rlc1tjdXJyZW50X3Bvc2l0aW9uXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgbmFtZXNbY3VycmVudF9wb3NpdGlvbl0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGJ1YmJsZXNbY3VycmVudF9wb3NpdGlvbl0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdFwiKTtcclxuICAgIGN1cnJlbnRfcG9zaXRpb24rKztcclxuICAgIGlmIChjdXJyZW50X3Bvc2l0aW9uID4gcXVvdGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBjdXJyZW50X3Bvc2l0aW9uID0gMDtcclxuICAgIH1cclxuICAgIHF1b3Rlc1tjdXJyZW50X3Bvc2l0aW9uXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgbmFtZXNbY3VycmVudF9wb3NpdGlvbl0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGJ1YmJsZXNbY3VycmVudF9wb3NpdGlvbl0uY2xhc3NMaXN0LmFkZChcInNlbGVjdFwiKTtcclxufVxyXG5cclxubGVmdF9jb250cm9sLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHF1b3Rlc1tjdXJyZW50X3Bvc2l0aW9uXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgbmFtZXNbY3VycmVudF9wb3NpdGlvbl0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGJ1YmJsZXNbY3VycmVudF9wb3NpdGlvbl0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdFwiKTtcclxuICAgIGN1cnJlbnRfcG9zaXRpb24tLTtcclxuICAgIGlmIChjdXJyZW50X3Bvc2l0aW9uIDwgMCkge1xyXG4gICAgICAgIGN1cnJlbnRfcG9zaXRpb24gPSBxdW90ZXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuICAgIHF1b3Rlc1tjdXJyZW50X3Bvc2l0aW9uXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgbmFtZXNbY3VycmVudF9wb3NpdGlvbl0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGJ1YmJsZXNbY3VycmVudF9wb3NpdGlvbl0uY2xhc3NMaXN0LmFkZChcInNlbGVjdFwiKTtcclxufSJdfQ==