document.getElementById('donation-button')
.addEventListener('click', function(){
    document.getElementById('card').classList.remove('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    // document.getElementById('donation-button').style.backgroundColor = "#B4F461";
    document.getElementById('donation-button').classList.add('bg-lime-400')
    document.getElementById('history-button').classList.remove('bg-lime-400')
});


document.getElementById('history-button')
.addEventListener('click', function(){
    document.getElementById('transaction-history').classList.remove('hidden');
    document.getElementById('card').classList.add('hidden');
    document.getElementById('donation-button').classList.remove('bg-lime-400')
    document.getElementById('history-button').classList.add('bg-lime-400')
})