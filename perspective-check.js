const perspect = document.getElementById('perspect');

function testPerspective(text){
	if(thirdPersonCheck(text)){
		if(!secondPersonCheck(text)){
			if(!firstPersonCheck(text)){
				flag('pass', perspect);
			}
		} 
	}else{
		flag('review', perspect);
	}
}

function firstPersonCheck(text){
	if(compareText(text, firstPerson)){
		return true;
	}else{
		return false;
	}

}

function secondPersonCheck(text){
	if(compareText(text, secondPerson)){
			return true;
	}else{
		return false;
	}
	
}

function thirdPersonCheck(text){
	if(compareText(text, thirdPerson)){
		return true;
	}else{
		return false;
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