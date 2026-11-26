import formatCurrency from "../scripts/utils/money.js";

console.log('test suite: formatCurrency')
console.log('Converts cents into dollar:');
if(formatCurrency(2095) === '20.95'){
    console.log('Passed');
} else {
    console.log('Failed');
}

console.log('Works with zero:');
if(formatCurrency(0) === '0.00'){
    console.log('passed');
} else {
    console.log('Failed');
}

console.log('Rounds upto the nearest cent:')
if(formatCurrency(2000.5) === '20.01'){
    console.log('Passed');
} else {
    console.log('Failed');
}