var randomnumber1=Math.floor(Math.random()*6+1);
document.querySelector(".player1dice").setAttribute("src","./images/dice"+randomnumber1+".png");
var randomnumber2=Math.floor(Math.random()*6+1);
document.querySelector(".player2dice").setAttribute("src","./images/dice"+randomnumber2+".png");
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerText="🚩Player 1 Wins!";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerText="🚩Player 2 Wins!";
}
else if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerText="Draw!";
}