function calculate() {
    //debugger;
    console.group("IPO")
    console.group('Inputs');
    let p = document.getElementById("p").valueAsNumber;
    console.log(p);
    let r = document.getElementById("r").valueAsNumber;
    console.log(r);
    let n = document.getElementById("n").valueAsNumber;
    console.log(n);
    console.groupEnd();
    console.group("process")
    r = (r / 100) / 12;
    console.log(r);
    n *= 12;
    console.log(n);
//M = P(  ( r(1 + r)^n )  /  ((1 + r)^n – 1)  )
    let calc = p * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));
    console.log(calc);
    calc = Math.round(calc * 100) / 100;
    console.log(calc);
    console.groupEnd();
    console.group("output");
    document.getElementById("calc").innerHTML = calc;
    console.log(calc);
    console.groupEnd()
    console.groupEnd();
}
