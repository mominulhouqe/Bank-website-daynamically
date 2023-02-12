

// step-1 > add click event handeler with submit btn
document.getElementById('btn-submit').addEventListener('click',  function(){
    // step -->2 : get email address inside the email input filed
    // alwayes remember to use .value to get text from an input field;
    const userEmail = document.getElementById('userEmail');
    const emailValue = userEmail.value;

    // step -->3
    const userPassword = document.getElementById('userPassword');
    const passwordValue = userPassword.value;
   
    // do not verify email password on the client site

    // step--> 4 varify email
    if(emailValue === 'momin@gmail.com' && passwordValue === 'momin'){
        window.location.href = ' bank.html'
       
    }
    else{
       alert('Please enter right password')
   
    }

})