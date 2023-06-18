



//Deposite ablance
document.getElementById("disposit-btn").addEventListener("click", function(){
    const depositInput = document.getElementById('diposit-input');
    const depositInputVal = depositInput.value;
    const depositVal = parseFloat(depositInputVal);

   
    if(isNaN(depositVal)){
        alert("Please Enter a Number");
        depositInput.value = '';
        return;
    }

    //Diposit box value
    const dispositBox = document.getElementById("diposit-balance");
    const dispositBoxVal = dispositBox.innerHTML;
    const previousDiposit =  parseFloat(dispositBoxVal);
    
    //New Diposit Amount
    const newDiposit = previousDiposit + depositVal;
    dispositBox.innerText = newDiposit;

    //Remaining Balance 
    const remaing = document.getElementById("remaining-balance");
    const remaingVal = remaing.innerText;
    const previousRemaingBalance = parseInt(remaingVal);

    //New RemainIng Balance 
    const currentRemaing = previousRemaingBalance + depositVal;
    remaing.innerText = currentRemaing;


    //session value set on remain balance
    var spanElement = document.getElementById('remaining-balance');
    var spanValue = spanElement.textContent;

    sessionStorage.setItem('remainingBalance', JSON.stringify(spanValue));


    var savedValue = sessionStorage.getItem('remainingBalance');
    var spanElement = document.getElementById('remaining-balance');



    spanElement.textContent = JSON.parse(savedValue);
    depositInput.value = '';

});

//withdraw Balance
document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdraw = document.getElementById("withdraw-input");
    const withdrawVal = withdraw.value;

    const withdrawBalance = parseFloat(withdrawVal);

    if(isNaN(withdrawBalance)){
        alert("Please Enter a Number");
        withdraw.value = '';
        return;
    }

    //Get withdraw card balance 
    const withdrawCard = document.getElementById("withdraw-balance");
    const withdrawCardVal = withdrawCard.innerText;
    const PreviousWithdrawBalance = parseFloat(withdrawCardVal);


    // new  withdraw card balance 

    const newWithdraw = PreviousWithdrawBalance + withdrawBalance;
    withdrawCard.innerText = newWithdraw;

    //Remaining Balance 
    const remaing = document.getElementById("remaining-balance");
    const remaingVal = remaing.innerText;
    const previousRemaingBalance = parseInt(remaingVal);



    if(previousRemaingBalance< withdrawBalance){
        alert("You do not have sufficient balance ");
        withdrawCard.innerText = 0;
        withdraw.value = '';
        return;
    }

   //new Remaining  balance
   const newRemainingBalance =  previousRemaingBalance - withdrawBalance ;
   remaing.innerText = newRemainingBalance;


   var spanElement = document.getElementById('remaining-balance');
   var spanValue = spanElement.textContent;

   sessionStorage.setItem('remainingBalance', JSON.stringify(spanValue));

   withdraw.value = "";
});
    //Remaining Balance get from session value
    window.onload = function() {

        var savedValue = sessionStorage.getItem('remainingBalance');
        if(savedValue == null){
            return;
        }
        var spanElement = document.getElementById('remaining-balance');
        spanElement.textContent = JSON.parse(savedValue);

    }

