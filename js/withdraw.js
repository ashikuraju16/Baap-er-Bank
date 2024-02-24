document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawElement = document.getElementById("withdraw-field");
  const withdrawElementString = withdrawElement.value;
  const newWithdrawTotal = parseFloat(withdrawElementString);

  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalElementString = withdrawTotal.innerText;
  const newWithdrawTotalBalance = parseFloat(withdrawTotalElementString);

  const totalWithdraw = newWithdrawTotal + newWithdrawTotalBalance;

  withdrawTotal.innerText = totalWithdraw;

  const withdrawTotalBalance = document.getElementById("balance-total");
  const withdrawTotalBalanceString = withdrawTotalBalance.innerText;
  const newWithdrawBalance = parseFloat(withdrawTotalBalanceString);

  const totalBalanceWithdraw = newWithdrawBalance - newWithdrawTotal;
  withdrawTotalBalance.innerText = totalBalanceWithdraw;

  withdrawElement.value = "";
});
