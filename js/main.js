document.addEventListener("DOMContentLoaded", function() { 
    console.log("Carousel");


const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true
  });
const submitform = document.getElementById(subscrible-form);
event.preventDefault();
//gets the email form the input
const email = getEmailFromForm();
//this validates the email
})
function validateEmail(email){
  if(!email){
    alert('invalid email')
  }
  else{
    alert('Thank you for subscribing')
  }
}
function getEmailFromForm(){
  return document.getElementById('email').value;
}