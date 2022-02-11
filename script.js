var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var additionalCash = 0;
var amount = 0;

function compoundInterest(){

    document.getElementById("resultado").style.display = "block";
    document.getElementById("botonReset").style.display = "inline";
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

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
    
    for (i=1; i<=c; i++){

        console.log("Iteration" +i);
        console.log("Previous amount "+previousAmount);

        var iteration = (previousAmount * b)+e;

        p = e;

        console.log("Iteration: " + iteration);

        previousAmount = iteration;

        console.log("previous amount: "+previousAmount);

    }

    finalAmount = formatter.format(iteration.toFixed(2));

    var interest = (finalAmount - (principal*c)).toFixed(2);

    document.getElementById("resultadoTiempo").innerHTML = c;
    document.getElementById("resultadoCalculado").innerHTML= finalAmount

}

function resetBoton(){
    document.getElementById("principal").value = '';
    document.getElementById("additionalCash").value = '';
    document.getElementById("termOfLoan").value = '';
    document.getElementById("resultado").style.display = "none";
    document.getElementById("botonReset").style.display = "none";
}
