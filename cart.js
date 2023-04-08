var cartPrice = 0;
document.addEventListener("DOMContentLoaded", function loadPrice() {
    var value = document.cookie
        .split("; ");
    var pattern = /[\d]|[\.]/;
    var price = "";
    for (var i = 0; i < value[0].length; i++) {
        if (pattern.test(value[0].charAt(i))) {
            price += value[0].charAt(i);
        }
    }
    var p = document.getElementById("CartPrice").textContent = "$".concat(price);
    cartPrice = parseFloat(price);
    console.log(price);
});
