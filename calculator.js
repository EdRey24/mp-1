function getFields(){
    let num1 = Number(document.getElementById("first-num").value);
    let num2 = Number(document.getElementById("second-num").value);
    return [num1, num2];
}

function setOutput(value) {
    const output = document.getElementById("output");
    output.innerHTML = value + " ";
}

function addition(){
    const [num1, num2] = getFields();
    setOutput(num1 + num2);
}

function subtraction(){
    const [num1, num2] = getFields();
    setOutput(num1 - num2);
}

function multiplication(){
    const [num1, num2] = getFields();
    setOutput(num1 * num2);
}

function division(){
    const [num1, num2] = getFields();
    setOutput(num1 / num2);
}

function power(){
    const [num1, num2] = getFields();
    let total = 1;
    for(let i = 0; i < num2; i++){
        total *= Number(num1);
    }
    if(Number.isNaN(num1) || Number.isNaN(num2)){
        total = "NaN";
    }
    setOutput(total);
}

function clearCalc(){
    document.getElementById("first-num").value = "";
    document.getElementById("second-num").value = "";
    document.getElementById("output").innerHTML = "";
}

function checkNeg(){
    let output = document.getElementById("output");
    if(Number(output.innerText) < 0){
        output.style.color = "red";
    }else{
        output.style.color = "#FFF9F9";
    }
}

document.addEventListener("click", checkNeg);