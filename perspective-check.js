const perspect = document.getElementById('perspect');

function emptyText(text){
	if (text == ''){
		return true;
	}else{
		return false;
	}

}

function testPerspective(text){
	if(thirdPersonCheck(text)){
		if(secondPersonCheck(text) || firstPersonCheck(text)){
			flag('review', perspect);
		}else{
			flag('pass', perspect);
		}
	}else if (secondPersonCheck(text) || firstPersonCheck(text)){
		flag('review', perspect);
	}else if(emptyText(text)){
		flag('fail', perspect);
	}else{
		
		flag('pass', perspect);
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