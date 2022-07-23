
function ClearScreen(){
    document.getElementById('num').value = "";
}

function Calculate(){
    var p = document.getElementById('num').value 
    var q = eval(p);
    document.getElementById('num').value = q;
}

function display(num){
    document.getElementById('num').value += num;
}

function Delete(){
    document.getElementById('num').value = document.getElementById('num').value.slice(0,-1);

}
    