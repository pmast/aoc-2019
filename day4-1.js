const assert = require('assert');

input = [130254, 678275];

assert(check(111111));
assert(!check(223450));
assert(!check(123789));


var countMatches = 0;
for (var i=130254; i <= 678275; i++){
    if (check(i)){
        countMatches ++;
    }
}
console.log(countMatches);

function check(number) {
    let double = false;
    const numbers = String(number).split('').map(d => Number(d));
    let greater = numbers.slice(1, numbers.lenght).reduce((a, n, i) => {

        if (n == numbers[i]) double = true;
        a += Number(n >= numbers[i]);
        return a
    }, 0);
    return greater==5 && double;
}