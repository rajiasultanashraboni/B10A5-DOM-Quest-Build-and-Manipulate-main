document.getElementById('donate-noakhali')
.addEventListener('click',function(){
// console.log('button clicked')
const noakhaliInput = document.getElementById('noakhali-input');
const noakhaliInputValue = noakhaliInput.value;
const noakhaliInputValueNumber = Number(noakhaliInputValue)
if(isNaN(noakhaliInputValueNumber)){
    alert('please try again later');
    return;
}
if(noakhaliInputValueNumber<=0){
    alert('please try again later');
    return;
}
// console.log(noakhaliInputValueNumber)


const noakhaliAddMoney = document.getElementById('noakhali-add-money').innerText
const noakhaliAddMoneyNumber = Number(noakhaliAddMoney)
// console.log(noakhaliAddMoneyNumber)
const navbarAmount = document.getElementById('navbar-amount').innerText;
const navbarAmountNumber = Number(navbarAmount);
if(noakhaliInputValueNumber>navbarAmountNumber){
    alert('You donot have sufficient balance');
    return;
}
const noakhaliBalance = noakhaliInputValueNumber+noakhaliAddMoneyNumber;
// console.log(noakhaliBalance)
document.getElementById('noakhali-add-money').innerText = noakhaliBalance;

const remainingNavbarAmount = navbarAmountNumber-noakhaliInputValueNumber;
// console.log(remainingNavbarAmount)

document.getElementById('navbar-amount').innerText = remainingNavbarAmount;


noakhaliInput.value = " "
})