//actions 

const field = document.querySelector('#field');
const equal = document.querySelector('#equal');
const reset = document.querySelector('#reset');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus')
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const squareRoot = document.querySelector('#square-root');
const percent = document.querySelector('#percent');

//numbers

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const dot = document.querySelector('#dot');

//numbers

let firstNumber = '';
let secondNumber = '';

zero.addEventListener('click', function(){
    field.textContent = field.textContent + '0';
})
one.addEventListener('click', function(){
    field.textContent = field.textContent + '1';
})
two.addEventListener('click', function(){
    field.textContent = field.textContent + '2';
})
three.addEventListener('click', function(){
    field.textContent = field.textContent + '3';

})
four.addEventListener('click', function(){
    field.textContent = field.textContent + '4';

})
five.addEventListener('click', function(){
    field.textContent = field.textContent + '5';

})
six.addEventListener('click', function(){
    field.textContent = field.textContent + '6';

})
seven.addEventListener('click', function(){
    field.textContent = field.textContent + '7';

})
eight.addEventListener('click', function(){
    field.textContent = field.textContent + '8';

})
nine.addEventListener('click', function(){
    field.textContent = field.textContent + '9';
})
dot.addEventListener('click', function(){
    let a = field.textContent;
    if(a === ''){
        field.textContent = '0' + '.';
    } else if (!a.includes('.')){
    field.textContent = field.textContent + '.';
    }
})

//actions

let action = '';    
if(field.textContent.includes(',')){
    field.textContent.replace(',','.')
}
plus.addEventListener('click',function(){
    firstNumber = +field.textContent;
    action = 'plus';
    field.textContent = '';
})
minus.addEventListener('click',function(){
    firstNumber = +field.textContent;
    action = 'minus';
    field.textContent = '';
})
reset.addEventListener('click', function(){
    firstNumber = 0;
    secondNumber = 0;
    field.textContent = '';
    action = 'reset';
})
divide.addEventListener('click', function(){
    firstNumber = +field.textContent;
    action = 'divide';
    field.textContent = '';
})
multiply.addEventListener('click', function(){
    firstNumber = +field.textContent;
    action = 'multiply';
    field.textContent = '';
})
squareRoot.addEventListener('click', function(){
    firstNumber = +field.textContent;
    action = 'square-root';
    field.textContent = Math.sqrt(firstNumber);
})
percent.addEventListener('click', function(){
    firstNumber = +field.textContent;
    action = 'percent';
    field.textContent = firstNumber / 100;
})
equal.addEventListener('click', function(){
    switch (action){
        case 'plus':
            secondNumber = +field.textContent;
            field.textContent = firstNumber + secondNumber;
            break;
        case 'minus':
            secondNumber = +field.textContent;
            field.textContent = firstNumber - secondNumber;
            break;
        case 'multiply':
            secondNumber = +field.textContent;
            field.textContent = firstNumber * secondNumber;
            break;
        case 'divide':
            secondNumber = +field.textContent;
            field.textContent = firstNumber / secondNumber;
            break;
    }
})