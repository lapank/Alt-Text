
const maxChar = 160;
const lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const capLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const punctuation =[' ',',','.',';',':','-','!','"',"'",'(',')'];
const altText = document.getElementById('altText').value.length;
const charCount = document.getElementById('charCount');
let count = 0;

let countChar = (array, keyName) => {
  for(let i= 0; i < array.length; i++){
    if(array[i] == keyName){
      console.log("go team");
      let found = true;
      count +=1;
    }
  }
  if(count > maxChar){
    charCount.innerHTML = maxChar;
  }
  else{
    charCount.innerHTML = count;
  }
  
}

let charAdded = e => {
  const keyName = e.key;
  countChar(punctuation, keyName);
  countChar(lowLetters, keyName);
  countChar(capLetters, keyName);
  
}

document.addEventListener('keyup', charAdded);


//detect length of pasted text
//delete text as user deletes characters