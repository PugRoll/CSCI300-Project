/**
    * Javascript for the index.html page
    *
    */

let num = 0;
//Simple function to track number of clicks on a button and then go to page when a arbitrary number has been reached
function click5() {
    if(num == 5) {
        window.open("./playground.html")
    }
    else {
        num += 1;
    }
}



 
