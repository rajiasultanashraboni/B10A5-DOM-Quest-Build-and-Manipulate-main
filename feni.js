document.getElementById('donate-feni')
.addEventListener('click',function(){
// console.log('button clicked')
const feniInput = document.getElementById('feni-input');
const feniInputValue = feniInput.value;
const feniInputValueNumber = Number(feniInputValue)
if(isNaN(feniInputValueNumber)){
    alert('please try again later');
    return;
}
if(feniInputValueNumber<=0){
    alert('please try again later');
    return;
}
// console.log(feniInputValueNumber)


const feniAddMoney = document.getElementById('feni-add-money').innerText
const feniAddMoneyNumber = Number(feniAddMoney)
// console.log(feniAddMoneyNumber)
const navbarAmount = document.getElementById('navbar-amount').innerText;
const navbarAmountNumber = Number(navbarAmount);
if(feniInputValueNumber>navbarAmountNumber){
    alert('You donot have sufficient balance');
    return;
}
const feniBalance = feniInputValueNumber+feniAddMoneyNumber;
// console.log(feniBalance)
document.getElementById('feni-add-money').innerText = feniBalance;

const remainingNavbarAmount = navbarAmountNumber-feniInputValueNumber;
// console.log(remainingNavbarAmount)

document.getElementById('navbar-amount').innerText = remainingNavbarAmount;


feniInput.value = " "
})