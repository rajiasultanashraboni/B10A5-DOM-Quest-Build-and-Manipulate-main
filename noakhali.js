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
// modal section is added here 
const modal = document.getElementById('donation_modal');
modal.showModal();

// close confirmation e click korle calculation execute hobe 

document.getElementById('close-button').addEventListener('click', function(){
    const noakhaliBalance = noakhaliInputValueNumber+noakhaliAddMoneyNumber;
    // console.log(noakhaliBalance)
    document.getElementById('noakhali-add-money').innerText = noakhaliBalance;

    const remainingNavbarAmount = navbarAmountNumber-noakhaliInputValueNumber;
    // console.log(remainingNavbarAmount)

    document.getElementById('navbar-amount').innerText = remainingNavbarAmount;
});



// show transaction is here 

// নতুন div তৈরি করো (Card)
const card = document.createElement('div');
card.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'p-4', 'mt-4', 'w-100', 'text-left', 'border', 'border-gray-400');

// **ডেট কালেক্ট করা**
const currentDate = new Date(); 
const formattedDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString(); 

// নতুন p ট্যাগ তৈরি করো (Donation Text)
const para = document.createElement('p');
para.innerText = `${noakhaliInputValueNumber} Taka Donated for Flood at Noakhali, Bangladesh`;
para.classList.add('text-gray-800', 'font-medium');

// নতুন p ট্যাগ তৈরি করো (Date)
const datePara = document.createElement('p');
datePara.innerText = `Date: ${formattedDate}`;
datePara.classList.add('text-gray-500', 'text-sm', 'mt-2'); // ছোট এবং হালকা কালার টেক্সট

// Card div এর মধ্যে p ট্যাগ ঢুকানো
card.appendChild(para);
card.appendChild(datePara);

document.getElementById('transaction').appendChild(card)

noakhaliInput.value = " "
})