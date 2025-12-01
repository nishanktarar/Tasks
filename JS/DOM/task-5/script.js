let img=document.querySelector('img');
let like=document.querySelector('#like');

img.addEventListener("click",function(){
    console.log('hello');
});
img.addEventListener("dblclick",function(){
     like.style.opacity="1";
     like.style.transform= "translate(-50%,-50%) scale(1) rotate(0deg)";

     setTimeout(function(){
        like.style.transform= "translate(-50%,-300%) scale(0) rotate(65deg)";
        
     },800);
     setTimeout(() => {
       like.style.opacity="0";
        }, 1000);
     setTimeout(() => {
        like.style.transform= "translate(-50%,-50%) scale(1) rotate(0deg)"
     }, 1200);

});


