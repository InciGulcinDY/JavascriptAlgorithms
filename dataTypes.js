function convertDataToInteger() {
    const data = document.getElementById("dataToBeInteger").value;
    const result = parseInt(data);
    document.getElementById("resul1").innerHTML = isNaN(result) ? 'Invalid input' : result;
}

function convertDataToFloat(){
    const data = document.getElementById("dataToBeFloat").value;
    const result = parseFloat(data);
    document.getElementById("result2").innerHTML = isNaN(result) ? 'Invalid input' : result;
}

function convertDataIntoAString(){
    const data = document.getElementById("dataToBeString").value;
    console.log(typeof(data));
    const result = `New string is ${data}`;
    document.getElementById("result3").innerHTML = result;
}