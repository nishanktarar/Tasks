let h1=document.querySelector("h1");
let incBtn=document.getElementById("inc");
let decBtn=document.getElementById("dec");
let count=0;

incBtn.addEventListener("click",()=>{
    count++;
    h1.innerText=count;
});
decBtn.addEventListener("click",()=>{
     count--;
    if (count<=0) count=0;
    h1.innerText=count;
});
incBtn.addEventListener("mouseenter",()=>{
   inc.style.color="green";
    inc.style.backgroundColor="lightgreen";
});
incBtn.addEventListener("mouseout",()=>{
    inc.style.color="white";
    inc.style.backgroundColor="grey";
});
decBtn.addEventListener("mouseenter",()=>{
    dec.style.color="red";
    dec.style.backgroundColor="lightcoral";
});
decBtn.addEventListener("mouseout",()=>{
    dec.style.color="white";
    dec.style.backgroundColor="grey";
});

