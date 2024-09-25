function displayNumber(num){
    document.getElementById("display").value+=num
    console.log(document.getElementById("display").value);
    
}
function clearData(){
    document.getElementById("display").value=" "
    console.log(document.getElementById("display").value);
    
}
function operation(){
    display.value=eval(display.value)
}
function displayOper(num){
    document.getElementById("display").value+=num
    console.log(document.getElementById("display").value);
    
}
function displayFn(){
    display.value=display.value.slice(0,-1)
    console.log(display.value);
    

}