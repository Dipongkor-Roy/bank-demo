// step1: get the button via addEventListener
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step2:get input field
    const getFieldWithdraw=document.getElementById('withdraw-field')
     // step3:get input field value
    const valueWithdraw=getFieldWithdraw.value;
    const valueNumberWith=parseFloat(valueWithdraw);//convert string to number
    getFieldWithdraw.value='';
    if(isNaN(valueNumberWith)){
        alert('input a valid number')
        return;
    }
    // step4:get withdraw value 
    const withdrawText=document.getElementById('withdraw-value')
     // step5:get withdraw value via innerText
    const innerText=withdrawText.innerText;
    const innerNumberWithdraw=parseFloat(innerText);//convert string to number
    
    //work in total balance
    const totalmoney=document.getElementById('total-balance')
    const totalBvalue=totalmoney.innerText;
    const totalBalanceNumber=parseFloat(totalBvalue);
   
    if(valueNumberWith>totalBalanceNumber){
        alert('Not Enought Money');
        return;
    }
    const totalBalance=valueNumberWith+innerNumberWithdraw;
    // step5:update withdraw value via innerText
    withdrawText.innerText=totalBalance;
    // console.log(totalBalanceNumber)
    const addWithdraw=totalBalanceNumber-valueNumberWith;
   
   totalmoney.innerText=addWithdraw;

   
})