
const maxChar = 160;
const count = document.getElementById('count');

let charCount = e => {
  const keyName = e.key;
  let altText = document.getElementById('altText').value.length;
  count.innerHTML = altText;
  
}

document.addEventListener('keyup', charCount);

//detect length of pasted text
//delete text as user deletes characters
//don't allow enter key