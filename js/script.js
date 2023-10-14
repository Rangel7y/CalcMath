/* GET TEXT RESULT */
const calcMathResult = document.getElementById('calcmath-result');

/* FUNCTION TO INSERT NUMBER ON TEXT RESULT */
const insertNumber = (newNumber) => {

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
    let currentNumber = getCurrentNumber();

    if(currentNumber.length <= 1) return calcMathResult.innerText = "0";

    calcMathResult.innerText = currentNumber.substring(0, currentNumber.length -1);
}

function getCurrentNumber(){
    let currentNumber = calcMathResult.innerText;
    return currentNumber;
}