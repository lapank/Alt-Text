//Complete sentence check
//First letter is capitalized
//Ending punctuation found
//First character cannot be punctuation
//If capital or punctuation is removed fail status
//First letter after punctuation must be capital

// Char is null
// Returns true/false
let charIsNull = char => {
  if(char == null){
    return true;
  }
  else return false;
};

// Char is punctuation
// Returns true/false
function charIsPunct (char, puncList){
  for(let i = 0; i < puncList.length; i++){
    if(char == puncList[i]) {
      return true;
    }
  }
  return false;
}

// Char is space
// Returns true/false
let charIsSpace = char => {
  if(char == ' '){
    return true;
  }else return false;
};


// Char is capital
// Returns true/false
let charIsCapital = char => {
  if(char == char.toUpperCase()){
    return true;
  }else return false;
};

// First char check
// Returns true/false
function firstCharCheck (text, puncList){
  if(!charIsPunct(text[0],puncList)){
    if(!charIsSpace(text[0])){
      if(charIsCapital(text[0])){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }else{
    return false;
  }
}

//Last char check
function lastCharCheck (text, puncList, textLength){
  if(charIsPunct(text[textLength],puncList)){
    return true;
    }else{
      return false;
  }
}

//Middle char check
function middleCapsPuncCheck (text, puncList, textLength){
  let puncFound = false;
  let puncIndex = 1000;
  let capAftPunc = false;
  for(let i = 0; i <= textLength; i++){
    if(charIsPunct (text[i], puncList)){
      puncIndex = i;
      puncFound = true;
      return true;
     // console.log('punc found');
    }
    //check first letter in next 3 characters is uppercase
    if (i == puncIndex + 1) {
      if(charIsSpace(text[i])){
       // console.log('Pass, space found at first char after punc');
        return true;
      }else{
       // console.log('Fail, space not found at first space after punc');
        return false;
      }
    }
    if (i == puncIndex + 2) {
      if(charIsSpace(text[i])){
       // console.log('Pass, space found at second char after punc');
        return true;
      }
      if(charIsCapital(text[i]) && !charIsPunct(text[i],puncList)){
       // console.log('Pass, second char is capital');
        capAftPunc = true;
        return true;
      }
    }
    if(i == puncIndex + 3){
      if(!capAftPunc){
        if(charIsSpace(text[i])){
         // console.log('Fail, no cap and 3rd space is space');
          return false;
        }else if(charIsCapital(text[i])){
          //console.log('pass, first cap at 3rd space');
          return true;
        }else{
          //console.log('fail, no capital in first 3 spaces.');
          return false;
        }
      }else if(capAftPunc){
        //console.log('pass, capital occured before 3rd space.');
        return true;
      }
    }
  }
  return false;
}

// Sentence if Complete (Capitals and punctuation)
// Returns true/false
function testCompleteSentence(text, puncList){
  let textLength = text.length -1;
  //Check first character is capital
  if(!charIsNull(text[0])){
    if(firstCharCheck(text,puncList) && lastCharCheck (text, puncList, textLength) && middleCapsPuncCheck (text, puncList, textLength)){
      console.log('check returned true');
      return true;
    }else{
      console.log('check returned flase');
      return false;
    }
  }
}