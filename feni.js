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

// show transaction is here 

// নতুন div তৈরি করো (Card)
const card = document.createElement('div');
card.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'p-4', 'mt-4', 'w-100', 'text-left', 'border', 'border-gray-400');

// **ডেট কালেক্ট করা**
const currentDate = new Date(); 
const formattedDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString(); 

// নতুন p ট্যাগ তৈরি করো (Donation Text)
const para = document.createElement('p');
para.innerText = `${feniInputValueNumber} Taka Donate for Flood Relief in Feni,Bangladesh`;
para.classList.add('text-gray-800', 'font-medium');

// নতুন p ট্যাগ তৈরি করো (Date)
const datePara = document.createElement('p');
datePara.innerText = `Date: ${formattedDate}`;
datePara.classList.add('text-gray-500', 'text-sm', 'mt-2'); // ছোট এবং হালকা কালার টেক্সট

// Card div এর মধ্যে p ট্যাগ ঢুকানো
card.appendChild(para);
card.appendChild(datePara);

document.getElementById('transaction').appendChild(card)


feniInput.value = " "
})