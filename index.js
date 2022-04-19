
const maxChar = 150;
const count = document.getElementById('count');
const punct = document.getElementById('punct');
const color = document.getElementById('color');
const punctuation =[',','.',';',':','-','!','"',"'",'(',')','?'];
const colorList = ['red', 'orange', 'yellow', 'green', 'blue','purple', 
                  'pink', 'brown', 'gold', 'bronze', 'silver', 'black', 'white'];
const planeParts = ['wing', 'body', 'tail', 'wheels', 'engine', 'nose', 'flightdeck'];
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
const noNoWords = ['elderly', 'image of', 'picture of', ' I ', "we", 'our', 'my', 'me']; /* poster text*/

let click = false;
successPunct = document.getElementById('sucpunct');

let found = false;
//let punctCount = 0;

let textClick = e => {
  console.log(click);
  if (click == false){
    console.log("Event Fired");
    document.getElementById('altText').value = '';
    click = true;
  }
  else{return}
}

let charCount = e => {
  const keyName = e.key;
  let altCount = document.getElementById('altText').value.length;
  let altChar = document.getElementById('altText').value;
  
  countColor(altCount);
  count.innerHTML = altCount + "/" + maxChar;
  display(compareText(altChar, firstPerson),firstPer,false);
  display(compareText(altChar, secondPerson),secondPer, true);
  display(compareText(altChar, thirdPerson),thirdPer, false);
  display(compareText(altChar, colorList),color, true);
  display(compareText(altChar, punctuation),punct, false);

  display(compareText(altChar, pronouns),gender);
}

function display(func,id,warning){
  id.classList.remove('hide');
  if(func){
    id.innerHTML = "Success";
    id.style.backgroundColor = '#28A745';
    id.style.color = '#FFF';
  }else{
    if(warning){
      id.innerHTML = "Warning";
      id.style.backgroundColor = '#FFC107';
      id.style.color = '#343A40';
    }
    else{
      id.innerHTML = "Error";
      id.style.backgroundColor = '#DC3545';
      id.style.color = '#FFF';
    }
    
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







