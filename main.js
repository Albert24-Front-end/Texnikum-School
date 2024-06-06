document.getElementById('question').addEventListener('click',

function(){
    const  cardTypeGroup = document.getElementById('cardTypeGroup');
    const  moneyTypeGroup = document.getElementById('moneyTypeGroup');

    if (this.value === 'card')
        {cardTypeGroup.style.display = 'block';
        moneyTypeGroup.style.display = 'none';}
    else
        {moneyTypeGroup.style.display = 'block';
        cardTypeGroup.style.display = 'none';}
})

document.getElementById('our_question').addEventListener('click',
 function(){
    const  currencyTypeGroup = document.getElementById('currencyTypeGroup1');
    const  cardTypeGroup1 = document.getElementById('cardTypeGroup1');
    const  transferTypeGroup = document.getElementById('transferTypeGroup');

    if (this.value === 'cash1')
        {currencyTypeGroup.style.display = 'block';
        cardTypeGroup1.style.display = 'none';
        transferTypeGroup.style.display = 'none';}
    else if (this.value === 'card1')
        {currencyTypeGroup.style.display = 'none';
        cardTypeGroup1.style.display = 'block';
        transferTypeGroup.style.display = 'none';}
    else if (this.value === 'transfer')
        {currencyTypeGroup.style.display = 'none';
        cardTypeGroup1.style.display = 'none';
        transferTypeGroup.style.display = 'block';}
 }   
)