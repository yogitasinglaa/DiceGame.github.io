
function game() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const randomImage = "Dicey-" + randomNumber1 + ".png";
  const randomImage2 = "Dicey-" + randomNumber2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImage);
  document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
   const h1= document.querySelector('h1');
  if (randomNumber1 > randomNumber2) 
  {
     h1.innerText = `Player 1 is winner!!`;
  } 
  else if (randomNumber1 < randomNumber2)
 {
    h1.innerText = 'Player 2 is winner!!'
  }
  else{
    h1.innerText = "Oops... It's a draw!!";
  }
}
const btn = document.querySelector("button");
btn.addEventListener("click", game);
