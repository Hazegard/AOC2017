function sum8square(pos, sq) {
    let s = 0;
    s += (sq[pos[0] - 1] || []) [pos[1] - 1] || 0;
    s += (sq[pos[0]    ] || []) [pos[1] - 1] || 0;
    s += (sq[pos[0] + 1] || []) [pos[1] - 1] || 0;
    s += (sq[pos[0] - 1] || []) [pos[1]    ] || 0;
    s += (sq[pos[0] - 1] || []) [pos[1] + 1] || 0;
    s += (sq[pos[0] + 1] || []) [pos[1] + 1] || 0;
    s += (sq[pos[0] + 1] || []) [pos[1]    ] || 0;
    s += (sq[pos[0]    ] || []) [pos[1] + 1] || 0;
    return s;
}

const s = [[5, 4, 2],
    [10, 1, 1],
    [11, 23, 25]];

function buildRight(sq) {
    let nCol = sq.length;
    let nLine = sq[0].length;
    for (let i = nCol - 1; i >= 0; i--) {
        sq[i][nLine] = sum8square([i, nLine], sq);
    }
    return sq;
}

function buildLeft(sq) {
    let nCol = sq.length;
    for (let i = nCol - 1; i >= 0; i--) {
        sq[i].unshift(0)
    }
    for (let i = 0; i < nCol; i++) {
        sq[i][0] = sum8square([i, 0], sq);
    }
    return sq;
}

function buildTop(sq) {
    let nCol = sq.length;
    let nLine = sq[0].length;
    let nullArray = Array.apply(null, Array(nLine)).map(Number.prototype.valueOf, 0);
    sq.unshift(nullArray);
    for (let i = nCol; i >= 0; i--) {
        sq[0][i] = sum8square([0, i], sq);
    }
    return sq;
}

function buildBot(sq) {
    let nCol = sq.length;
    let nLine = sq[0].length;
    let nullArray = Array.apply(null, Array(nLine)).map(Number.prototype.valueOf, 0);
    sq.push(nullArray);
    for (let i = 0; i <= nCol; i++) {
        sq[nLine - 1][i] = sum8square([nLine - 1, i], sq);
    }
    return sq;
}

let sss = 0;
let tab = s;
while (sss < 368078) {
    tab = buildBot(buildLeft(buildTop(buildRight(tab))));
    sss = tab[0][0]
}
// for (let i = 0; i < tab.length; i++) {
//     console.log(tab[i].map((e) => {
//         return e - 368078;
//     }));
// }
console.table(tab);
// console.log(sss);