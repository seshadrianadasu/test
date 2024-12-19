
const input=document.getElementById("input");
const btn =document.getElementById("result");
const content=document.getElementById("final");
btn.addEventListener('click',()=>{
    const inputvalue=parseInt(input.value)
    if(isNaN(inputvalue)){
        content.textContent="enter any one number";
    }
    else if (inputvalue < 0){
        content.textContent= "enter positive number";
    }
    else if(inputvalue % 2 ===0){
        content.textContent=`even numbers ${inputvalue+2},${inputvalue+4},${inputvalue+6}`;
    }
    else{
        content.textContent=`odd numbers ${inputvalue+2},${inputvalue+4},${inputvalue+6}`;
    }
});



