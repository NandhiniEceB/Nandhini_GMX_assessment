clickLogin = (e) => {
    e.preventDefault();
fetch ("https://randomuser.me/api/?results=1", {
  body: JSON.stringify({
      email: this.state.idValue,
      password: this.state.pwValue
   }),
}) 
.then((response) => response.json())
.then((result) => {
  if(result.message === 'SUCCESS'){
    alert('You are logged in.');
    this.goToMain();
   } 
   else{
       alert('Please check your login information.');
   }
}); 
}