
let score = 0;
let flag=0;
let rn1 = Math.floor(Math.random() * 9) + 1;
  let rn2 = Math.floor(Math.random() * 9) + 1;
  let rn3 = Math.floor(Math.random() * 9) + 1;
  
  while(rn1===rn2||rn2===rn3||rn1===rn3)
  {
    if(rn1===rn2)
    rn1 = Math.floor(Math.random() * 9) + 1;
    else if(rn1===rn3)
    rn1 = Math.floor(Math.random() * 9) + 1;
    else
    rn2 = Math.floor(Math.random() * 9) + 1;
  }
console.log(rn1,rn2,rn3);
for(let i=1;i<=9;i++)
{
  if(rn1!=i && rn2!=i && rn3!=i)
  {
    let element = document.getElementById(i+"");
    element.classList.add("hide");
    element.classList.remove("unhide");
  }
}

let rn4;
function updatescore()
{
  score = score+2;
}
  
function randomgen()
{
rn4 = Math.floor(Math.random() * 9) + 1;

}
function check()
{
  
  console.log(document.querySelectorAll(".sphere.unhide"));
  while(rn4 == document.querySelectorAll(".sphere.unhide")[0].id||rn4 == document.querySelectorAll(".sphere.unhide")[1].id||rn4 == document.querySelectorAll(".sphere.unhide")[2].id)
  {
  // console.log("Inside");
  rn4 = Math.floor(Math.random() * 9) + 1;
  }
  console.log(rn4);
  document.getElementById(rn4).classList.remove("hide");
  document.getElementById(rn4).classList.add("unhide");
  document.getElementById(rn4).addEventListener("click", clickHandler);
}

function clickHandler() {
  
  setTimeout(()=>{
    alert("Time Up!!");
    alert("Score: "+score);
    score=0;
    
    flag=1;
    return;
  },60000)
  if (flag) {
    console.log("Inside1");
    return; // Stop executing the function
  }
  randomgen();
  check();
  updatescore();
  document.getElementById(this.id).classList.add("hide");
  let audio = new Audio("./sounds/QKTA234-pop.mp3");
  audio.play();
  document.getElementById(this.id).classList.remove("unhide");

  this.removeEventListener("click", clickHandler);
  
  
  

}


for(let i=0;i<document.querySelectorAll(".sphere.unhide").length;i++)
{ 
  document.querySelectorAll(".sphere.unhide")[i].addEventListener("click", clickHandler);
  
  
}


console.log(document.querySelectorAll(".sphere.unhide"));


