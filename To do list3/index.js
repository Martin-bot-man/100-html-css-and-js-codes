const itemsArray = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
document.getElementById("enterbtn").addEventListener("click",()=>{
   const itemValue = document.getElementById("item")
    itemValue = item.value;
itemsArray.push(itemValue);
localStorage.setItem('itemsArray',JSON.stringify(itemsArray))
} )





function displayDate(){
   let date = new Date();
   date = date.toString().split(" ");
   date = date[0]+' '+date[1]+' '+date[2]+" "+date[3];
document.getElementById('time').textContent = date;

}
displayDate()
