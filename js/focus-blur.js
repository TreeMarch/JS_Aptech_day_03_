function checkUsername(){
  var username = el.value;
  if(username.length < 5){
    elMsg.className = 'Warning';
    elMsg.textContent = 'Not long enough, yet....';
  }
  else{
    elMsg.textContent = '';
  }
}

function tipUserName(){
  elMsg.className = 'tip ';
  elMsg.innerHTML = 'Username must be at least 5 character';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

//WHen the user name input gains / lose focis call function above:

el.addEventListener('focus',tipUserName, false);
// focus call tipUsername()
el.addEventListener('blur', checkUsername, false);
// blur call checkUsername()

