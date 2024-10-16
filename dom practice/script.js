const addbtn = document.getElementById("add-button")
addbtn.addEventListener('click' ,function addItem(){
inputvalue = document.getElementById('input-text').value;
if(inputvalue!==''){
const list = document.createElement("li")
const ul = document.getElementById("list-container")
ul.appendChild(list)
list.textContent = inputValue;

//clear the input field
document.getElementById('input-text').value='';
}
})