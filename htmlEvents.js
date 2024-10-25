function handleChange(){
    document.getElementById("onChangeId").innerHTML = "You've entered new input!";
}

function handleClick(){
    window.alert("You've clicked the button!");
}

function handleMouseOver(){
    document.getElementById("mouseOverId").style.backgroundColor = 'grey';
    document.getElementById("mouseOverId").style.fontSize = '30px';

}

function handleMouseOut(){
    document.getElementById("mouseOverId").style.backgroundColor = 'white';
    document.getElementById("mouseOverId").style.fontSize = '20px';
}

function handleOnLoad(){
    document.getElementById("pageLoadId").innerHTML = "Page has loaded!"
}