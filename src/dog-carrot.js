function getRandomIntInclusive() {
  const max = 9;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
const elements = document.querySelectorAll('img');
let lastCell = null;
function showRandomCarrot() {
  if(lastCell !== null){
    lastCell.classList.remove("visible")
  };

  let rnd = getRandomIntInclusive();
  lastCell = elements[rnd - 1];
  lastCell.classList.add("visible");

  setTimeout(showRandomCarrot, 1000);
}
showRandomCarrot();

const click = document.querySelector('.grid-container');
// let count = document.querySelector('.floating-box');
let currentCount = 0;
// currentCount.classList.add(".floating-box");
function clickHandler(event) {
  let target = event.target;
  if(target.childNodes[0].classList.contains("visible")){
   currentCount++;
   
  };
  console.log(currentCount);
};

click.onclick = clickHandler;
// let counter
// counter.classList.add(".floating-box")
// const counter = document.querySelector('.floating-box');

const update = currentCount;
el.innerHTML = update; 
