const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );
 

function quebrada () { //*verifica se esta quebrada. V ou F
    return lamp.src.indexOf('quebrada') > -1
}


function lampOn () {
    if (!quebrada()){ //* ! = nao
        lamp.src = './img/ligada.jpg';
    }    
    
}

function lampOff () {
    if(!quebrada()){
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src ='./img/quebrada.jpg';
}


turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ('mouseover',lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick',lampBroken);

