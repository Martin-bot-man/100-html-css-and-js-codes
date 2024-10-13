// // const addButton= document.querySelector(".add");
// // const subtractButton =document.querySelector(".subtract");
// // const MultiplyButton=document.querySelector(".subtract");
// // const DivideButton =document.querySelector(".subtract");
// const clearButton  =document.querySelector(".clear");
// const resultDisplay = document.querySelector("calculator")
// const operatorButtons = document.querySelectorAll(".operator_button");
// const numberButtons =document.querySelectorAll(".number-button")
// let currentInput = "";
// let operator = null;


// function updateDisplay(){
//     resultDisplay.textContent = currentInput;
// }
// numberButtons.forEach(button => {
//     addEventListener("click", ()=> {
//         currentInput += button.textContent;
//         updateDisplay();
//     });
// });
// operatorButtons.forEach(button => {
//     addEventListener("click",()=> {
//         if(currentInput!== ""){
//             operator=button.textContent;
//             currentInput +=`${operator}`;
//             updateDisplay();
//         }
//     })
// })
