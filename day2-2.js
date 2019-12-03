const sequence = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,2,19,6,23,2,13,23,27,1,9,27,31,2,31,9,35,1,6,35,39,2,10,39,43,1,5,43,47,1,5,47,51,2,51,6,55,2,10,55,59,1,59,9,63,2,13,63,67,1,10,67,71,1,71,5,75,1,75,6,79,1,10,79,83,1,5,83,87,1,5,87,91,2,91,6,95,2,6,95,99,2,10,99,103,1,103,5,107,1,2,107,111,1,6,111,0,99,2,14,0,0];

loop1:
for (let n = 0; n <= 99; n++){
    for (let v = 0; v <= 99; v++){
        const result = intComp(sequence.slice(0, sequence.length), n, v);
        if (result == 19690720){
            console.log(n, v, 100 * n + v);
            break loop1;
        }
    }
}


function intComp(input, noun, verb) {
    input[1] = noun;
    input[2] = verb;

    let pointer = 0;
    while (true) {
        const prog = input.slice(pointer, pointer + 4);
        let value;
        if (prog[0] == 1) value = input[prog[1]] + input[prog[2]];
        if (prog[0] == 2) value = input[prog[1]] * input[prog[2]];
        if (prog[0] == 99) break;
        input[prog[3]] = value;
        pointer += 4;
    }
    return input[0]
}