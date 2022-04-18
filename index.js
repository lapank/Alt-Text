
const maxChar = 150;
const count = document.getElementById('count');
const punct = document.getElementById('punct');
const color = document.getElementById('color');
const punctuation =[',','.',';',':','-','!','"',"'",'(',')','?'];
const colorList = ['red', 'orange', 'yellow', 'green', 'blue','purple', 
                  'pink', 'brown', 'gold', 'bronze', 'silver', 'black', 'white'];
const planeParts = ['wing', 'body', 'tail', 'wheels', 'engine', 'nose', 'cockpit'];
const shapes = ['circle', 'triangle', 'rectangle', 'oval', 'square', 'pentagon', 
                  'hexagon', 'octagon', 'cube', 'cone', 'cylinder', 'sphere'];
const pronouns = [' he ', ' him ', ' his ', ' she ', ' her ', ' hers ', ' man ', ' woman ', ' lady ', ' gentlemen ', 'guy', 'gal', 'man', 'woman'];
const emotions = ['happy', 'sad', 'angrey', 'solumn', 'serious'];
const thirdPerson = ['it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves'];
const firstPerson = ['I ',' me ','Me ',' my ','My ',' mine ', 'Mine ',' we ', 'We ' ,' us ', 'Us ',' our ', 'Our ',' ours ', 'Ours '];
const secondPerson = ['You ',' you ','Your ',' your ','Yours ',' yours ','You\'re ',' you\'re '];
const positions = ['left', 'right', 'top', 'bottom', 'around', 'under', 'below', 
                  'behind', 'beside', 'between', 'after', 'across', 'inside', 
                  'near', 'on', 'outside', 'forward', 'backward', 'side', 'top'];
const size = ['big', 'small', 'tall', 'wide', 'short', 'large', 'heavy', 
            'light', 'thin', 'thick', 'long', 'narrow', 'meters', 'feet', 'inches', 'centemeters'];
const medium = ['radiograph', '3D model', 'drawing, painting', '35mm slide', 'print', 'scientific illustration'];
const condition = ['rips', 'tears', 'flaking', 'marks', 'weathered', 'shiny'];
const age = ['young adult', 'adult', 'child', 'infant'];
const noNoWords = ['elderly', 'image of', 'picture of', ' I ', "we", 'our', 'my', 'me'];

let found = false;
//let punctCount = 0;

let charCount = e => {
  const keyName = e.key;
  let altCount = document.getElementById('altText').value.length;
  let altChar = document.getElementById('altText').value;
  //punctCheck(altChar);
  countColor(altCount);
  count.innerHTML = altCount + "/" + maxChar;
  display(personCheck(altChar, firstPerson), firstPer);
  display(personCheck(altChar, secondPerson), secondPer);
  //display(personCheck(altChar, thirdPerson), thirdPerson);
  console.log(compareText(altChar, thirdPerson),thirdPer);
  //display(colorCheck(altChar), color);
  display(compareText(altChar, colorList),color);
  //display(punctCheck(altChar), punct);
  display(compareText(altChar, punctuation),punct);
  //display(genderCheck(altChar), gender);
  display(compareText(altChar, pronouns),gender);
}

function display(func,id){
  if(func){
    console.log('yes entered');
    id.innerHTML = "Yes";
    console.log(id.innerHTML);
  }else{
    console.log('no entered');
    id.innerHTML = "No";
  }  
}
let countColor = (altCount) =>{
  switch (true) {
    case (altCount > 100 && altCount <= 125):
      count.style.color = 'gold';
      break;
    case (altCount > 125 && altCount <= maxChar):
      count.style.color = 'red';
      break;
    default:
      count.style.color = 'green';
  }
} 
/*
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
*/

/*
function colorCheck(text) {
  //let colorCount = 0;
  for(let i= 0; i < colorList.length; i++){
    let index = text.search(colorList[i]);
    if(index != -1){
      return true;
    }
  }
  return (false);
}
*/

function personCheck(text, wordList){
  for(let i= 0; i < wordList.length; i++){
    let index = text.search(wordList[i]);
    //console.log(wordList[i]);
    //console.log(index);
    if(index != -1){
      return true;
    }
  }
  return (false);
}

/*
function genderCheck(text){
  for(let i= 0; i < pronouns.length; i++){
    let index = text.search(pronouns[i]);
    if(index != -1){
      return true;
    }
  }
  return (false);
}
*/

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







