"use strict";

function $(id) {
    return document.getElementById(id);
}


window.onload = function () {

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

    //$("percentBtn").onclick = getCaret;


};

function evaluate() {
    //Get the expression from the input field
    var inputField = $("userInput").value;

    //Write the result to the output field
    $("resultOutput").innerText = eval(inputField);

    //After button input, put focus on input line
    $("userInput").focus();
}


//All button clicks where button content fully corresponds to operation input needed
function simpleBtnClicked() {
    //Get access to input field
    var inputField = $("userInput");

    //Get the number corresponding to the id
    var number = this.firstElementChild.innerHTML;

    //Writing the number into the input field
    putSymbbolOnPosition(number, getCaretPosition());
};

//Function that handles Multiply button click
function multiplyBtnClicked() {
    //Get access to input field 
    var inputField = $("userInput");

    //Writing multiply sign into the input field
    putSymbbolOnPosition("*", getCaretPosition());
};

//Function that handles Multiply button click
function divideBtnClicked() {
    //Get access to input field 
    var inputField = $("userInput");

    //Writing divide sign into the input field
    putSymbbolOnPosition("/", getCaretPosition());
};

//This method is writing the synbol into the required position in input field
function putSymbbolOnPosition(symbol, position) {
    var input = $("userInput").value;
    var result = input.slice(0, position) + symbol + input.slice(position);
    $("userInput").value = result;

    //Moving caret forward by 1
    setCaretPosition(position + 1);
}

//Clear the input
function eraseInput() {
    $("userInput").value = "";
};


//Delete last value or sign entered into the input field
function deleteLastIput() {

    //Get access to input field 
    var userInput = $("userInput").value;
    var caretPosition = getCaretPosition();

    //Check if input field isn't empty
    if (userInput.length > 0 && caretPosition > 0) {

        //If caret is in the end, delete last element
        if (caretPosition == userInput.length) {

            $("userInput").value = userInput.substring(0, userInput.length - 1);

            //If the resulting input if not empty, leaving focus in the end of the input
            if (userInput.length > 0) {
                $("userInput").focus();
            }
        } else {
            //Deleting the element behind the caret
            $("userInput").value = userInput.slice(0, caretPosition - 1) + userInput.slice(caretPosition, userInput.length);

            //Leaving caret in the same position
            setCaretPosition(caretPosition - 1);
        }

    }

};

//This method returns the position of the cursor at the moment
function getCaretPosition() {
    var myElement = $('userInput');
    var startPosition = myElement.selectionStart;
    return startPosition;
}


//This method is setting the cursor to required position in the input 
function setCaretPosition(caretPos) {
    var element = $("userInput");

    //If element exists, puting caret to position
    if (element != null) {
        if (element.createTextRange) {
            var range = element.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if (element.selectionStart) {
                element.focus();
                element.setSelectionRange(caretPos, caretPos);
            }
            else
                element.focus();
        }
    }
}