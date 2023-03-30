function makeMonth() {
    const num = Math.floor(Math.random() * 40);
    let p = document.getElementById("month");
    p.textContent = num;
}
function makeDay() {
    const num = Math.floor(Math.random() * 100);
    let p = document.getElementById("day");
    p.textContent = num;
}

function validateDate() { 
    const month = document.getElementById("month").textContent;
    const day = document.getElementById("day").textContent;
    console.log("M:" + month + " D: " + day); 
    let a = 0;
    let b = 0;
    if(parseInt(month) < 13 && parseInt(month) > 0) {
        a = 1;
    }
    if (parseInt(day) < 32 && parseInt(day) > 0) {
        b = 1;
    }

    if(Boolean(a) && Boolean(b)) {
        document.getElementById("isValid").textContent = "yes";
    }
    else {
        document.getElementById("isValid").textContent = "no"
    }
}
