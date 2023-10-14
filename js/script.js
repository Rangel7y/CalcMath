/* GET TEXT RESULT */
const calcMathResult = document.getElementById('calcmath-result');

var getCurrentNumber = calcMathResult.innerText;

/* FUNCTION TO INSERT NUMBER ON TEXT RESULT */
const insertNumber = (newNumber) => {

    if(getCurrentNumber.length > 14){
        return;
    }

    if(getCurrentNumber === "0"){
        getCurrentNumber = "";
    }

    calcMathResult.innerText = getCurrentNumber + newNumber;
}

/* FUNCTION TO CLEAN NUMBERS */
const clearNumbers = () => calcMathResult.innerText = "0";

/* FUNCTION TO BACK NUMBER */
const backNumber = () => {
    if(getCurrentNumber.length <= 1) return;

    calcMathResult.innerText = getCurrentNumber.substring(0, calcMathResult.length -1);
}