document.getElementById('btn-deposit').addEventListener('click', function(){
    // get deposit amount deposit input field
    // for input field use .value to the value inside

    const depositField = document.getElementById('deposit-feild');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    if(isNaN(newDepositAmount)){
    alert("Please input Deposit amount")
    return;
}
    // step 3 current deposit total
    // for non-input (element other than input, textarea) juse innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;  
    const previousDepositTotal = parseFloat(previousDepositTotalString);  

    // Step 4: total deposit
    const currentDepositTOtal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTOtal;

    // Step 5: balnce current total
const balancetotalElement = document.getElementById('balance-total');
const previosBalanceTotalString = balancetotalElement.innerText;
const previosBalanceTotal = parseFloat(previosBalanceTotalString);
// step 6: calculate current balance total
const currentBalnceTotal = previosBalanceTotal  + newDepositAmount;
// set Balance total
balancetotalElement.innerText = currentBalnceTotal;



// step 7: clear deposit field


})