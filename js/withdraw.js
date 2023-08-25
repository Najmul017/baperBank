/* 
1. add event handeler with the withdraw button
2. get the withdraw amount in input field
2.5 also make sure convert into number by using parse float
3. get previous withdraw total
4. Calculate total withdraw amount
4-5. set total withdraw amount
5. get previous balnce total
6.Calculate new balance total
6-5. set balance total
7. Clear input field
*/
// step1:

document.getElementById('btn-withdraw').addEventListener('click', function(){
   
//    step2. 
const withdrawField = document.getElementById('withdraw-feild');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
withdrawField.value = '';
if(isNaN(newWithdrawAmount)){
    alert("Please provide valid number")
    return;
}


// step-3
const withdraTotalElement = document.getElementById('withdraw-total');

const previousWithdrawTotalString = withdraTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


// step 4

// step 5
const balnceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balnceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step 7 

if(newWithdrawAmount > previousBalanceTotal){
    alert('baper bank a taka nai')
    return;
}
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdraTotalElement.innerText = currentWithdrawTotal;
// step-6
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balnceTotalElement.innerText = newBalanceTotal;


})