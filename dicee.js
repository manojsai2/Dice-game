
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice"+randomNumber1+".png";

var randomimagesource="images/"+randomdiceimage;

var image1=document.querySelector("img.img1").setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomdiceimage2="dice"+randomNumber2+".png";

var randomimagesource2="images/"+randomdiceimage2;

var image2=document.querySelector("img.img2").setAttribute("src",randomimagesource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩player 1 Wins! ";

}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}





