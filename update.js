console.log("update.js loaded");

document.addEventListener("DOMContentLoaded", function() {
    console.log("update.js updating dom");
    var className = document.getElementById("downloadButton").className;
    className += " extraClass";
    document.getElementById("downloadButton").className = className;
});
