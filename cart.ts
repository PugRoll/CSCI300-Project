let cartPrice :number = 0;
document.addEventListener("DOMContentLoaded", function loadPrice() {
    var value = document.cookie
        .split("; ");
    const pattern = /[\d]|[\.]/;
    var price :string = "";
    for(var i:number = 0; i < value[0].length; i++) {
       if(pattern.test(value[0].charAt(i))) {
           price += value[0].charAt(i);
       }  
    }
    const p = document.getElementById("CartPrice").textContent = `\$${price}`;
    cartPrice = parseFloat(price);
    console.log(price);
});