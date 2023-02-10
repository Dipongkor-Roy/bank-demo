//first conect button via addEventListener
document.getElementById("btn-submit").addEventListener('click',function(){
    //get email field
    const emailFiled=document.getElementById("email-field");
    //get email field value
    const emailValue=emailFiled.value;
    //get password field
    const passField=document.getElementById('pass-field')
    //get password value
    const passValue=passField.value;
    if(emailValue === 'sontan@baperh.com' && passValue === 'secret'){
       window.location.href='bank.html'
    }       
    else{
        alert('Invalid User');
    }
    
})