let btn=document.querySelector("button");
let main=document.querySelector("main");

btn.addEventListener("click",function(){
    // let div=document.createElement("div");
    // div.style.width="100px";
    // div.style.height="100px";
    // div.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    // div.style.margin="10px";
    // div.style.position="absolute";
    // div.style.top=`${Math.floor(Math.random()*100)}%`;
    // div.style.left=`${Math.floor(Math.random()*100)}%`;
    // div.style.rotate=`${Math.floor(Math.random()*360)}deg`;
    // main.appendChild(div);


    let sentences = [
  "The sky is clear today.",
  "I love learning new things.",
  "Coding becomes fun with practice.",
  "The garden is full of fresh flowers.",
  "She enjoys listening to music.",
  "He drinks coffee every morning.",
  "The cat is sleeping on the sofa.",
  "We are planning a weekend trip."
];
 let x=Math.floor(Math.random()*sentences.length);
 let h1=document.createElement('h1');
 h1.innerHTML=sentences[x];
 main.appendChild(h1);
 h1.style.color=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
 h1.style.position="absolute";
 h1.style.top=`${Math.floor(Math.random()*100)}%`;
 h1.style.left=`${Math.floor(Math.random()*100)}%`;
 h1.style.rotate=`${Math.floor(Math.random()*360)}deg`;
 h1.style.scale=`${Math.floor(Math.random()*10)}`;
});