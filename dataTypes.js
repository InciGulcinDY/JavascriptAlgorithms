function convertDataToInteger() {
    const data = document.getElementById("dataToBeInteger").value; // Use .value to get input data
    const result = parseInt(data); // Convert the string to integer
    document.getElementById("resul1").innerHTML = isNaN(result) ? 'Invalid input' : result; // Use .innerHTML to update the result
}
//TODO: Continue coding for this section!!!
