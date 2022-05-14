
function flag(status, id){
  id.classList.remove('hide');
  if (status == 'pass'){
    passFlag(id);
  } else if(status == 'review'){
    reviewFlag(id);
  } else {
    failFlag(id);
  }
}

function passFlag(id){
  id.innerHTML = "Pass";
  id.style.backgroundColor = '#28A745';
  id.style.color = '#FFF';
}  

function reviewFlag(id){
  id.innerHTML = "Review";
  id.style.backgroundColor = '#FFC107';
  id.style.color = '#343A40';
}

function failFlag(id){
  id.innerHTML = "Fail";
  id.style.backgroundColor = '#DC3545';
  id.style.color = '#FFF';
}