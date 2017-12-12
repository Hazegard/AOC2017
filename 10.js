function count(str, length, rounds = 1) {
    let skipSize = 0;
    let position = 0;
    let array = Array.apply(null, {length: length}).map(Function.call, Number);
    // str = str.split(',').map(Number);

    function reverseSubList(list, position, length) {
        let tempArray = [];
        for (let i = 0; i < length; i++) {
            let j = (i + position) % list.length;
            tempArray[i] = list[j];
        }
        tempArray = tempArray.reverse();
        for (let i = 0; i < length; i++) {
            let j = (i + position) % list.length;
            list[j] = tempArray[i]
        }
        return list;
    }

    for (let round = 0; round < rounds; round++) {
        for (let i = 0; i < str.length; i++) {
            let l = str[i];
            array = reverseSubList(array, position, l);
            position = (position + l + skipSize) % array.length;
            skipSize++;
        }
    }

    return array
}

function getDenseHash(sparseHash) {
    let result = [];

    for (let blockNr = 0; blockNr < 16; blockNr++) {
        let block = sparseHash.slice(blockNr * 16, (blockNr + 1) * 16);
        result[blockNr] = block.reduce((a,b) => a ^ b);
    }

    return result;
}

function getHexForArray(denseHash) {
    return denseHash
        .map(digit => ("0" + digit.toString(16)).substr(-2))
        .join("");
}


input = '3, 4, 1, 5';
let input2 = '230,1,2,221,97,252,168,169,57,99,0,254,181,255,235,167';
let input1 = input2.split(',').map(Number);
let res1 = count(input1, 256);
console.log("=> " + res1[0]*res1[1]);
input2 = input2.split("").map(c => c.charCodeAt(0)).concat([17, 31, 73, 47, 23]);
let res2 = count(input2, 256,64)
console.log("=> " + getHexForArray(getDenseHash(res2)))


// function tieKnot(input, lengths, rounds = 1) {
//     let result = input.slice();
//     let position = 0;
//     let skip = 0;
//     for (let round = 0; round < rounds; round++) {
//         for (let i = 0; i < lengths.length; i++) {
//             let loopLength = lengths[i];
//             let reversedSection = [];
//
//             for (let at = position, x = 0; x < loopLength; x++) {
//                 at = (position + x) % result.length;
//                 reversedSection.unshift(result[at]);
//             }
//
//             for (let at = position, x = 0; x < loopLength; x++) {
//                 at = (position + x) % result.length;
//                 result[at] = reversedSection[x];
//             }
//
//             position = (position + loopLength + skip) % result.length;
//             skip++;
//         }
//     }
//
//     // console.log(result);
//     return result;
// }
//
// let array = Array.apply(null, {length: 256}).map(Function.call, Number);
//
// str = input2.split(",").map(c => parseInt(c, 10));
// let knot = tieKnot(array, str);
// console.log(knot.splice(0,2));