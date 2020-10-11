function checkZero(pObjectId){
    var DOMobject = document.getElementById(pObjectId);
    var tmpValue = DOMobject.value;

    if (tmpValue <=0){
        alert("Positive value required");
        DOMobject.SetFocus();
    }

    return tmpValue;
}

function compute(){
    var _principal = document.getElementById.value;
    
    if ((_principal = checkZero('principal')) <= 0) return;
    if ((_rate = checkZero('rate')) <=0) return;
    if ((_year = checkZero('year')) <=0) return;
    alert(_principal);

    var _interest = _principal * _rate * _years / 100;

    document.getElementById('result').innerHTML = _interest;
}
        