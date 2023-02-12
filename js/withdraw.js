// 1 :  add event listener on withdraw button

document.getElementById("withdraw").addEventListener("click", function () {
  // step ->> 2 : get value from withdraw field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step --> 3: get withdraw total section on withdraw

  const previousWithdrawAmount = document.getElementById("Withdraw-count");
  const previousWithdrawAmountString = previousWithdrawAmount.innerText;
  const setNewWithdrawAmount = parseFloat(previousWithdrawAmountString);

  // step-4 : add amount on withdraw section
  const currentWithdraw = newWithdrawAmount + setNewWithdrawAmount;
  previousWithdrawAmount.innerText = currentWithdraw;

    // step -->5 : 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
 
    // step-->6 :set the new balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


//   step --.7 clear field
    withdrawField.value = '';
});
