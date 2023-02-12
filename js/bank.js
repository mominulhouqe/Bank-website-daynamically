
// step -->1 : diposite button ea addEventlisteenr add kora
document.getElementById('diposit').addEventListener('click', function(){
    
    // step 2 : get value from input field
    const deposit = document.getElementById('diposit-field');
    const newDepositValueString = deposit.value;
    
    const newDepositAmount = parseFloat(newDepositValueString);

    // step 3 : value set on diposit
    const setDeposit = document.getElementById('deposit-count');
    const preDepositCount = setDeposit.innerText;
    const newDepositCount = parseFloat(preDepositCount);

    // step 4 : add total number on diposit
    const currentDeposit = newDepositCount + newDepositAmount;
    setDeposit.innerText = currentDeposit;

    // step 5 : get Balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);
    
    // step -6 calculate total balance
    const setBalanceTotal =  previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = setBalanceTotal;

//    console.log(setBalanceTotal);
   
   
   
   
   
   
    // step -4: clear the deposit field
    deposit.value = '';



});