var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var additionalCash = 0;
var amount = 0;

function compoundInterest(){

    event.preventDefault();
    var principal = parseFloat(document.getElementById("principal").value);
    var termOfLoan = parseFloat(document.getElementById("termOfLoan").value);
    var additionalCash = parseFloat(document.getElementById("additionalCash").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    
    var a = interestRate/1;
    var b = 1 + a;
    var c = termOfLoan * 1;
    var d = Math.pow(b, c);
    var e = additionalCash * 12;
    var amount = ((principal+e) * d).toFixed(2);

    //var amount = (principal * interestRate)+principal;

    document.getElementById("primerTest").innerHTML=amount;

}