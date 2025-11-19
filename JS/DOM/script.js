let h1=document.querySelector("h1");
let incBtn=document.getElementById("inc");
let decBtn=document.getElementById("dec");
let count=0;

incBtn.addEventListener("click",()=>{
    count++;
    h1.innerText=count;
    inc.style.color="green";
    inc.style.backgroundColor="lightgreen";
});
decBtn.addEventListener("click",()=>{
    count--;
    h1.innerText=count;
    dec.style.color="red";
    dec.style.backgroundColor="lightcoral";
});
