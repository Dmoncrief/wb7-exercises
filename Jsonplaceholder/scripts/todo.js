"use strict";

console.log("todo");
const apiBasedUrl = "https://jsonplaceholder.typicode.com/todo/1";

window.onload = function() {
    const getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.onclick = onGetResultsButtonClick;
};

function onGetResultsButtonClick(){
    console.log("clicked");

    const todoId = document.getElementById("todoid").value;
    const todoResult = document.getElementById("todoResult");

    let actualUrl = apiBasedUrl + todoId;

    console.log("URL: " + actualUrl);

    fetch(actualUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let p = document.createElement("p");
        p.innerHTML = data.title;
        todoResult.appendChild(p);
    });
}

