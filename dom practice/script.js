const date= document.getElementById("date")

 function displayDate(){
    const newDate = new Date();
    date.textContent = newDate. toLocaleString();
 }
 displayDate();
 setInterval(displayDate, 1000);

const addbtn = document.getElementById("add-button")
addbtn.addEventListener('click' ,function addItem(){
inputvalue = document.getElementById('input-text').value;
if(inputvalue!==''){
const list = document.createElement("li")
const ul = document.getElementById("list-container")
ul.appendChild(list)
console.log(inputvalue);
list.textContent = inputValue;

//clear the input field
document.getElementById('input-text').value='';
}
})