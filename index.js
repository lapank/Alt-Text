
const maxChar = 160;
const count = document.getElementById('count');

let charCount = e => {
  const keyName = e.key;
  let altText = document.getElementById('altText').value.length;
  countColor(altText);
  count.innerHTML = altText;
  
}

let countColor = (altText) =>{
  switch (true) {
    case (altText > 100 && altText <= 140):
      count.style.color = 'gold';
      break;
    case (altText > 140 && altText <= maxChar):
      count.style.color = 'red';
      break;
    default:
      count.style.color = 'green';
  }
} 

document.addEventListener('keyup', charCount);