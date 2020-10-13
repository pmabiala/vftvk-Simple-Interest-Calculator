function checkZero(pObjectId){
    var DOMobject = document.getElementById(pObjectId);
    var tmpValue = DOMobject.value;

    if (tmpValue <=0){
        alert("Positive value required");
        DOMobject.focus();
    }

    return tmpValue;
}

function compute(){
    /* Retrieve forms values */
    if ((_principal = checkZero('principal')) <= 0) return;
    if ((_rate = checkZero('rate')) <=0) return;
    if ((_years = checkZero('years')) <=0) return;

    /* Compute interest */
    var _interest = _principal * _rate * _years / 100;

    /* Build output text */
    var output = "If you deposit <strong>" + _principal + "</strong>,<br>";
    output += "at an interest rate of <strong>" + _rate + "</strong>.<br>";
    output += "You will receive an amount of <strong>" + _interest + "</strong>, <br>"
    output += "in the year " + (Number.parseInt(new Date().getFullYear()) + Number.parseInt(_years));
    document.getElementById('result').innerHTML = output;
}
        