
const maxChar = 150;
const count = document.getElementById('count');
const punct = document.getElementById('punct');
const color = document.getElementById('color');
const punctuation =['.','!','?'];
const colorList = ['red', 'orange', 'yellow', 'green', 'blue','purple', 
                  'pink', 'brown', 'gold', 'bronze', 'silver', 'black', 'white'];
const planeParts = ['wing', 'body', 'tail', 'wheels', 'engine', 'nose', 'flightdeck'];
const shapes = ['circle', 'triangle', 'rectangle', 'oval', 'square', 'pentagon', 
                  'hexagon', 'octagon', 'cube', 'cone', 'cylinder', 'sphere'];
const pronouns = [' he ', ' him ', ' his ', ' she ', ' her ', ' hers ', ' man ', ' woman ', ' lady ', ' gentlemen ', 'guy', 'gal', 'man', 'woman'];
const emotions = ['happy', 'sad', 'angrey', 'solumn', 'serious'];
const thirdPerson = ['it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves'];
const firstPerson = ['I ',' me ','Me ',' my ','My ',' mine ', 'Mine ',' we ', 'We ' ,' us ', 'Us ',' our ', 'Our ',' ours ', 'Ours '];
const secondPerson = ['You ','yall','ya\'ll',' you ','Your ',' your ','Yours ',' yours ','You\'re ',' you\'re '];
const positions = ['left', 'right', 'top', 'bottom', 'around', 'under', 'below', 
                  'behind', 'beside', 'between', 'after', 'across', 'inside', 
                  'near', 'on', 'outside', 'forward', 'backward', 'side', 'top'];
const size = ['big', 'small', 'tall', 'wide', 'short', 'large', 'heavy', 
            'light', 'thin', 'thick', 'long', 'narrow', 'meters', 'feet', 'inches', 'centemeters'];
const medium = ['radiograph', '3D model', 'drawing, painting', '35mm slide', 'print', 'scientific illustration'];
const condition = ['rips', 'tears', 'flaking', 'marks', 'weathered', 'shiny'];
const age = ['young adult', 'adult', 'child', 'infant'];
const noNoWords = ['elderly', 'image of', 'picture of', ' I ', "we", 'our', 'my', 'me']; /* poster text*/
const tenseList = ['ing', 'been', 'will', 'was', 'had'];

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


//Complete sentence check
//First letter is capitalized
//Ending punctuation found
//First character cannot be punctuation
//If capital or punctuation is removed fail status
//First letter after punctuation must be capital

function testCompleteSentence(char, text, puncList){
  lastChar = text.length;
  let puncFound = false;
  let puncIndex = 1000;
  let capAftPunc = false;

  //Check first character is capital
  if(text[0]!=null && text[0] != ' ' && text[0] == text[0].toUpperCase()){
        upperCaseFound = true;
        console.log('pass, first char is capital');
      }else{
        upperCaseFound = false;
        console.log('fail, first char is not capital');
      }

    //Check if last character is punctuation.

    

//Check middle capitals and punctuations
  for (let i = 0; i < puncList.length; i++) {
    for(let j = 0; j < lastChar; j++){
      if (text[lastChar-1] == puncList[i]) {
        console.log('Pass, last char is punc');
      }
      if(text[j] == puncList[i]){
        puncFound = true;
        puncIndex = j;
        console.log('punc found');
      }
      //check first letter in next 3 characters is uppercase
      if (j <= puncIndex + 3 && j != puncIndex) {
        //First char must be space
        if(j == (puncIndex + 1) && text[j] != ' '){
          console.log('fail, no space after end punc.');
          //second char must be space or capital
        }else if(j == (puncIndex + 2)) {
          if(text[j] == ' '){
            console.log('second char is space');
          }
          //A .toUpperCase on a space is a match
          else if(text[j] != ' ' && text[j] == text[j].toUpperCase()){
            console.log('second char is uppercase');
            capAftPunc = true;
          }else{
            console.log('fail, second char is not a space or capital');
          }
          
        }else if(j == (puncIndex + 3)) {
          console.log(capAftPunc);
          if(!capAftPunc){
            console.log(capAftPunc);
            if(text[j] == ' '){
              console.log('Fail, no cap and 3rd space is space');
            }else if(text[j] == text[j].toUpperCase()){
              console.log('pass, first cap at 3rd space');
            }else{
              console.log('fail, no capital in first 3 spaces.');
            }
          }else if(capAftPunc){
            console.log(capAftPunc);
            if(text[j] == ' '){
              console.log('Pass, uppercase occures before this space');
            }else{
              console.log('pass, a capital already exists');
            }
          }
          
          //A .toUpperCase on a space is a match so != space is required
          else if(text[j] != ' ' && text[j] == text[j].toUpperCase()){
            console.log('second char is uppercase');
            capAftPunc = true;
          }
        }
          
        
      }
    }
  }
}



let charCount = e => {
  const keyName = e.key;
  
 
  let altCount = document.getElementById('altText').value.length;
  let altChar = document.getElementById('altText').value;
  
  testCompleteSentence(keyName, altChar, punctuation);
  countColor(altCount);
  count.innerHTML = altCount + "/" + maxChar;
  if(compareText(altChar, firstPerson) || compareText(altChar, secondPerson)){
    displayWarningMatch(true, perspect, false);
  }else{
    displayWarningMatch(false, perspect, false);
  }
  displaySuccessMatch(compareText(altChar, colorList),color, true);
  if (upperCaseFound) {
    displaySuccessMatch(compareText(altChar, punctuation),punct, false);
  }else{
    displaySuccessMatch(false,punct, false);
  }
  displayFailMatch(compareText(altChar,tenseList),tense,true);
  displayWarningMatch(compareText(altChar, pronouns),gender,true);
}

function displaySuccessMatch(func,id,warning){
  id.classList.remove('hide');
  if(func){
    id.innerHTML = "Pass";
    id.style.backgroundColor = '#28A745';
    id.style.color = '#FFF';
  }else{
    if(warning){
      id.innerHTML = "Review";
      id.style.backgroundColor = '#FFC107';
      id.style.color = '#343A40';
    }
    else{
      id.innerHTML = "Fail";
      id.style.backgroundColor = '#DC3545';
      id.style.color = '#FFF';
    }
    
  }  
}

function displayFailMatch(func,id,warning){
  id.classList.remove('hide');
  if(func){
    id.innerHTML = "Fail";
      id.style.backgroundColor = '#DC3545';
      id.style.color = '#FFF';
    
  }else{
      id.innerHTML = "Review";
      id.style.backgroundColor = '#FFC107';
      id.style.color = '#343A40';
    }
  } 

function displayWarningMatch(func,id,warning){
  id.classList.remove('hide');
  if(func){
    id.innerHTML = "Review";
    id.style.backgroundColor = '#FFC107';
    id.style.color = '#343A40';
    
  }else{
    id.innerHTML = "Pass";
    id.style.backgroundColor = '#28A745';
    id.style.color = '#FFF';
  }
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

function compareText(text, wordList){
  for(let i= 0; i < wordList.length; i++){
   let index = text.indexOf(wordList[i]);
    if(index != -1){
      return true;
    }
  }
  return (false);
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








