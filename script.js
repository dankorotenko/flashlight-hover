var cards = document.querySelectorAll('.card');
var cardWrapper = document.getElementById('cards');
cardWrapper.onmousemove = function (e) {
    cards.forEach(function (card) {
        var rect = card.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", "".concat(x, "px"));
        card.style.setProperty("--mouse-y", "".concat(y, "px"));
    });
};
