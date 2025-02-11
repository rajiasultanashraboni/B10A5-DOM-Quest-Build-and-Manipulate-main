document.getElementById('donate-quota')
.addEventListener('click',function(){
// console.log('button clicked')
const quotaInput = document.getElementById('quota-input');
const quotaInputValue = quotaInput.value;
const quotaInputValueNumber = Number(quotaInputValue)
if(isNaN(quotaInputValueNumber)){
    alert('please try again later');
    return;
}
if(quotaInputValueNumber<=0){
    alert('please try again later');
    return;
}
// console.log(quotaInputValueNumber)


const quotaAddMoney = document.getElementById('quota-add-money').innerText
const quotaAddMoneyNumber = Number(quotaAddMoney)
// console.log(quotaAddMoneyNumber)
const navbarAmount = document.getElementById('navbar-amount').innerText;
const navbarAmountNumber = Number(navbarAmount);
if(quotaInputValueNumber>navbarAmountNumber){
    alert('You donot have sufficient balance');
    return;
}
const quotaBalance = quotaInputValueNumber+quotaAddMoneyNumber;
// console.log(quotaBalance)
document.getElementById('quota-add-money').innerText = quotaBalance;

const remainingNavbarAmount = navbarAmountNumber-quotaInputValueNumber;
// console.log(remainingNavbarAmount)

document.getElementById('navbar-amount').innerText = remainingNavbarAmount;


quotaInput.value = " "
})