"use strict";

function $(id)
{
	return document.getElementById(id);
}


window.onload = function(){

    //Focus the input
    $("userInput").focus();

    //Numbers buttons
    $("oneBtn").onclick = simpleBtnClicked;
    $("twoBtn").onclick = simpleBtnClicked;
    $("threeBtn").onclick = simpleBtnClicked;
    $("fourBtn").onclick = simpleBtnClicked;
    $("fiveBtn").onclick = simpleBtnClicked;
    $("sixBtn").onclick = simpleBtnClicked;
    $("sevenBtn").onclick = simpleBtnClicked;
    $("eightBtn").onclick = simpleBtnClicked;
    $("nineBtn").onclick = simpleBtnClicked;
    $("zeroBtn").onclick = simpleBtnClicked;

    // Buttons  + - / * 
    $("plusBtn").onclick = simpleBtnClicked;
    $("minusBtn").onclick = simpleBtnClicked;
    $("multiplyBtn").onclick = multiplyBtnClicked;
    $("divideBtn").onclick = divideBtnClicked;

    // Dot and brackets 
    $("dotBtn").onclick = simpleBtnClicked;
    $("leftBracketBtn").onclick = simpleBtnClicked;
    $("rightBracketBtn").onclick = simpleBtnClicked;

    //Delete buttons
    $("eraseBtn").onclick = eraseInput;
    $("deleteBtn").onclick = deleteLastIput;
};



//All button clicks where button content fully corresponds to operation input needed
function simpleBtnClicked(){
    //Get access to input field
    var inputField =  $("userInput");

    //Get the number corresponding to the id
    var number = this.firstElementChild.innerHTML;

    //Writing the number into the input field
    inputField.value += number;

    //After button input, put focus on input line
    $("userInput").focus();
};

//Function that handles Multiply button click
function multiplyBtnClicked(){
    //Get access to input field 
    var inputField =  $("userInput");

    //Writing multiply sign into the input field
    inputField.value += "*";

    //After button input, put focus on input line
    $("userInput").focus();
};

//Function that handles Multiply button click
function divideBtnClicked(){
    //Get access to input field 
    var inputField =  $("userInput");

    //Writing multiply sign into the input field
    inputField.value += "/";

    //After button input, put focus on input line
    $("userInput").focus();
};

//Clear the input
function eraseInput(){  
    $("userInput").value = "";
};


//Delete last value or sign entered into the input field
function deleteLastIput(){
    //Get access to input field 
    var inputField =  $("userInput").value;

    //Check if input field isn't empty
    if(inputField.length > 0)
    {
        //This expression is getting a substring of the input that already exists without the last input
        var res = inputField.substring(0, inputField.length - 1);

        //Saving result in input 
        $("userInput").value = res;

        //If the resulting input if not empty, leaving focus on input
        if(res.length > 0)
        {
            $("userInput").focus();
        }
        
    }
    
}