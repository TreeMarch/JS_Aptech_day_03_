function validateForm()
{
  const name = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("Confirm_password").value;
  const email = document.getElementById("Email").value;
  const subject = document.getElementById("Subject").value;
  const phone = document.getElementById("Phone").value;


  if (subject.length < 3 ){
    document.getElementById("subjectError").innerText = "Subject  must be at least 3 characters";
    return false;
  }
  else{
    document.getElementById("subjectError").innerText = "";
  }
  
  if(password.length < 6){
    document.getElementById("passwordError").innerText = "Password must be more 6 characters";
    return false;
  }else{
    document.getElementById("passwordError").innerText = "";
  }
  
  if(password !== passwordConfirm){
    document.getElementById('passwordError').innerText = "Password are not match";
    document.getElementById('confirmPasswordError').innerText = "Password do not match";
    return false; 
  }else{
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
  }

  return true;
}