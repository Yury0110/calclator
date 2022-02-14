

function disabledButton() {
    let input1 = document.getElementById("num1").value;
    let input2 = document.getElementById("num2").value;
    let button = document.getElementById("total");
    
    if (input1 && input2) {
        button.removeAttribute("disabled"); 
    }
    else {
        button.setAttribute('disabled', 'disabled')
    }
};
