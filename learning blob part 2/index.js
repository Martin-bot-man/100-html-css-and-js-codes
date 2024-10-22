const input = document.querySelector("input");
input.addEventListener('change',()=>{
    console.log(input.files[0]);

    //create url
 
    const url = URL.createObjectURL(input.files[0]);
    console.log(url);

    //display the image
    const img = new Image();
    img.src = url;
    img.onload = ()=>{
        document.body.appendChild(img);
    }
    
})   