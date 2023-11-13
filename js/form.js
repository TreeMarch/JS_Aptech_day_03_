var elForm, elSelectPackage, elPackageHint, elTerms , elTerms, elTermsHint;

elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTerms = document.getElementById('termsHint');

function packageHint(){
  var pack = this.options[this.selectedIndex].value;
  if(pack === 'monthly'){
    elPackageHint.innerHTML = 'Save $10 if you pay for 1year'
  }
  else{
    elPackageHint.innerHTML
  }
}