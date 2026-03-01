function calculate() {
    debugger;
    let p = document.getElementById("p").valueAsNumber;
    let r = document.getElementById("r").valueAsNumber;
    let n = document.getElementById("n").valueAsNumber;

//r /= 12.00;
//r = Math.round(r * 100) / 100;
    r = (r / 100) / 12;
//n /= 12.00;
//n = Math.round(n * 100) / 100;
    n *= 12;
//M = P(  ( r(1 + r)^n )  /  ((1 + r)^n – 1)  )
let calc = p*( ( r * (1 + r)** n )  / ((1 + r)** n - 1));
calc = Math.round(calc * 100) / 100;
    document.getElementById("calc").innerHTML = calc;
}