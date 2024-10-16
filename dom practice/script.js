const addbtn = document.getElementById("add-button")
addbtn.addEventListener('click' ,function addItem(){
inputvalue= document.getElementById('input-text')
if(!input.value==''){
const list = document.createElement("li")
const ul = document.getElementById("ul")
ul.appendChild(list)
list.textContent = inputValue;

}
})