/* GET TEXT RESULT */
const calcMathResult = document.getElementById('calcmath-result');

const textsAllowed = [
    '%',
    '/',
    '*',
    '-',
    '+',
    '.',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];

/* FUNCTION TO INSERT NUMBER ON TEXT RESULT */
const insert = (newNumber) => {

    let currentNumber = getCurrentNumber();

    if(currentNumber.length > 14){
        return;
    }

    if(currentNumber === "0"){
        currentNumber = "";
    }

    calcMathResult.innerText = currentNumber + newNumber;
}

/* FUNCTION TO CLEAN NUMBERS */
const clearNumbers = () => calcMathResult.innerText = "0";

/* FUNCTION TO BACK NUMBER */
const backNumber = () => {
    if(getCurrentNumber().length <= 1) return calcMathResult.innerText = "0";

    calcMathResult.innerText = getCurrentNumber().substring(0, getCurrentNumber().length -1);
}

/* FUNCTION TO  */
const calculateNumbers = () =>{
    const filteredText = blockTextEval(getCurrentNumber());

    if(filteredText.length <= 2) return calcMathResult.innerText = "0";

    calcMathResult.innerText = eval(filteredText);
}

/* FUNCTION TO GET CURRENT NUMBER ON TEXT RESULT */
function getCurrentNumber(){
    let currentNumber = calcMathResult.innerText;
    return currentNumber;
}

/*  */
function blockTextEval(text) {
    const filteredText = text.split('').filter(char => textsAllowed.includes(char)).join('');
    return filteredText;
}