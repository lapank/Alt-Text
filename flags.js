
//Adds pass/fail flag to DOM
//Takes bool;
function flags(func,id){
  id.classList.remove('hide');
  if(func){
    pass(id);
  } else{
    fail(id);
  }
}  

function pass(id){
  id.innerHTML = "Pass";
  id.style.backgroundColor = '#28A745';
  id.style.color = '#FFF';
}  

function fail(id){
  id.innerHTML = "Fail";
  id.style.backgroundColor = '#DC3545';
  id.style.color = '#FFF';
}