const assert = require('assert');

const sequence = [3,225,1,225,6,6,1100,1,238,225,104,0,1,191,196,224,1001,224,-85,224,4,224,1002,223,8,223,1001,224,4,224,1,223,224,223,1101,45,50,225,1102,61,82,225,101,44,39,224,101,-105,224,224,4,224,102,8,223,223,101,5,224,224,1,224,223,223,102,14,187,224,101,-784,224,224,4,224,102,8,223,223,101,7,224,224,1,224,223,223,1001,184,31,224,1001,224,-118,224,4,224,102,8,223,223,1001,224,2,224,1,223,224,223,1102,91,18,225,2,35,110,224,101,-810,224,224,4,224,102,8,223,223,101,3,224,224,1,223,224,223,1101,76,71,224,1001,224,-147,224,4,224,102,8,223,223,101,2,224,224,1,224,223,223,1101,7,16,225,1102,71,76,224,101,-5396,224,224,4,224,1002,223,8,223,101,5,224,224,1,224,223,223,1101,72,87,225,1101,56,77,225,1102,70,31,225,1102,29,15,225,1002,158,14,224,1001,224,-224,224,4,224,102,8,223,223,101,1,224,224,1,223,224,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1007,226,226,224,1002,223,2,223,1006,224,329,1001,223,1,223,8,226,677,224,1002,223,2,223,1005,224,344,1001,223,1,223,107,226,677,224,1002,223,2,223,1006,224,359,1001,223,1,223,8,677,677,224,1002,223,2,223,1005,224,374,1001,223,1,223,1108,226,226,224,1002,223,2,223,1005,224,389,1001,223,1,223,7,677,226,224,1002,223,2,223,1005,224,404,101,1,223,223,7,226,226,224,102,2,223,223,1006,224,419,1001,223,1,223,1108,226,677,224,102,2,223,223,1005,224,434,1001,223,1,223,1107,226,226,224,1002,223,2,223,1006,224,449,1001,223,1,223,1007,677,677,224,102,2,223,223,1006,224,464,1001,223,1,223,107,226,226,224,1002,223,2,223,1005,224,479,101,1,223,223,1107,677,226,224,1002,223,2,223,1005,224,494,1001,223,1,223,1008,677,677,224,102,2,223,223,1005,224,509,101,1,223,223,107,677,677,224,102,2,223,223,1005,224,524,1001,223,1,223,1108,677,226,224,1002,223,2,223,1005,224,539,1001,223,1,223,7,226,677,224,102,2,223,223,1006,224,554,1001,223,1,223,8,677,226,224,1002,223,2,223,1006,224,569,101,1,223,223,108,226,226,224,1002,223,2,223,1006,224,584,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,599,101,1,223,223,1008,226,226,224,102,2,223,223,1005,224,614,1001,223,1,223,1007,226,677,224,1002,223,2,223,1006,224,629,1001,223,1,223,108,677,226,224,102,2,223,223,1005,224,644,101,1,223,223,1008,226,677,224,1002,223,2,223,1005,224,659,101,1,223,223,108,677,677,224,1002,223,2,223,1006,224,674,1001,223,1,223,4,223,99,226];

assert.deepStrictEqual([1], intComp([3,9,8,9,10,9,4,9,99,-1,8], 8));
assert.deepStrictEqual([0], intComp([3,9,8,9,10,9,4,9,99,-1,8], 7));
assert.deepStrictEqual([0], intComp([3,9,7,9,10,9,4,9,99,-1,8], 8));
assert.deepStrictEqual([1], intComp([3,9,7,9,10,9,4,9,99,-1,8], 7));
assert.deepStrictEqual([1], intComp([3,3,1108,-1,8,3,4,3,99,-1,8], 8));
assert.deepStrictEqual([0], intComp([3,3,1108,-1,8,3,4,3,99,-1,8], 7));
assert.deepStrictEqual([0], intComp([3,3,1107,-1,8,3,4,3,99,-1,8], 8));
assert.deepStrictEqual([1], intComp([3,3,1107,-1,8,3,4,3,99,-1,8], 7));

assert.deepStrictEqual([1], intComp([3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], 7));
assert.deepStrictEqual([0], intComp([3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], 0));
assert.deepStrictEqual([1], intComp([3,3,1105,-1,9,1101,0,0,12,4,12,99,1], 7));
assert.deepStrictEqual([0], intComp([3,3,1105,-1,9,1101,0,0,12,4,12,99,1], 0));

assert.deepStrictEqual([999], intComp([3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99], 7));
assert.deepStrictEqual([1000], intComp([3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99], 8));
assert.deepStrictEqual([1001], intComp([3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99], 9));

const result = intComp(sequence, 5);
console.log(result);

function intComp(input, inputValue) {
    let pointer = 0;
    let result = [];
    while (true) {
        const instruction = input[pointer];
        // console.log(instruction);
        const opcode = Number(String(instruction).slice(-2, instruction.length));
        const parameterModes = String(instruction).slice(0, -2).split('').reverse();
        let parameterCount;
        let pointerModified = false;

        if (opcode == 1){ // addition
            const a = getValue(input, pointer + 1, parameterModes[0]);
            const b = getValue(input, pointer + 2, parameterModes[1]);
            setValue(input, pointer + 3, a + b, parameterModes[2]);
            parameterCount = 3;
        }
        if (opcode == 2){ // multiplication
            const a = getValue(input, pointer + 1, parameterModes[0]);
            const b = getValue(input, pointer + 2, parameterModes[1]);
            setValue(input, pointer + 3, a * b, parameterModes[2]);
            parameterCount = 3;
        }
        if (opcode == 3){ // takes a single integer as input and saves it to the position given by its only parameter
            setValue(input, pointer + 1, inputValue, parameterModes[0]);
            parameterCount = 1;
        }
        if (opcode == 4){ // outputs the value of its only parameter
            const a = getValue(input, pointer + 1, parameterModes[0]);
            // console.log('optcode 4', a);
            result.push(a);
            parameterCount = 1;
        }
        if (opcode == 5){ // jump-if-true
            const a = getValue(input, pointer + 1, parameterModes[0]);
            const b = getValue(input, pointer + 2, parameterModes[1]);
            if (a) {
                pointer = b;
                pointerModified = true;
            }
            parameterCount = 2;
        }
        if (opcode == 6){ // jump-if-false
            const a = getValue(input, pointer + 1, parameterModes[0]);
            const b = getValue(input, pointer + 2, parameterModes[1]);
            if (!a) {
                pointer = b;
                pointerModified = true;
            }
            parameterCount = 2;
        }
        if (opcode == 7){ // less than
            const a = getValue(input, pointer + 1, parameterModes[0]);
            const b = getValue(input, pointer + 2, parameterModes[1]);
            if (a < b) {
                setValue(input, pointer + 3, 1, parameterModes[2]);
            } else {
                setValue(input, pointer + 3, 0, parameterModes[2]);
            }
            parameterCount = 3;
        }
        if (opcode == 8){ // equals
            const a = getValue(input, pointer + 1, parameterModes[0]);
            const b = getValue(input, pointer + 2, parameterModes[1]);
            if (a == b) {
                setValue(input, pointer + 3, 1, parameterModes[2]);
            } else {
                setValue(input, pointer + 3, 0, parameterModes[2]);
            }
            parameterCount = 3;
        }
        instructionset = input.slice(pointer, pointer + parameterCount + 1);
        if (opcode == 99) break;
        if (!pointerModified)
            pointer += parameterCount + 1;
    }
    return result
}

function getValue(input, pointer, mode = 0){
    if (mode == 0) return input[input[pointer]];
    if (mode == 1) return input[pointer];
}

function setValue(input, pointer, value, mode = 0){
    if (mode == 0) input[input[pointer]] = value;
    if (mode == 1) input[pointer] = value;
}