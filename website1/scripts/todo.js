"use strict"

console.log("todo");
const apiBasedUrl = "https://jsonplaceholder.typicode.com/todo/1"

window.onload = function() {
    const getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.onclick = onGetResultsButtonClick;
};


function onGetResultsButttonClick(){
    console.log("clicked");

    const todoId = document.getElementById("todoid");
    const todoResult = document.getElementById("todoResult");

    let actualUrl = apiBasedUrl + todoResult.value;

    console.log("URL: " + actualUrl);

    fetch(actualUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for( let data of data.title){
            let p = document.createElement("p");
            p.innerHTML = data.title;

            resultsOutput.appendChild(p);
        }
    })

}
