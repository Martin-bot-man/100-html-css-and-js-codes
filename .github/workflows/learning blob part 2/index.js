const input = document.querySelector("input");
input.addEventListener('change',()=>{
    console.log(input.files[0])
})