function count(str) {
    let tab = str.split('\t').map(Number);

    const tab0 = [str.split('\t').map(Number)];

    function getMaxIndex(tab) {
        return tab.indexOf(Math.max(...tab));
    }

    function areArraysEqual(array1, array2) {
        if (array2.length !== array1.length) {
            return false;
        }

        for (let i in array1) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }

    function isArrayAgain(tab, tab0) {
        for (let i in tab0) {
            if (areArraysEqual(tab, tab0[i])) {
                return true
            }
        }
        return false
    }

    let count = 0;

    let go = true;
    while (go) {
        let maxIndex = getMaxIndex(tab);
        let toSPread = tab[maxIndex];
        tab[maxIndex] = 0;
        let index = maxIndex + 1;
        while (toSPread > 0) {
            if (index === tab.length) {
                index = 0;
            }
            tab[index++]++;
            toSPread--;
        }
        count++;
        // console.log(tab0);
        go = !isArrayAgain(tab, tab0);
        tab0.push([...tab]);
        // go++;
    }
    return count;
}

const tryy = '0\t2\t7\t0';
const str = '2\t8\t8\t5\t4\t2\t3\t1\t5\t5\t1\t2\t15\t13\t5\t14\n';

// console.log(count2(tryy));

function count0(str) {
    let tab = str.split('\t').map(Number);

    const tab0 = [str.split('\t').map(Number)];

    function getMaxIndex(tab) {
        return tab.indexOf(Math.max(...tab));
    }

    function areArraysEqual(array1, array2) {
        return array1.join() === array2.join();
        // if (array2.length !== array1.length) {
        //     return false;
        // }
        //
        // for (let i in array1) {
        //     if (array1[i] !== array2[i]) {
        //         return false;
        //     }
        // }
        // return true;
    }

    function isArrayAgain(tab, tab0) {
        for (let i in tab0) {
            if (areArraysEqual(tab, tab0[i])) {
                return true
            }
        }
        return false
    }

    // return !tab0.includes(tab);
    let count = 0;

    let go = true;
    while (go) {
        let maxIndex = getMaxIndex(tab);
        let toSPread = tab[maxIndex];
        tab[maxIndex] = 0;
        let index = maxIndex + 1;
        while (toSPread > 0) {
            if (index === tab.length) {
                index = 0;
            }
            tab[index++]++;
            toSPread--;
        }
        count++;
        // console.log(tab0);
        // console.log(tab)
        // go = !isArrayAgain(tab, tab0);
        if (tab0.includes(tab.join())) {
            break
        }
        tab0.push([tab.join()]);

        // go++;
    }
    return count;
}

function count2(str) {
    const tab = str.split('\t').map(Number);

    const seen = new Map();
    let lastSeen = tab.join();

    while (!seen.has(lastSeen)) {
        let {max, index} = tab.reduce((r, tab, i) => {
            return tab > r.max ? {max: tab, index: i} : r, {max: 0}
        });
        tab[index] = 0;
        while (max--) {
            tab[++index % tab.length]++;
        }
        lastSeen = tab.join();
    }
    console.log('part 2', seen.size - seen.get(lastSeen));
}

const banks = str
    .split('\t')
    .map(Number);

const seen = new Map();
let lastSeen = banks.join();

while(!seen.has(lastSeen)) {
    seen.set(lastSeen, seen.size);

    let {max, index} = banks.reduce((r, bank, i) => bank > r.max ? {max: bank, index: i} : r, {max: 0});
    banks[index] = 0;
    while(max--) {
        banks[++index % banks.length]++;
    }

    lastSeen = banks.join();
}

console.log('part 1', seen.size);
console.log('part 2', seen.size - seen.get(lastSeen));

