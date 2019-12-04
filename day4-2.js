const assert = require('assert');

input = [130254, 678275];

// assert(check(112233));
// assert(!check(123444));
assert(check(111122));


var countMatches = 0;
for (var i=130254; i <= 678275; i++){
    if (check(i)){
        countMatches ++;
    }
}
console.log(countMatches);

function check(number) {
    let double = false;
    let doubleCount = 0
    // convert to array of numbers
    const numbers = String(number).split('').map(d => Number(d));

    let greater = numbers.slice(1, numbers.lenght).reduce((a, n, i) => {
        if (n == numbers[i])
            doubleCount++;
        else {
            if (doubleCount == 1) double = true;
            doubleCount = 0;
        }
        a += Number(n >= numbers[i]);
        return a
    }, 0);
    if (doubleCount == 1) double = true;
    
    return greater==5 && double;
}