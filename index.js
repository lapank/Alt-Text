
const maxChar = 150;
const count = document.getElementById('count');

const color = document.getElementById('color');

let click = false;
successPunct = document.getElementById('sucpunct');
let firstChar = true;
let upperCaseFound = false;

let found = false;
//let punctCount = 0;

let textClick = e => {
  if (click == false){
    document.getElementById('altText').value = '';
    click = true;
  }
  else{return}
}






function charCount (e) {
  const keyName = e.key;
  
  let textLength = document.getElementById('altText').value.length;
  let textValue = document.getElementById('altText').value;
  testCompleteSentence(textValue, textLength);
  

  countColor(textLength);
  count.innerHTML = textLength + "/" + maxChar;

  testPerspective(textValue);

  tenseCheck(textValue);

}


    

let countColor = (altCount) =>{
  switch (true) {
    case (altCount > 100 && altCount <= 125):
      count.style.color = 'orange';
      break;
    case (altCount > 125 && altCount <= maxChar):
      count.style.color = 'red';
      break;
    default:
      count.style.color = 'green';
  }
} 



document.addEventListener('keyup', charCount);
document.addEventListener('click', textClick);

//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.border = '#DFDFDF solid';
    } 
  });
}

/*flags*/


/*
             ,,,                                     
            (0 0)                                   
      ---ooO-(_)-Ooo---
      Kaylin was here.
*/

//do not repeat text accompanying image
//use third person unless using embodiment technique with 'you' to instruct user to do somethign or imagine something.
//Subject, action, context.  A _____ does something from somewhere.
//Use plain speech.
//Do not use "This is an image/picture/photograph of...""
//transcribe text that appears in image surrounded by quotes.  Illegible portions in brackets []
//Use metric system for measurments
//relate size of elements in image to other elements of image or real life items.
//condition of specimen
//use name of individual is smithsonian staff, person of note, or celebrity, do not identify anyone else.
//say race if varified, do not assume.
//describe if someone is in a wheel chair or using crutches.
//use metaphors "shaped like a___"
//if the caption or description pared with the image describes the image perfectly, don't include alt text.

//BUGS
//complete sentences add check for capital leters.
//transform arrays to include spaces and capital letters 








