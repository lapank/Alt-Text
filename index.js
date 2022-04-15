
const maxChar = 160;
const count = document.getElementById('count');
const punct = document.getElementById('punct');
const color = document.getElementById('color');
const punctuation =[',','.',';',':','-','!','"',"'",'(',')','?'];
const colorList = ['aqua','beige','black','blue','brown','dark blue', 'dark gray', 
              'dark green', 'dark purple', 'dark red', 'dark orange', 'gold',
              'gray', 'green', 'light gray', 'light green', 'light blue', 
              'maroon', 'orange', 'pink', 'red','white','yellow']
let found = false;
//let punctCount = 0;

let charCount = e => {
  const keyName = e.key;
  let altCount = document.getElementById('altText').value.length;
  let altChar = document.getElementById('altText').value;
  punctCheck(altChar);
  count.innerHTML = altCount;
  if(colorCheck(altChar)){
    color.innerHTML = "Yes";
  }else{
    color.innerHTML = "No";
  }
  if(punctCheck(altChar)){
    punct.innerHTML = "Yes";
  }else{
    punct.innerHTML = "No";
  }  
}

let countColor = (altCount) =>{
  switch (true) {
    case (altCount > 100 && altCount <= 140):
      count.style.color = 'gold';
      break;
    case (altCount > 140 && altCount <= maxChar):
      count.style.color = 'red';
      break;
    default:
      count.style.color = 'green';
  }
} 

let punctCheck = (text) => {
  let punctCount = 0;
  for(let i= 0; i < punctuation.length; i++){
    for(let j = 0; j < text.length; j++){
      if(punctuation[i] == text[j]){
        return(true);
      }
    }
  }
  return (false);
}

function colorCheck(text) {
  console.log(text);
  let colorCount = 0;
  for(let i= 0; i < colorList.length; i++){

    let index = text.search(colorList[i]);
    console.log(colorList[i]);
    console.log(found);
    if(index != -1){
      return true;
    }
  }
  return (false);
}

document.addEventListener('keyup', charCount);

/*
             ,,,                                     
            (0 0)                                   
      ---ooO-(_)-Ooo---
      Kaylin was here.
*/