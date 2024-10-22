const a = document.querySelector("a");
const data = "I love both my mother and my father so much"
 
const blob = new Blob([data],{type:"text/plain"}); 
const url = URL.createObjectURL(blob);
console.log(url);
a.href = url;
a.download = "Martin.pdf";
a.click()