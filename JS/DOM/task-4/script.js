let grow=0;
let btn=document.querySelector('button');
let h2=document.querySelector('h2');
let inr=document.querySelector('.inner');
btn.addEventListener('click',function(){
    btn.style.pointerEvents='none';
    let num=50+Math.floor(Math.random()*50);
    let int=setInterval(() => {
        grow++;
        h2.innerHTML=grow+'%';
        inr.style.width=grow+'%';
    }, num);
   setInterval(()=>{
        clearInterval(int);
        btn.innerHTML='Downloaded';
        btn.style.opacity=0.8
        console.log("Your song downloaded in "+num/10+" seconds.")
   },num*100)

});