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
    var _principal = document.getElementById.value;
    
    if ((_principal = checkZero('principal')) <= 0) return;
    if ((_rate = checkZero('rate')) <=0) return;
    if ((_years = checkZero('years')) <=0) return;

    var _interest = _principal * _rate * _years / 100;

    document.getElementById('result').innerHTML = _interest;
}
        