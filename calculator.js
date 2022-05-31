var screen = document.getElementById('display').textContent;
var smallScreen = document.getElementById('small-screen').textContent;
const point = document.getElementById('point');
const equal = document.getElementById('equal');
const numbers = document.querySelectorAll('.number');
const signs = document.querySelectorAll('.signs');
const erasers = document.querySelectorAll('.clear');


function appendNumberClicked(e){
    e.preventDefault();
    var number = e.target.textContent;
    if(screen === '0'){
        screen = number;
        document.getElementById('display').textContent = screen;
        console.log(screen)
    }
    else{
        screen = `${screen}${number}`;
        document.getElementById('display').textContent = screen;
        console.log(screen)
    }
}
function addDecimalPoint(){
    decimalPoint = point.textContent;
    if(screen.includes(decimalPoint) == false){
        screen += decimalPoint;
        document.getElementById('display').textContent = screen;
    }
}
function Operate(e){
    e.preventDefault();
    sign = e.target.textContent;
    
 
    if(sign == '×'){
        sign = '*';
    }
    else if(sign == '÷'){
        sign = '/';
    }


    if(smallScreen == 0){
        smallScreen = `${screen}${sign}`;
    }
    else{
        smallScreen += screen;
        smallScreen = eval(smallScreen)
        smallScreen += sign
    }
    screen = '0';
    document.getElementById('small-screen').textContent = smallScreen;
    document.getElementById('display').textContent = screen;
}

function Clear(e){
    if (e.target.textContent == 'AC'){
        smallScreen = '0'
        document.getElementById('small-screen').textContent = smallScreen;
    }
    screen = '0'
    document.getElementById('display').textContent = screen;
}

function displayResult(){
    if (smallScreen != '0'){
        screen = eval(`${smallScreen}${screen}`)
    }
    if (isNaN(parseInt(screen)) == false){
        document.getElementById('display').textContent = screen;
    }
    else{
        alert('MATHEMATICAL ERROR!')
        screen = '0'
        document.getElementById('display').textContent = screen;
    }
    smallScreen = '0'
    document.getElementById('small-screen').textContent = smallScreen;
}

for(let i = 0; i < numbers.length; i += 1){
    numbers[i].addEventListener('click', appendNumberClicked);
}

point.addEventListener('click', addDecimalPoint);

for(let i = 0; i < signs.length; i += 1){
    signs[i].addEventListener('click', Operate);
}

for(let i = 0; i < erasers.length; i += 1){
    erasers[i].addEventListener('click', Clear);
}

equal.addEventListener('click', displayResult)
