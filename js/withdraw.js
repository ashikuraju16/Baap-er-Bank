document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawElement = document.getElementById("withdraw-field");
  const withdrawElementString = withdrawElement.value;
  const newWithdrawTotal = parseFloat(withdrawElementString);

  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalElementString = withdrawTotal.innerText;
  const newWithdrawTotalBalance = parseFloat(withdrawTotalElementString);

  const totalWithdraw = newWithdrawTotal + newWithdrawTotalBalance;

  
});
