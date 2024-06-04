"use strict"


const hello = document.getElementById("hello");
const input1 = document.getElementById("input1");
const paragraphOutput = document.getElementById("paragraphOutput");


window.onload = function(){
    hello.innerHTMl = "Hello Class";
    input1.oninput = onInput1Input

}


function onInput1Input() {
    paragraphOutput.InnerHTMl += "<br>";
    paragraphOutput.innerHTML += input1.value;

}

