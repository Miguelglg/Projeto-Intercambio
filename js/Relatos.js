var button = document.getElementById('read_button');

button.addEventListener('click', function(){
    var card = document.querySelector('.cardtxt');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button.textContent = 'LER MENOS';
    }

    button.textContent = 'LER MAIS';
});


var button2 = document.getElementById('read_button2');

button2.addEventListener('click',function(){
    var card2 = document.querySelector('.cardtxt2');
    card2.classList.toggle('active');

    if(card2.classList.contains('active')){
        return button2.textContent = 'LER MENOS';
    }

    button2.textContent = 'LER MAIS  '
});


var button3 = document.getElementById('read_button3');

button3.addEventListener('click', function(){
    var card3 = document.querySelector('.cardtxt3');
    card3.classList.toggle('active');

    if(card3.classList.contains('active')){
        return button3.textContent = 'LER MENOS';
    }

    button3.textContent = 'LER MAIS  '

});