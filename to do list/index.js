const itemsArray = localStorage.getItem('items')? JSON.parse(localStorage.getItem("items")):
[]
document.querySelector("#enter").addEventListener("click",()=>{
    const item = document.querySelector("#item");
    createItem(item)
})
function displayItems(){
    let items = ""
    for(let i= 0;i< itemsArray.length;i++){
    items+= `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray[i]}</textarea>
                  <div class="edit-controller">
                    <i class="fa-solid fa-check deleteBtn"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
    }
    document.querySelector(".to-do-list").innerHtml=items
}


function createItem(item){
    itemsArray.push(item.value);
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}

console.log(itemsArray)
function displayDate(){
    let date = new Date();
    console.log(date);
    date = date.toString().split(" ");
    console.log(date);date
    document.querySelector('#date').innerHTML= date[1]+' '+date[2]+' '+date[3];
}
window.onload = function(){
    displayDate();
    displayItems()
}