function changeHtml(){
    let text = document.getElementById("inputText").value;

    document.getElementById("text").innerHTML = String(text);
}
function changeFontSize(){
    document.getElementById("text").style.fontSize = "40px";
}
function changeColor(){
    document.getElementById("text").style.color = "blue";
}