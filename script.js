var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var additionalCash = 0;
var amount = 0;

function compoundInterest(){

    document.getElementById("resultado").style.display = "block";
    event.preventDefault();

    const principal = parseFloat(document.getElementById("principal").value);
    const termOfLoan = parseFloat(document.getElementById("termOfLoan").value);
    const additionalCash = parseFloat(document.getElementById("additionalCash").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    
    var a = interestRate;
    var b = 1 + a;
console.log(b);
    var c = termOfLoan;
    var d = Math.pow(b, c);
    var e = additionalCash * 12;
    var p = principal;
    var previousAmount = p;

    var finalAmount = 0;
    
    for (i=1; i<=c; i++){

        console.log("Iteration" +i);
        console.log("Previous amount "+previousAmount);

        var iteration = (previousAmount * b)+e;

        p = e;

        console.log("Iteration: " + iteration);

        previousAmount = iteration;

        console.log("previous amount: "+previousAmount);

    }

    finalAmount = iteration;

    var interest = finalAmount - (principal*c);


    //var amount = (principal * interestRate)+principal;

    document.getElementById("primerTest").innerHTML=finalAmount+ " & "+ interest;

}