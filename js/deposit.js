// step1: get the button via addEventListener
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step2:get input field
    const getField=document.getElementById('deposit-field')
     // step3:get input field value
    const valueField=getField.value;
    const valueNumber=parseFloat(valueField);//convert string to number
    // step4:get deposite value 
    const depositeText=document.getElementById('deposit-value')
     // step5:get deposite value via innerText
    const innerText=depositeText.innerText;
    const innerNumber=parseFloat(innerText);//convert string to number
    const totalBalance=valueNumber+innerNumber;
    // step5:update deposite value via innerText
    depositeText.innerText=totalBalance;
    //work in total balance
    const totalmoney=document.getElementById('total-balance')
    const totalBvalue=totalmoney.innerText;
    const totalBalanceNumber=parseFloat(totalBvalue);
    // console.log(totalBalanceNumber)
    const addDeposit=totalBalanceNumber+valueNumber;
   
   totalmoney.innerText=addDeposit;

    getField.value='';
})