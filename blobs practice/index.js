const selector = document.querySelector("a");
const data = "I love my mother";

const blob = new Blob([data],{type:"text/plain"});
const url = URL.createObjectURL(blob);
console.log(url);

