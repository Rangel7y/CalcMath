/* GET TEXT RESULT */
const calcMathResult = document.getElementById('calcmath-result');

/* ARRAY WITH CHARACTERS ALLOWED ON TEXT EVAL() */
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

/* ARRAY WITH CHARACTERS */
const textAcent = [
    '%',
    '/',
    '*',
    '-',
    '+',
    '.',
];

/* VARIABLE TO RESET WHEN CONSULTED RESULT */
let wasConsulted = false;

/* FUNCTION TO INSERT NUMBER ON TEXT RESULT */
const insert = (newNumber) => {

    if(wasConsulted){
        wasConsulted = !wasConsulted;
        return calcMathResult.innerText = newNumber;
    }

    let currentNumber = getCurrentNumber();

    if(currentNumber.length > 14){
        return;
    }

    if(currentNumber === "0" && newNumber !== "."){
       currentNumber = "";
    }

    setTimeout(function(){
        filterTextAcent()
    }, 100);

    const filterTextAcent = () => {
        if (textAcent.includes(newNumber) && !currentNumber.includes(newNumber)) {
            let hasReplaced = false;
    
            for (let n = 0; n < textAcent.length; n++) {
                if (currentNumber.includes(textAcent[n]) && textAcent[n] !== newNumber) {
                    currentNumber = currentNumber.replace(textAcent[n], newNumber);
                    hasReplaced = true;
                    console.log(currentNumber);
                    calcMathResult.innerText = currentNumber;
                    return console.log("Mais de 1");
                }
            }
    
            if (!hasReplaced) {
                if (!currentNumber.includes(newNumber)) {
                    currentNumber += newNumber;
                    calcMathResult.innerText = currentNumber;
                    console.log("Only 1");
                } else {
                    console.log("newNumber igual ao que já está em currentNumber. Bloqueado.");
                }
            }
        } else if (/[0-9]/.test(newNumber)) {
            // Permita números de 0 a 9
            currentNumber += newNumber;
            calcMathResult.innerText = currentNumber;
            console.log("Número adicionado.");
        } else {
            console.log("Caractere inválido.");
        }
    }

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
    const filteredText = filterTextEval(getCurrentNumber());

    if(filteredText.length <= 2) return calcMathResult.innerText = "0";

    calcMathResult.innerText = eval(filteredText);

    wasConsulted = true;
}

/* FUNCTION TO GET CURRENT NUMBER ON TEXT RESULT */
function getCurrentNumber(){
    let currentNumber = calcMathResult.innerText;
    return currentNumber;
}

/*  */
function filterTextEval(text) {
    const filteredText = text.split('').filter(char => textsAllowed.includes(char)).join('');
    return filteredText;
}

