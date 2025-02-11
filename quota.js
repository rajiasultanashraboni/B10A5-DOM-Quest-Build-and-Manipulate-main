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
const card = document.createElement('div');
card.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'p-4', 'mt-4', 'w-100', 'text-left', 'border', 'border-gray-400');

// **ডেট কালেক্ট করা**
const currentDate = new Date(); 
const formattedDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString(); 

// নতুন p ট্যাগ তৈরি করো (Donation Text)
const para = document.createElement('p');
para.innerText = `${quotaInputValueNumber} Taka Aid for Injured in the Quota Movement`;
para.classList.add('text-gray-800', 'font-medium');

// নতুন p ট্যাগ তৈরি করো (Date)
const datePara = document.createElement('p');
datePara.innerText = `Date: ${formattedDate}`;
datePara.classList.add('text-gray-500', 'text-sm', 'mt-2'); // ছোট এবং হালকা কালার টেক্সট

// Card div এর মধ্যে p ট্যাগ ঢুকানো
card.appendChild(para);
card.appendChild(datePara);

document.getElementById('transaction').appendChild(card)

quotaInput.value = " "
})