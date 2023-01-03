document.querySelector('form').addEventListener('submit',function(){
   event.preventDefault();
//    console.log("Hello");
var countryCode=document.querySelector('#country-code').value;
var mobileNumber=document.querySelector('#mobile-number').value;
var message=document.querySelector('#message').value;
var url=`https://api.whatsapp.com/send?phone=${countryCode}${mobileNumber}&text=${message}`;
window.location.href=url;
});






// https://api.whatsapp.com/send?phone=8299115168text=hello

// https://api.whatsapp.com/send?phone=918299115168
