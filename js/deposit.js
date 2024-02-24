document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const newDepositAmount = parseFloat(depositFieldString);


    const depositTotal = document.getElementById('deposit-total');
    const depositTotalString = depositTotal.innerText;
    const newTotalAmount= parseFloat(depositTotalString);

    const totalDeposit = newDepositAmount + newTotalAmount;

    depositTotal.innerText = totalDeposit;

const balanceTotalElement = document.getElementById('balance-total');
const balanceTotalString = balanceTotalElement.innerText;
const newTotalBalance = parseFloat(balanceTotalString);

const totalBalanceTotal = totalDeposit + newTotalBalance;

balanceTotalElement.innerText = totalBalanceTotal;


    depositField.value = '';
})