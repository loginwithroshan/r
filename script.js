function press(value){
    document.getElementById("display").value += value;
}

function calculate(){
    let result = document.getElementById("display").value;
    try{
        document.getElementById("display").value = eval(result);
    }catch{
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function backspace(){
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}