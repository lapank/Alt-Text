
const maxChar = 160;
const count = document.getElementById('count');
const punct = document.getElementById('punct');
const punctuation =[' ',',','.',';',':','-','!','"',"'",'(',')'];

let charCount = e => {
  const keyName = e.key;
  let altText = document.getElementById('altText').value.length;
  countColor(altText);
  count.innerHTML = altText;
  if (punctCheck(keyName)){
    punct.innerHTML = "Yes";
  }
  
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

let punctCheck = keyName => {
  let found = false;
  for(let i= 0; i < punctuation.length; i++){
    if(punctuation[i] == keyName){
      found = true;
    }
  }
  return (found);
  
}

document.addEventListener('keyup', charCount);