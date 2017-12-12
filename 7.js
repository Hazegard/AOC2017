function count0(str) {
    return str.split('\n')
        .map((e) => [e.split(' ')[0],
            Number(e.split(' ')[1]
                .replace(/[{()}]/g, '')), (e.split('>')[1]) ? (e.split('>')[1].trim().split(',')
                .map(e => e.trim())) : []])
        .reduce((acc, cur, i) => (i === 1 ? acc[0] = [acc[0], cur[0]] : acc[0].push(cur[0])) && acc[2].push(...(cur[2] || [])) ? acc : acc)
        .filter((e, i) => i !== 1)
        .reduce((acc, cur) => acc.filter(e => !cur.includes(e)));
}

function count2(str) {
    str = str.split('\n');

    function getName(str) {
        return str.split(' ')[0]
    }

    function getchild(node) {
        node = node.split('>')[1] || null;
        if (node == null) {
            return null;
        }
        node = node.split(',');
        return node.map(e => e.trim())
    }

    function getWeight(node) {
        let weight = node.split(' ')[1];
        weight = weight.replace(/[{()}]/g, '');
        return Number(weight)
    }

    function hasChild(node) {
        return node.child !== null;
    }


    function weightSum(node) {
        console.log(node);
        if (node.child === null || node.child === undefined) {
            return node.weight
        }
        let s = node.child.reduce((acc, cur) => {
            acc = acc.weight || acc;
            acc += weightSum(cur);
            return acc;
        })
        node.sum = s;
        return s;
    }

    let test = {};

    for (let i = 0; i < str.length; i++) {
        test[getName(str[i])] = {
            name: getName(str[i]),
            weight: getWeight(str[i]),
            sum: 0,
            child: getchild(str[i]),
        }
    }

    // console.log(JSON.stringify(test))
    let test0 = Object.assign({}, test);

    function insertInChild(nodeToInsert, nodeToExplore) {
        if (hasChild(nodeToExplore)) {
            for (let i in nodeToExplore.child) {
                if (nodeToExplore.child[i] === nodeToInsert.name) {
                    nodeToExplore.child[i] = nodeToInsert;
                    return true;
                } else {
                    if (hasChild(nodeToExplore.child[i])) {
                        if (insertInChild(nodeToInsert, nodeToExplore.child[i])) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    function setSum(node) {
        if (node.child === null) {
            node.sum = node.weight;
            return node.sum;
        }
        let s = node.weight;
        for (let i in node.child) {
            s += setSum(node.child[i])
        }
        node.sum = s;
        return s;
    }

    for (let i in test0) {
        for (let j in test) {
            if (test[j] !== test[i] && test[i] !== undefined && test[j] !== undefined) {
                if (insertInChild(test[i], test[j])) {
                    test[i] = undefined;
                    break;
                }
            }
        }
    }

    function isEqui(node) {
        // console.log("start")
        if (node.child === null) {
            // console.log("no child")
            return true;
        }

        let s = node.weight;
        for (let i in node.child) {
            s += node.child[i].sum;
        }
        // console.log(s);
        // console.log(node.child.length)
        if(s%node.child.length!==0){
            console.log("PASEQUI")
            console.log(node)
            return false;
        }
        for (let i in node.child){
            isEqui(node.child[i])
        }
    }

    setSum(test['cqmvs'])//cqmvs


    for(let i in test['cqmvs'].child){
        console.log(test['cqmvs'])
        if( test['cqmvs'].child[i].name ==='bntzksk'){
            let n = test['cqmvs'].child[i];
            // console.log("ttt")
            isEqui(test['cqmvs'].child[i])
            for(let j in n.child){
                if(n.child[i].name === 'vmttcwe'){
                    let m = n.child[i];
                    isEqui(m)
                }
            }
        }
    }
    // isEqui(test['cqmvs'])//tknk
    // return (JSON.stringify(test))
    // console.log(JSON.stringify(test))
}


str = 'pbga (66)\n' +
    'xhth (57)\n' +
    'ebii (61)\n' +
    'havc (66)\n' +
    'ktlj (57)\n' +
    'fwft (72) -> ktlj, cntj, xhth\n' +
    'qoyq (66)\n' +
    'padx (45) -> pbga, havc, qoyq\n' +
    'tknk (41) -> ugml, padx, fwft\n' +
    'jptl (61)\n' +
    'ugml (68) -> gyxo, ebii, jptl\n' +
    'gyxo (61)\n' +
    'cntj (57)';

// console.log(count2(str));

let str1 = 'fjkfpm (69) -> kohxzh, liwvq, eqkio, xvoyybs\n' +
    'dsiixv (52)\n' +
    'fhimhm (66)\n' +
    'mdlubuq (73)\n' +
    'ulobwyb (41)\n' +
    'cbgnzhz (70)\n' +
    'hrheyzf (946) -> fixqj, msyvs, pdwjcd, tlgdija\n' +
    'yrnjhqc (31)\n' +
    'xlglga (714) -> hohft, funabvw, zhxnpoh, unpdcwm\n' +
    'hcvwov (240)\n' +
    'qnhvjec (35016) -> pimzjjp, ghatw, tbakk, olgmto, qeaqiuq, wnmnz, aabbf\n' +
    'efgdfa (405) -> uyedi, rxkmf, syhipz, zozcoqd, uwprsvh, dqhoh, rcbhgw\n' +
    'vofrtf (55)\n' +
    'gipbso (52)\n' +
    'cviwy (426) -> ildgly, syojg, tgoztyw, doavm\n' +
    'okzkfw (159) -> ndteuz, bkmepbs\n' +
    'ylfvgv (5)\n' +
    'ydxuhqe (72) -> bfftnj, uwrll, njlaepf, kbfpx\n' +
    'hwfcy (54)\n' +
    'iqtdzrh (65) -> qoppte, jcsqqxv\n' +
    'ddumyx (220) -> yjowio, gefjk\n' +
    'edagh (12)\n' +
    'kefudoj (82)\n' +
    'indjoox (36)\n' +
    'cliojs (35)\n' +
    'lrvmyj (79) -> fadkfic, pcikcq, fgeup\n' +
    'mvyzuw (73)\n' +
    'nholw (52)\n' +
    'sjbqzk (212) -> sijon, bcedyx\n' +
    'majskr (49)\n' +
    'qjutng (15)\n' +
    'iavwfbb (19)\n' +
    'ywonug (50) -> dgjyf, kobwktw\n' +
    'taxky (77)\n' +
    'lufkiy (44)\n' +
    'lcwqdxx (34)\n' +
    'felksho (204) -> vkile, ihadu, qfczh, wvgzlw, axawjtm, eutun, vkzmf\n' +
    'rvtus (94)\n' +
    'zjxjhwc (53)\n' +
    'bnmsz (95)\n' +
    'cvcyykp (31)\n' +
    'bfxvxpl (35)\n' +
    'niavkxg (16)\n' +
    'zwcsjgs (7)\n' +
    'gtqwrrx (44)\n' +
    'vszpkfs (107) -> rubvop, qsvjd\n' +
    'axawjtm (12) -> gtbocpw, oxlvr, mvfjras, vgyzdkt\n' +
    'ulvbf (82)\n' +
    'vkzmf (252)\n' +
    'jnedlwi (100) -> rkftwvy, gwyrtw\n' +
    'sztry (247) -> vddarvs, tlzlq\n' +
    'anwbrxk (69) -> ybnsg, rfwgt, pcppql\n' +
    'pfxoef (66)\n' +
    'ghqixh (171) -> cjcytbb, dmare\n' +
    'jwrmi (130) -> mhrzazo, qeuwgn\n' +
    'umsrz (7) -> jwrbg, wqpahuv, zquvn, sfjyf, uebmnqa, qqkqhzb, gmbup\n' +
    'wtsqx (46)\n' +
    'rzldn (31)\n' +
    'usmtdk (166) -> pikelbw, edwlns\n' +
    'pyhecs (59)\n' +
    'shwsf (56) -> wtbst, ryjqaz\n' +
    'jhkkrg (63)\n' +
    'eaagt (40)\n' +
    'wkbqm (59)\n' +
    'iivwxhd (150) -> yfgyi, grdimrp\n' +
    'nlkwsrn (50)\n' +
    'idnsypp (94)\n' +
    'aixwgk (41)\n' +
    'yhhnavm (84)\n' +
    'lngdxkd (146) -> hkkzpzh, ihvfxeo\n' +
    'dkwwoa (73) -> sntbr, xbywgft, xlkvx, akght\n' +
    'jevqne (8)\n' +
    'vurnn (81) -> fkehyrg, qhktzou\n' +
    'ngoog (20) -> uusec, rrnkqx, jafsqqu, ryeiot\n' +
    'hxhguzh (75)\n' +
    'kohxzh (1765) -> mjpmw, cbmkr, vmofl, wsjizsy, redeub\n' +
    'twpvnu (56)\n' +
    'kzumm (132) -> czgxag, vytlfm, qowepn\n' +
    'fgnye (44) -> pxcjw, bnmuprs\n' +
    'jvqfj (60)\n' +
    'yvllxxw (55)\n' +
    'hsmaze (34) -> fxzqvoh, fcvsqp, okzkfw, vwtsdsf, ipbbnp, txdprek\n' +
    'aujdy (14)\n' +
    'yjcevge (61) -> rpyxxhm, tfbqaoe\n' +
    'blcpm (217) -> qibrsjj, wcfykko\n' +
    'pfltnc (44)\n' +
    'anqas (63) -> riuwg, jhkkrg\n' +
    'rtseps (51)\n' +
    'vmkfcpw (92)\n' +
    'pcppql (78)\n' +
    'tqrqs (43)\n' +
    'syxdt (12)\n' +
    'ejlecie (79)\n' +
    'xpdmegi (16)\n' +
    'dgjyf (62)\n' +
    'uxhpm (51)\n' +
    'znchnta (66) -> sutzt, kvjyw, hlshpkq, corcne, rflrj, yhadh, ouypz\n' +
    'zmdvl (50)\n' +
    'fixysjm (1386) -> zjylql, ytadaxm, fgnye\n' +
    'yevywe (63) -> qeayjnt, ixyeq, hgaoiz, rcfaaml, zuzhmf\n' +
    'rxkmf (811) -> yedvssr, xvwgxm, wfeurd\n' +
    'mcmzs (53)\n' +
    'vsmdkp (60)\n' +
    'oyurf (27) -> zhjtcdl, jswxshd, hfwpcsa, lbvfwz, obolmhh, grgkv\n' +
    'yawmlbb (191) -> iavwfbb, xjjvneg\n' +
    'fblsn (44)\n' +
    'doavm (223) -> drasjw, cwwwcge\n' +
    'udyivld (18) -> osrdt, jpyojky, vhnnnv, gyxqc\n' +
    'ddqnllo (167) -> cdfij, quohxia\n' +
    'bwbym (55)\n' +
    'ufpdyq (22)\n' +
    'hkjcnv (73) -> nderndc, owjtoo\n' +
    'ndhravs (10)\n' +
    'qjkkohe (25)\n' +
    'jrott (44) -> jgylf, kaitdu\n' +
    'unvqq (173) -> lxdji, ldkojcj\n' +
    'zrgqfb (81)\n' +
    'csbgxs (29)\n' +
    'qeaqiuq (1106) -> nwlkk, ytyhmux, nxmtm, izpta\n' +
    'rqeftjw (51)\n' +
    'tbakbq (62)\n' +
    'vnhhu (62)\n' +
    'grgkv (85) -> xgmrufk, cvvkno\n' +
    'pggrr (29) -> bttvl, zrmzpo, upatvy\n' +
    'zumdwwu (43) -> jfssr, aujdy, adkyx, mragx\n' +
    'euxvn (105) -> qtazfdw, uzarat, mikalda\n' +
    'tpbcg (98)\n' +
    'kdnwlnz (36)\n' +
    'pncda (183) -> uswszht, zeebqts\n' +
    'zlvjnx (130) -> vctupmx, gmxdpc\n' +
    'iljdm (203) -> emqwt, leknm\n' +
    'lmgxknk (49)\n' +
    'pikelbw (34)\n' +
    'kqqegw (89)\n' +
    'eigsdc (20)\n' +
    'qbhvu (94)\n' +
    'kqoae (61) -> tqrqs, bfozr, kkqeg\n' +
    'bozfw (5)\n' +
    'silwwua (20867) -> kzocw, ymhsa, mzcebu\n' +
    'fcxninx (473) -> pmxzfd, kbvzpv, zskam, oyurf\n' +
    'ihvfxeo (14)\n' +
    'rkftwvy (52)\n' +
    'kccra (26)\n' +
    'vkxbeox (353)\n' +
    'suiagk (59)\n' +
    'lnqzgti (60)\n' +
    'leknm (50)\n' +
    'yxvmxzg (35)\n' +
    'jezubi (54) -> lnqzgti, hvsiuf\n' +
    'bzqhk (33) -> ndmpgss, kcoayj\n' +
    'xaovjvs (74)\n' +
    'mjuyo (263) -> psrup, boeuyxx\n' +
    'tvoptyn (1776) -> xjbtfms, tiphry\n' +
    'jbhohbx (25)\n' +
    'kqfgnql (22) -> pmozz, hspqr, ydxuhqe, txhxoib, cncoep, ripidvx, qezvrjl\n' +
    'pdkfixk (22)\n' +
    'kxzwel (80)\n' +
    'sykmuwo (243) -> zvogn, esmbu\n' +
    'livul (40)\n' +
    'rvmntl (346)\n' +
    'xqztuq (24) -> pyhecs, jqgkz, bsythck, ranlxct\n' +
    'edyohkw (79)\n' +
    'hszzxp (64) -> xcdswr, oukuy\n' +
    'yfgyi (56)\n' +
    'pmozz (74) -> ngaawt, oaknu, cgbkrnc\n' +
    'tfglbeh (56)\n' +
    'wpvozgo (53)\n' +
    'njaig (77)\n' +
    'jwrbg (134) -> fymyi, utpyp, ulxscm, cliojs\n' +
    'olnfe (33)\n' +
    'jcsqqxv (52)\n' +
    'fvkew (21)\n' +
    'nkdbmjv (34)\n' +
    'fhjgv (55)\n' +
    'tvqlaw (14)\n' +
    'wqpahuv (274)\n' +
    'myoyl (82)\n' +
    'pjzcs (38)\n' +
    'pcehxbx (1859) -> hlfmvdt, ngoog, mwhraq\n' +
    'kqohkg (56) -> hezkdc, kgfudu, omeew\n' +
    'adtpk (1655) -> unvqq, bpbwl, anqas, kmnzz\n' +
    'afihdk (65)\n' +
    'rtiaapt (18)\n' +
    'obolmhh (109) -> lufkiy, kiryhz\n' +
    'dkegbrt (45)\n' +
    'rbiarxk (81) -> erngeah, cqcjys, bxjqibv\n' +
    'hmrzqlh (87)\n' +
    'biemun (295) -> ejbtu, hszzxp, kcxiq, khixwdd, usmtdk\n' +
    'mvfjras (60)\n' +
    'uqktn (246) -> gtqwrrx, qtshuo\n' +
    'kmpmdb (8)\n' +
    'lylxk (22)\n' +
    'nxmtm (84)\n' +
    'goapac (88)\n' +
    'zlxlwv (43)\n' +
    'nirov (74)\n' +
    'fcjjqev (78)\n' +
    'finxtiu (92) -> vgdsszs, gofjvi, mxpvph\n' +
    'uvpwrf (73)\n' +
    'vgnkq (104) -> jczkx, iydqii\n' +
    'gsbmh (84)\n' +
    'ssblis (86)\n' +
    'knvxq (1845) -> pvbgvb, mcghosj, qocnylk\n' +
    'kvjyw (57) -> livul, eaagt, rukzsa, gsdzpjh\n' +
    'zhpdhat (76)\n' +
    'ypjnmr (39)\n' +
    'yauryvu (97)\n' +
    'ucahbv (82)\n' +
    'rkswk (70) -> kccra, lqasevp, bdvtnul, swqres\n' +
    'bqvtbsr (39)\n' +
    'cmfcqh (149) -> wlwnand, zikmmr\n' +
    'ouypz (67) -> mxelfv, fogmaih\n' +
    'nlrbcxx (41)\n' +
    'mrmuat (21)\n' +
    'kcxiq (150) -> mdvnu, dcwcs\n' +
    'aabbf (881) -> dsoyvp, hwraaxu, lrvmyj\n' +
    'mjxfsc (53)\n' +
    'dmare (55)\n' +
    'iruee (89)\n' +
    'gpsnzs (76)\n' +
    'wnpkwy (27)\n' +
    'zvnzep (174) -> tvqlaw, aufxtq\n' +
    'yysyjbk (1630) -> wpvozgo, mjxfsc, iality, vwupkmh\n' +
    'cgbkrnc (62)\n' +
    'mnfknb (41)\n' +
    'kcoayj (89)\n' +
    'vybmch (79) -> ebyfpmf, dnqdmxc\n' +
    'lmrzi (87)\n' +
    'tiyvea (30)\n' +
    'pcikcq (36)\n' +
    'mlqoz (20)\n' +
    'brmvw (144) -> qjutng, janbnmh\n' +
    'zgkxkj (72) -> bwrpc, wntfmtn, hwjmzs, vkxbeox\n' +
    'gzcbv (54)\n' +
    'nsqpaq (55)\n' +
    'hohft (69) -> hfjtksr, efzjseb, ypjnmr, bqvtbsr\n' +
    'kkqeg (43)\n' +
    'gafjq (74)\n' +
    'haano (296) -> rlburl, njkvleo\n' +
    'tvbmh (99)\n' +
    'fvsitx (212) -> nsvwcl, hohrape\n' +
    'yhtpdwu (71)\n' +
    'qxsjs (95)\n' +
    'qseqsgt (22)\n' +
    'vkhdfmv (36)\n' +
    'ikicwez (69)\n' +
    'tdrdq (24)\n' +
    'bgudw (94)\n' +
    'zhjtcdl (134) -> ceutto, fhynmi, qmyohe\n' +
    'pavtnxe (38)\n' +
    'xvoehjz (301) -> zznjih, wseim\n' +
    'klfyu (40)\n' +
    'zhxnpoh (119) -> ltyxiwk, wkgouh\n' +
    'bezoxx (184) -> afihdk, jevfpj\n' +
    'ivldghm (64) -> enmxpmj, wsrrryh\n' +
    'osnpbou (111) -> zpuktmx, itlno\n' +
    'uofuvf (70)\n' +
    'mgvcyl (51) -> nsqpaq, fhjgv\n' +
    'lluabej (97)\n' +
    'hwjmzs (273) -> agsfbkx, znswber\n' +
    'udlhalx (26)\n' +
    'gewlsr (476) -> uqktn, nknpwkc, udyivld\n' +
    'fsjvyxv (27)\n' +
    'birtjxh (78)\n' +
    'eplltu (84)\n' +
    'sdixs (54)\n' +
    'kqdseyh (46)\n' +
    'lfrfa (76) -> ejlecie, mvxud, wgevvca, carfsnj\n' +
    'lbwgsap (33) -> gpsnzs, santsu\n' +
    'pnjtt (45)\n' +
    'rcfaaml (157) -> avemxf, ehwcxy\n' +
    'tbutks (36)\n' +
    'xmhdsio (91)\n' +
    'byjcsn (51)\n' +
    'amslmyk (96)\n' +
    'jtdvzj (62)\n' +
    'xnaam (88) -> lylxk, sybcl, kuqsuy\n' +
    'boeuyxx (53)\n' +
    'pxcwhq (30)\n' +
    'mckyvtt (52)\n' +
    'pctkyat (25)\n' +
    'lomxh (53)\n' +
    'ltccbob (297) -> ndhravs, qlryl\n' +
    'vgyzdkt (60)\n' +
    'pyzbqz (74)\n' +
    'cjkieim (519) -> myeecwt, agtab, rhtqj, mmriyf, mfcutqz\n' +
    'ducdc (41)\n' +
    'mnxoac (30)\n' +
    'umtmwow (30)\n' +
    'qsxqwub (94) -> klfyu, mlzfw\n' +
    'pdwjcd (105) -> vcoszdq, fkmpv\n' +
    'wifaf (41) -> dnunil, gafjq, gwgchq\n' +
    'tpabsyz (91)\n' +
    'uwrll (47)\n' +
    'dcjiqny (1371) -> npblyaq, qeoetnp, qoeviy\n' +
    'rlburl (9)\n' +
    'itlno (37)\n' +
    'ehpdfno (285) -> bcrso, jqwaifx\n' +
    'njkvleo (9)\n' +
    'uswszht (24)\n' +
    'qvpou (180) -> sndject, bzmhwwo\n' +
    'ngaawt (62)\n' +
    'kyhezqn (45)\n' +
    'arouwsi (59)\n' +
    'uyoez (99)\n' +
    'quoqibc (195) -> znuldtj, bljppq\n' +
    'tiphry (33)\n' +
    'lbvfwz (89) -> qypsl, gzcbv\n' +
    'bzmhwwo (5)\n' +
    'tcbxnrf (285) -> ybgdelp, aqrpio\n' +
    'arjgn (392)\n' +
    'qfczh (218) -> ivhtlxa, jdazgj\n' +
    'jpyojky (79)\n' +
    'zinjsj (30)\n' +
    'qfsmgqe (982) -> mgvcyl, cekchxh, qnscg\n' +
    'mlzfw (40)\n' +
    'ulszlax (42)\n' +
    'myeecwt (69) -> veiljb, wydtqax, pnjtt, sxwbzyj\n' +
    'vkuucpv (260) -> fenymdp, uwehdau\n' +
    'qezvrjl (212) -> jdqhjk, htwzu, lzevbng\n' +
    'qnscg (161)\n' +
    'wkkkv (11)\n' +
    'bpbwl (149) -> mlqoz, miwjfr\n' +
    'icspwbg (83) -> iljdm, sztry, anwbrxk, ddqnllo, gtbmrcp, cpzwgk\n' +
    'bddlvs (70)\n' +
    'mragx (14)\n' +
    'vdyhna (166) -> glori, azttml, jxraf\n' +
    'zjylql (78) -> fsoqc, hefjuue\n' +
    'jdqhjk (16)\n' +
    'etkzf (11)\n' +
    'grdimrp (56)\n' +
    'tlics (101) -> twpvnu, tfglbeh\n' +
    'kskkjn (1081) -> uxmjgh, kqoae, wswwck, zwymlsj, qvpou, mtxzek, elxccty\n' +
    'qsvjd (31)\n' +
    'uurqa (33)\n' +
    'gytzi (18)\n' +
    'xsvage (27)\n' +
    'gefjk (21)\n' +
    'vpbec (263)\n' +
    'mocpa (79) -> ldvcrw, atxfply, ogtxa, rbbkdj, blcpm\n' +
    'wsdqchf (71)\n' +
    'zznjih (11)\n' +
    'ryjqaz (73)\n' +
    'hspqr (66) -> hjxzwnq, ojrixty\n' +
    'phkzo (263) -> licst, nbkzscx\n' +
    'haayebg (39) -> ogziig, pyscsi\n' +
    'kbdnbnd (94)\n' +
    'ioyealn (51)\n' +
    'nuoic (20) -> pmssap, bzuago, tvbmh\n' +
    'kuqsuy (22)\n' +
    'hvsiuf (60)\n' +
    'werskvv (78)\n' +
    'hohrape (90)\n' +
    'sybcl (22)\n' +
    'ksnxlcl (117) -> sdjxpp, yzpyzu, ulobwyb, afbnq\n' +
    'qlchz (5277) -> doxfeq, luiiv, hsmaze\n' +
    'ihadu (144) -> dquqam, ctvrea\n' +
    'dquqam (54)\n' +
    'pjamo (113) -> vnhhu, jtdvzj\n' +
    'xeypnpr (183) -> qiund, kdnwlnz\n' +
    'loaft (59)\n' +
    'loykzr (16)\n' +
    'bsbsdiu (81) -> ssmhkwq, alolk\n' +
    'efzjseb (39)\n' +
    'lbkrk (17)\n' +
    'ipbbnp (127) -> iauetan, tbakbq\n' +
    'uilvahq (1076) -> oztxjfl, oiufrau, ewyrp\n' +
    'gmbup (274)\n' +
    'gldvef (18)\n' +
    'evvfcyi (13)\n' +
    'nbhdty (97)\n' +
    'ncbrxsy (15)\n' +
    'dnunil (74)\n' +
    'zcggn (56)\n' +
    'mbcwjt (225) -> wxyaqte, kpffozq\n' +
    'vgkjgy (16)\n' +
    'bcnqhw (298) -> ohqivu, jzwusi, jzcstbe, xayqwyj, kmwkft\n' +
    'gyxqc (79)\n' +
    'ripidvx (148) -> rergyy, rwhjmp\n' +
    'mxpvph (67)\n' +
    'iauetan (62)\n' +
    'voawog (34)\n' +
    'mzcebu (11) -> rlgrkq, xlglga, hrheyzf, gbwfjf, mhkrny\n' +
    'sexuv (92) -> ednlrw, zcggn\n' +
    'fezoyaj (78)\n' +
    'uxmjgh (70) -> mnxoac, pxcwhq, ytjheqk, tmtfhr\n' +
    'tvfptpz (73)\n' +
    'rywggm (78) -> gxuovng, ragcph, epstabj\n' +
    'ymhsa (7457) -> zzqtmxd, yfwwrkp, yahzcyp, hmugaom\n' +
    'ygvvvq (392)\n' +
    'izssdb (215) -> ycseeag, ytzdrvj\n' +
    'bttvl (95)\n' +
    'abjmd (30)\n' +
    'mspxpr (1837) -> fvhvq, guvto\n' +
    'enogehk (45)\n' +
    'cqcjys (44)\n' +
    'rfllomn (107) -> lqndkq, tzkgrjf, lcius, lhlgijf\n' +
    'wvdswpz (34)\n' +
    'ocqrpkf (46)\n' +
    'oaknu (62)\n' +
    'qvrtwdt (1289) -> jnedlwi, sexuv, vcauqo\n' +
    'prnno (95)\n' +
    'wgjst (177) -> bozfw, salxel, jrrhzc\n' +
    'teapi (35)\n' +
    'adkyx (14)\n' +
    'huxtvqc (16)\n' +
    'mznsk (11)\n' +
    'fcvsqp (183) -> ebjgfh, bnvjfq\n' +
    'iwkotv (89)\n' +
    'mkykc (90)\n' +
    'dlrznye (83)\n' +
    'gtxdtf (42)\n' +
    'ahism (144) -> gkitfsr, osbndxb, zielffk\n' +
    'znztzxd (29183) -> jcsjaxj, hrwtz, fcxninx\n' +
    'jsbug (85)\n' +
    'kfkhxg (51)\n' +
    'tcpvyfj (18)\n' +
    'fpdoney (16)\n' +
    'kfefhun (27)\n' +
    'iufvcm (38) -> xjejd, goapac\n' +
    'fzltz (8)\n' +
    'rukzsa (40)\n' +
    'doxfeq (154) -> kzumm, vurnn, fzbwmsz, bsbsdiu, pncda, rtromur\n' +
    'dfrzb (53)\n' +
    'rpbeiqg (170) -> qseqsgt, qmeawpu\n' +
    'ycseeag (28)\n' +
    'blfinsi (52)\n' +
    'kvsprca (65)\n' +
    'uzarat (35)\n' +
    'zzlocxd (62)\n' +
    'iality (53)\n' +
    'daxbf (805) -> iktev, xqztuq, bsvoy\n' +
    'hfjpir (19)\n' +
    'bsiwtqq (58)\n' +
    'qnepf (88)\n' +
    'dasmiiw (56)\n' +
    'wseim (11)\n' +
    'lvgrmfu (180) -> ngiol, iwidsj\n' +
    'nsoju (38)\n' +
    'zqaxyz (59)\n' +
    'qocnylk (41)\n' +
    'fhynmi (21)\n' +
    'xeege (12)\n' +
    'mfslhp (95)\n' +
    'alolk (75)\n' +
    'qtazfdw (35)\n' +
    'sijon (37)\n' +
    'zzpevgd (17) -> smqtcaj, emxwr, uezxhid, blvyrzh, lvgrmfu, vkuucpv, eivaf\n' +
    'glori (15)\n' +
    'ssmhkwq (75)\n' +
    'dmkhzgg (149) -> fuwekd, bwbym\n' +
    'xqrrpu (29)\n' +
    'yjowio (21)\n' +
    'mhrzazo (36)\n' +
    'jakmbx (39) -> egyfwny, khdzsr\n' +
    'qzgdlb (33)\n' +
    'lwysj (49)\n' +
    'czgxag (33)\n' +
    'drasjw (20)\n' +
    'pxcjw (41)\n' +
    'hwfzj (321)\n' +
    'ssxqkhq (67)\n' +
    'ndteuz (46)\n' +
    'rwhjmp (56)\n' +
    'xsuxhbq (1268) -> injlqnw, vdyhna, bzqhk\n' +
    'aufxtq (14)\n' +
    'nknpwkc (164) -> pwyfdan, jsbug\n' +
    'dqhoh (787) -> xeypnpr, quoqibc, wisdd\n' +
    'lqndkq (54)\n' +
    'vabii (89)\n' +
    'pmxzfd (747) -> xnaam, iaoxdmm, hsywhj\n' +
    'fuexyx (8)\n' +
    'wkxyxtf (20)\n' +
    'bfftnj (47)\n' +
    'hoqti (6514) -> jviven, znchnta, daxbf\n' +
    'aqrpio (24)\n' +
    'otsyp (54)\n' +
    'vgdsszs (67)\n' +
    'lswutyd (60)\n' +
    'egyfwny (73)\n' +
    'wyiec (56)\n' +
    'qeayjnt (31) -> qbaig, yhhnavm, eplltu\n' +
    'tjzkwy (59)\n' +
    'vwtsdsf (251)\n' +
    'jzbnq (78)\n' +
    'gtbmrcp (303)\n' +
    'pzoaqn (94) -> ierop, llepsqz\n' +
    'oqfiqf (185) -> nirov, pyzbqz\n' +
    'kjtwz (97)\n' +
    'gmrkqq (86)\n' +
    'nnkru (16)\n' +
    'nnpvdm (5)\n' +
    'rlgrkq (9) -> uakxuru, qvzjgne, xhrqzk, xatzz, hwfzj\n' +
    'oukuy (85)\n' +
    'gsiokvq (80) -> tcbxnrf, mfunt, tyqnwi, yzxqqx, ehpdfno, oqfiqf, clizzo\n' +
    'qluzb (58)\n' +
    'bzorz (66) -> ulgrn, kjmvhpa\n' +
    'iqckb (103) -> zuaamot, knfath\n' +
    'zikmmr (87)\n' +
    'ugplhkq (58)\n' +
    'vddarvs (28)\n' +
    'agsfbkx (40)\n' +
    'riuwg (63)\n' +
    'mmprixv (66)\n' +
    'pimzjjp (58) -> dresofi, riogonj, encjlzj, rvmntl\n' +
    'eiekcd (66)\n' +
    'gxuovng (38)\n' +
    'vfdulx (6) -> bhnwdot, qxqdyx\n' +
    'iizpgi (84)\n' +
    'ctvrea (54)\n' +
    'qscadxk (28) -> hrrqb, yxfmelm, roojn\n' +
    'qxqdyx (50)\n' +
    'vmkib (527) -> ltccbob, lvktp, nuoic\n' +
    'mwpejh (82)\n' +
    'gwgchq (74)\n' +
    'hjxzwnq (97)\n' +
    'wisdd (75) -> vsmdkp, vzxet, jvqfj\n' +
    'bsvoy (260)\n' +
    'pmunsu (17)\n' +
    'kbvzpv (24) -> vybmch, nkwisjd, ihkcorh, bmyme, pjamo\n' +
    'xlkvx (55)\n' +
    'uezxhid (58) -> brapqvt, cbmkl, ijpzp, werskvv\n' +
    'qoppte (52)\n' +
    'oxlvr (60)\n' +
    'fuwekd (55)\n' +
    'qgytb (10)\n' +
    'vhbtdr (5)\n' +
    'rtromur (217) -> qbtixl, nrphw\n' +
    'mmriyf (149) -> zpkhzqb, kmegj\n' +
    'nukpse (7)\n' +
    'hdvcgn (56) -> tjzkwy, arouwsi\n' +
    'ghatw (920) -> jezubi, kpwvh, ywonug\n' +
    'vcoszdq (31)\n' +
    'vcauqo (166) -> hfjpir, toaan\n' +
    'fenymdp (55)\n' +
    'rrnkqx (41)\n' +
    'bsythck (59)\n' +
    'uyedi (1348) -> uxhpm, rtseps, kfkhxg, byjcsn\n' +
    'xwydsz (85)\n' +
    'fecwfs (20)\n' +
    'vxfyyd (60)\n' +
    'atxfply (233) -> mckyvtt, blfinsi\n' +
    'skrsezs (93)\n' +
    'cncoep (72) -> bgudw, qbhvu\n' +
    'awyhreh (57) -> htuuzu, eudowc, knvxq, felksho, dcjiqny\n' +
    'kpwvh (146) -> kgbjthh, iljkad\n' +
    'gmxdpc (42)\n' +
    'xxleimo (37)\n' +
    'hjbac (80)\n' +
    'twblj (191) -> tbutks, indjoox\n' +
    'qbtixl (7)\n' +
    'hubzsdn (102) -> zeiqoz, ukbzl\n' +
    'yhadh (85) -> twqkuk, fhimhm\n' +
    'injlqnw (37) -> hmrzqlh, lmrzi\n' +
    'vwmyqub (96)\n' +
    'omeew (73) -> kbdnbnd, rvtus\n' +
    'efsanp (33) -> loaft, wkbqm, suiagk\n' +
    'frkjf (114) -> ziyive, mdcxis\n' +
    'uybuil (44) -> vabii, iawzjqd\n' +
    'mjrfrb (35) -> nbhdty, lluabej\n' +
    'xhrqzk (311) -> aktnest, ixoas\n' +
    'yzxqqx (66) -> acbakwi, kqqegw, hmxxv\n' +
    'ikyzq (4037) -> oykurjk, qfsmgqe, biemun, zatfti\n' +
    'akght (55)\n' +
    'mbzzt (877) -> kxbmr, iivwxhd, ddumyx, kcxllz\n' +
    'ztpawhz (52)\n' +
    'zzkusct (77) -> qrwzvrb, wnjjug\n' +
    'gujegtc (27) -> bddlvs, lcjjc\n' +
    'rulju (14) -> dgwrgu, iruee, awxygg\n' +
    'djodqp (82) -> tqepyv, huxtvqc, loykzr\n' +
    'vrhltmp (77)\n' +
    'zozcoqd (487) -> alvjc, ahism, zzkusct, tlics, rbiarxk\n' +
    'ymxqafr (93)\n' +
    'vmttcwe (2318) -> zumdwwu, lvazjz, qhiav\n' +
    'prcclw (18)\n' +
    'gicwr (21)\n' +
    'ukwlfcf (1818) -> twblj, vpbec, wifaf\n' +
    'fvhvq (32)\n' +
    'jvtky (25)\n' +
    'tcjsqp (96)\n' +
    'rdgowwr (18)\n' +
    'yfwwrkp (156)\n' +
    'sejncwk (626) -> sjbqzk, acfnchg, pzoaqn\n' +
    'edwlns (34)\n' +
    'qiund (36)\n' +
    'cmenpt (53) -> ygmnsct, xwydsz\n' +
    'syojg (99) -> mwpejh, myoyl\n' +
    'aqbnaso (91)\n' +
    'ovrgyv (90)\n' +
    'ilpjk (8)\n' +
    'fvydfl (68)\n' +
    'fxzqvoh (231) -> rmmxnk, vhbtdr, xmjpazn, sbbbog\n' +
    'quohxia (68)\n' +
    'funabvw (153) -> vkhdfmv, igceh\n' +
    'mvxud (79)\n' +
    'rttwi (35) -> tcjsqp, amslmyk, vwmyqub\n' +
    'yjyyq (75) -> uknqlj, trqlfrt\n' +
    'ulgrn (20)\n' +
    'sfpnzbo (16)\n' +
    'iiwpsx (1466) -> coxpxpj, tlxdji, euoskfi\n' +
    'rhtqj (249)\n' +
    'sdjxpp (41)\n' +
    'qmyohe (21)\n' +
    'bljppq (30)\n' +
    'zskam (845) -> tpabsyz, wynyd, gtmud, aqbnaso\n' +
    'iqhpby (1769) -> zlvjnx, iufvcm, nfwcuci\n' +
    'brabcb (99)\n' +
    'byvwheg (82)\n' +
    'epstabj (38)\n' +
    'phdeae (92) -> zwcsjgs, kdqctmq\n' +
    'xyjsuy (8)\n' +
    'owtswi (167)\n' +
    'htlfqi (60)\n' +
    'ybgdelp (24)\n' +
    'ehwcxy (63)\n' +
    'corcne (217)\n' +
    'tlzlq (28)\n' +
    'hlfmvdt (12) -> meqla, yywjam\n' +
    'jwmjz (5)\n' +
    'syhipz (76) -> qwror, rzsggfj, mjuyo, zitvhwp\n' +
    'nfwcuci (214)\n' +
    'pvniw (42)\n' +
    'wknmdh (836) -> thbazqq, rpbeiqg, lyvdkxe\n' +
    'guvto (32)\n' +
    'isispf (151) -> kvsprca, yoiej\n' +
    'hasclc (46)\n' +
    'kxbmr (116) -> jsdbgko, mvyzuw\n' +
    'akgfzo (46) -> glblkz, lpfahc\n' +
    'jfssr (14)\n' +
    'bxjqibv (44)\n' +
    'jxraf (15)\n' +
    'hfwpcsa (197)\n' +
    'htuuzu (30) -> cmfcqh, xvoehjz, jabfysb, rfllomn, mvybmye, rttwi\n' +
    'wfcqzm (95)\n' +
    'quolxjw (84)\n' +
    'rergyy (56)\n' +
    'awnafxx (29)\n' +
    'bzuago (99)\n' +
    'ytzdrvj (28)\n' +
    'yoiej (65)\n' +
    'ffijsc (81)\n' +
    'rjqjwjy (73)\n' +
    'wnjjug (68)\n' +
    'ybnsg (78)\n' +
    'ygmnsct (85)\n' +
    'qiaej (82)\n' +
    'gzriygp (58)\n' +
    'zeiqoz (14)\n' +
    'jqgkz (59)\n' +
    'iawzjqd (89)\n' +
    'sxwbzyj (45)\n' +
    'faqxj (33)\n' +
    'gixsbr (1173) -> qvrtwdt, wkxlf, iiwpsx, icspwbg, qhfmjrm, mspxpr, xsuxhbq\n' +
    'ktffksv (29)\n' +
    'mfunt (165) -> quolxjw, tgwiasr\n' +
    'lzevbng (16)\n' +
    'azttml (15)\n' +
    'hezkdc (193) -> mpieb, voawog\n' +
    'dsoyvp (55) -> pfxoef, eiekcd\n' +
    'ildgly (137) -> pvniw, ulszlax, gtxdtf\n' +
    'paaqws (214)\n' +
    'chcnreg (33)\n' +
    'rpyxxhm (53)\n' +
    'kemxmk (332) -> umtmwow, yahsymr\n' +
    'enmxpmj (64)\n' +
    'owjtoo (63)\n' +
    'iaoxdmm (138) -> xyjsuy, fzltz\n' +
    'oykurjk (868) -> hkjcnv, qscadxk, phhumfd\n' +
    'eawwls (73)\n' +
    'kiryhz (44)\n' +
    'janbnmh (15)\n' +
    'sbbbog (5)\n' +
    'sfjyf (210) -> xpdmegi, niavkxg, eevdo, vgkjgy\n' +
    'lwnlk (47)\n' +
    'cthyz (62)\n' +
    'wsrrryh (64)\n' +
    'yahzcyp (64) -> sddoa, yscpg\n' +
    'kigsmv (22)\n' +
    'rubvop (31)\n' +
    'ajgvmuy (80)\n' +
    'htwzu (16)\n' +
    'xatzz (157) -> ucahbv, qiaej\n' +
    'uzprj (58)\n' +
    'ltceq (99)\n' +
    'dnqdmxc (79)\n' +
    'pmpxq (13)\n' +
    'ebyfpmf (79)\n' +
    'qeuwgn (36)\n' +
    'osbndxb (23)\n' +
    'qunom (178) -> jxhhgvz, jjfoqtv\n' +
    'xinxep (1670) -> tewltq, qtmvya, gixsbr\n' +
    'clrhsr (19)\n' +
    'ierop (96)\n' +
    'wkxlf (1022) -> drwwnwd, finxtiu, dkwwoa\n' +
    'ogziig (64)\n' +
    'nsqiicp (27)\n' +
    'fkehyrg (75)\n' +
    'zielffk (23)\n' +
    'upatvy (95)\n' +
    'jxhhgvz (16)\n' +
    'swqres (26)\n' +
    'ndmpgss (89)\n' +
    'wzvsi (69)\n' +
    'ihkcorh (183) -> fsjvyxv, hmemann\n' +
    'elgvwug (67)\n' +
    'ujzxlx (98)\n' +
    'veiljb (45)\n' +
    'hrrqb (57)\n' +
    'lrlhwat (22)\n' +
    'xlkdss (7)\n' +
    'qibrsjj (60)\n' +
    'ytjheqk (30)\n' +
    'ojnxwzq (2529) -> tvoptyn, yysyjbk, kqfgnql, uwrcgnq\n' +
    'kbfpx (47)\n' +
    'afbnq (41)\n' +
    'yscpg (46)\n' +
    'yatdg (50)\n' +
    'acbakwi (89)\n' +
    'bcedyx (37)\n' +
    'aktnest (5)\n' +
    'fkmpv (31)\n' +
    'kgbjthh (14)\n' +
    'gtmud (91)\n' +
    'alvjc (139) -> qdemebr, xxleimo\n' +
    'yedvssr (205) -> fvkew, gicwr\n' +
    'ejlya (66)\n' +
    'mhkrny (672) -> bezoxx, haano, pggrr\n' +
    'edfxg (74)\n' +
    'bmyme (95) -> wsdqchf, yhtpdwu\n' +
    'uedozkm (5333) -> tntns, mkslglr, zgkxkj, sejncwk\n' +
    'hsywhj (154)\n' +
    'licst (9)\n' +
    'gtbocpw (60)\n' +
    'vdwutc (90)\n' +
    'ulkdq (82)\n' +
    'ceutto (21)\n' +
    'sivsece (73)\n' +
    'tntns (1094) -> djodqp, ixuvbk, hubzsdn\n' +
    'qhfmjrm (1628) -> xmhdsio, myzut, dfupxk\n' +
    'rzsggfj (317) -> udlhalx, narnhty\n' +
    'hlshpkq (99) -> zpuwyqp, zqaxyz\n' +
    'ijpzp (78)\n' +
    'qtmvya (14) -> gsiokvq, wanxt, kskkjn, adtpk, iqhpby, pcehxbx\n' +
    'ktoxuar (83) -> eawwls, tvfptpz\n' +
    'uwehdau (55)\n' +
    'advjges (20)\n' +
    'iuubp (62)\n' +
    'encjlzj (49) -> ltceq, brabcb, uyoez\n' +
    'pabkgnq (10)\n' +
    'ulxscm (35)\n' +
    'rcbhgw (832) -> jrott, hcvwov, akgfzo\n' +
    'nevhjg (17)\n' +
    'agtab (41) -> ztpawhz, dsiixv, gipbso, nholw\n' +
    'xjbtfms (33)\n' +
    'mfcutqz (219) -> ncbrxsy, bnwotj\n' +
    'txhxoib (240) -> qgytb, pabkgnq\n' +
    'miwjfr (20)\n' +
    'vkmxs (75)\n' +
    'hidzw (55)\n' +
    'whjbc (54)\n' +
    'ivhtlxa (17)\n' +
    'jgylf (98)\n' +
    'iydqii (55)\n' +
    'gkitfsr (23)\n' +
    'carfsnj (79)\n' +
    'pxkzk (5)\n' +
    'wlwnand (87)\n' +
    'khdzsr (73)\n' +
    'tqepyv (16)\n' +
    'gsdzpjh (40)\n' +
    'wnmnz (290) -> rywggm, hpfmhy, frkjf, ojpghb, wgjst, ivldghm\n' +
    'msyvs (32) -> kyhezqn, dkegbrt, enogehk\n' +
    'uusec (41)\n' +
    'ufdbsy (132) -> mrmuat, seuaftr\n' +
    'vwupkmh (53)\n' +
    'pthnz (34) -> fjkfpm, uedozkm, hoqti, efgdfa\n' +
    'jzwusi (188) -> edagh, xrknksz, syxdt, xeege\n' +
    'npblyaq (35) -> mnfknb, jdjkbwr, aixwgk, ducdc\n' +
    'mdvnu (42)\n' +
    'qcglune (68)\n' +
    'jafsqqu (41)\n' +
    'nderndc (63)\n' +
    'qtshuo (44)\n' +
    'twqkuk (66)\n' +
    'fcdutzs (8)\n' +
    'olgmto (702) -> lbwgsap, jakmbx, aufwfrp, osnpbou\n' +
    'pfekvok (34)\n' +
    'cbmkr (93) -> pjzcs, pavtnxe, nsoju\n' +
    'igceh (36)\n' +
    'blvyrzh (10) -> vdwutc, cneww, mkykc, ovrgyv\n' +
    'mtxzek (136) -> kfefhun, wnpkwy\n' +
    'bsxtebe (71) -> idnsypp, iqfnj\n' +
    'bntzksk (37289) -> vmttcwe, ukwlfcf, zzpevgd\n' +
    'eudowc (1052) -> mjrfrb, uxsisng, yawmlbb, ktoxuar\n' +
    'mcghosj (41)\n' +
    'ojpghb (156) -> prcclw, gytzi\n' +
    'osrdt (79)\n' +
    'vqrrii (60) -> zrgqfb, ffijsc\n' +
    'wkgouh (53)\n' +
    'nsvwcl (90)\n' +
    'eumefa (84)\n' +
    'zuaamot (32)\n' +
    'lxdji (8)\n' +
    'zeebqts (24)\n' +
    'yktye (24)\n' +
    'wswnja (117) -> fnkrew, mcmzs\n' +
    'vtqzf (17)\n' +
    'kmnzz (5) -> wtsqx, ocqrpkf, hasclc, kqdseyh\n' +
    'ednlrw (56)\n' +
    'yxfmelm (57)\n' +
    'fgeup (36)\n' +
    'oiufrau (43) -> ajgvmuy, kxzwel, hjbac\n' +
    'bdvtnul (26)\n' +
    'xayqwyj (168) -> wvdswpz, fvaeyq\n' +
    'vzxet (60)\n' +
    'cvvkno (56)\n' +
    'wctihs (31) -> ikicwez, wzvsi\n' +
    'cpzwgk (209) -> lwnlk, xvudg\n' +
    'fsoqc (24)\n' +
    'hkkzpzh (14)\n' +
    'wfeurd (165) -> nlrbcxx, kbbwe\n' +
    'klexq (30)\n' +
    'ebjgfh (34)\n' +
    'vctupmx (42)\n' +
    'psrup (53)\n' +
    'ngiol (95)\n' +
    'kryvxoc (18)\n' +
    'tzkgrjf (54)\n' +
    'gcrugvi (62)\n' +
    'jxhhc (17)\n' +
    'wntfmtn (254) -> faqxj, qzgdlb, uurqa\n' +
    'wuyjdn (95)\n' +
    'dbrcg (11)\n' +
    'dcwcs (42)\n' +
    'dsuchz (88)\n' +
    'hlykzp (31)\n' +
    'pwyfdan (85)\n' +
    'hmemann (27)\n' +
    'yjmjnm (77)\n' +
    'cjcytbb (55)\n' +
    'sutzt (169) -> fpdoney, nnkru, sfpnzbo\n' +
    'lvazjz (39) -> zinjsj, abjmd\n' +
    'bfozr (43)\n' +
    'gfvzrt (84)\n' +
    'wanxt (1603) -> lgqwxgu, shwsf, zvnzep, jwrmi\n' +
    'fntaap (43)\n' +
    'dfupxk (91)\n' +
    'uxsisng (95) -> elgvwug, ssxqkhq\n' +
    'rflrj (181) -> niklue, yjcggu\n' +
    'narnhty (26)\n' +
    'ziyive (39)\n' +
    'tkvip (279)\n' +
    'xjjvneg (19)\n' +
    'toaan (19)\n' +
    'tgoztyw (201) -> yrnjhqc, rzldn\n' +
    'nrphw (7)\n' +
    'bhnwdot (50)\n' +
    'negxuk (217) -> nsqiicp, xsvage\n' +
    'tyqnwi (155) -> kigpl, iwkotv\n' +
    'qbhyq (98)\n' +
    'qmeawpu (22)\n' +
    'xjejd (88)\n' +
    'pvbgvb (41)\n' +
    'snsyzbk (20)\n' +
    'vkile (164) -> pdkfixk, ufpdyq, lrlhwat, kigsmv\n' +
    'jdazgj (17)\n' +
    'cdaazt (54)\n' +
    'qtcnfy (50)\n' +
    'gwyrtw (52)\n' +
    'sgznbm (50)\n' +
    'gkqxb (65) -> ioyealn, rqeftjw\n' +
    'mgoym (83) -> kslvs, snyio\n' +
    'cneww (90)\n' +
    'fixqj (116) -> ybzqe, nhcmgrr, nevhjg\n' +
    'kjmvhpa (20)\n' +
    'sntbr (55)\n' +
    'bnwotj (15)\n' +
    'xvudg (47)\n' +
    'ltyxiwk (53)\n' +
    'brapqvt (78)\n' +
    'zrmzpo (95)\n' +
    'xcdswr (85)\n' +
    'erngeah (44)\n' +
    'zvogn (8)\n' +
    'ranlxct (59)\n' +
    'oztxjfl (239) -> eukyl, pjpbcq\n' +
    'bcrso (24)\n' +
    'ogtxa (89) -> iuubp, gcrugvi, cthyz, zzlocxd\n' +
    'utpyp (35)\n' +
    'rmmxnk (5)\n' +
    'nogoyp (70) -> rdgowwr, kryvxoc\n' +
    'afqwh (30)\n' +
    'nedjj (54)\n' +
    'lyvdkxe (42) -> ssblis, gmrkqq\n' +
    'ybzqe (17)\n' +
    'bnvjfq (34)\n' +
    'sklld (24)\n' +
    'eqkio (2131) -> eefmcrp, cmenpt, wswnja\n' +
    'qypsl (54)\n' +
    'wcfykko (60)\n' +
    'luiiv (898) -> vgnkq, coenr, paaqws\n' +
    'mjpmw (101) -> lomxh, rqvifq\n' +
    'wswwck (40) -> zmdvl, yatdg, sgznbm\n' +
    'yjcggu (18)\n' +
    'pjpbcq (22)\n' +
    'yahsymr (30)\n' +
    'liwvq (1960) -> axqifwm, qunom, euxvn, efsanp\n' +
    'euoskfi (135) -> nnpvdm, jwmjz\n' +
    'hpfmhy (176) -> fuexyx, fcdutzs\n' +
    'jczkx (55)\n' +
    'jvwfxp (330) -> cvcyykp, hlykzp\n' +
    'pyscsi (64)\n' +
    'jevfpj (65)\n' +
    'zitvhwp (75) -> tpbcg, ujzxlx, qbhyq\n' +
    'sndject (5)\n' +
    'aufwfrp (53) -> mmprixv, ejlya\n' +
    'riogonj (346)\n' +
    'dhecgkl (73)\n' +
    'eevdo (16)\n' +
    'kslvs (42)\n' +
    'zpuktmx (37)\n' +
    'nbkzscx (9)\n' +
    'pbvcu (73)\n' +
    'zwymlsj (118) -> tcpvyfj, rtiaapt, xikbq, gldvef\n' +
    'fzbwmsz (187) -> dbrcg, wkkkv, mznsk, etkzf\n' +
    'tmtfhr (30)\n' +
    'eukyl (22)\n' +
    'hmugaom (156)\n' +
    'ixuvbk (130)\n' +
    'santsu (76)\n' +
    'buplpb (26) -> negxuk, imuhew, izssdb\n' +
    'imuhew (77) -> yauryvu, kjtwz\n' +
    'niklue (18)\n' +
    'zuzhmf (137) -> pbvcu, sivsece\n' +
    'lgqwxgu (202)\n' +
    'emxwr (262) -> nedjj, hwfcy\n' +
    'iqfnj (94)\n' +
    'ixyeq (273) -> pxkzk, ylfvgv\n' +
    'wvgzlw (87) -> hidzw, vofrtf, yvllxxw\n' +
    'kbbwe (41)\n' +
    'jcsjaxj (2792) -> buplpb, slntf, kqohkg\n' +
    'tlxdji (145)\n' +
    'hgaoiz (283)\n' +
    'tgwiasr (84)\n' +
    'ewyrp (259) -> jevqne, ilpjk, kmpmdb\n' +
    'kmegj (50)\n' +
    'axqifwm (98) -> dasmiiw, wyiec\n' +
    'jrrhzc (5)\n' +
    'cftggo (20)\n' +
    'xvoyybs (56) -> ygvvvq, kemxmk, jkfrln, arjgn, fvsitx, lfrfa, jvwfxp\n' +
    'daiaot (60)\n' +
    'avemxf (63)\n' +
    'yzpyzu (41)\n' +
    'wtbst (73)\n' +
    'seuaftr (21)\n' +
    'dgwrgu (89)\n' +
    'kpffozq (27)\n' +
    'qoeviy (129) -> yxvmxzg, bfxvxpl\n' +
    'uwprsvh (1502) -> qjkkohe, pctkyat\n' +
    'ldvcrw (299) -> clrhsr, elmmtp\n' +
    'yywjam (86)\n' +
    'elmmtp (19)\n' +
    'coenr (56) -> edyohkw, vspquqe\n' +
    'khixwdd (54) -> vxfyyd, dltbolj, htlfqi\n' +
    'jsdbgko (73)\n' +
    'llepsqz (96)\n' +
    'smqtcaj (250) -> daiaot, lswutyd\n' +
    'thbazqq (180) -> pmunsu, vtqzf\n' +
    'kaitdu (98)\n' +
    'fvaeyq (34)\n' +
    'glblkz (97)\n' +
    'vmofl (39) -> eumefa, gfvzrt\n' +
    'dqktd (95)\n' +
    'mwvbcqg (58)\n' +
    'gbwfjf (777) -> tkvip, mbcwjt, sbimooe\n' +
    'hmxxv (89)\n' +
    'wynyd (91)\n' +
    'jdjkbwr (41)\n' +
    'elxccty (54) -> fvydfl, qcglune\n' +
    'bnmuprs (41)\n' +
    'kgfudu (45) -> otsyp, sdixs, whjbc, cdaazt\n' +
    'hfjtksr (39)\n' +
    'tlgdija (81) -> fntaap, zlxlwv\n' +
    'qrwzvrb (68)\n' +
    'nchgm (49)\n' +
    'gofjvi (67)\n' +
    'jjfoqtv (16)\n' +
    'tfbqaoe (53)\n' +
    'zzqtmxd (116) -> fecwfs, eigsdc\n' +
    'qhktzou (75)\n' +
    'wydtqax (45)\n' +
    'ytyhmux (84)\n' +
    'qqkqhzb (274)\n' +
    'trqlfrt (92)\n' +
    'eivaf (370)\n' +
    'njlaepf (47)\n' +
    'bkmepbs (46)\n' +
    'mpieb (34)\n' +
    'sbimooe (89) -> dqktd, bnmsz\n' +
    'dltbolj (60)\n' +
    'lvktp (32) -> prnno, qxsjs, wuyjdn\n' +
    'lcius (54)\n' +
    'mxelfv (75)\n' +
    'hrwtz (17) -> mocpa, fixysjm, cjkieim\n' +
    'jzcstbe (236)\n' +
    'mikalda (35)\n' +
    'xrknksz (12)\n' +
    'knfath (32)\n' +
    'pmssap (99)\n' +
    'eefmcrp (209) -> nukpse, xlkdss\n' +
    'nkwisjd (149) -> pfltnc, fblsn\n' +
    'ragcph (38)\n' +
    'eubjf (58)\n' +
    'snyio (42)\n' +
    'zquvn (108) -> nvrpd, dlrznye\n' +
    'uakxuru (169) -> zhpdhat, uymdj\n' +
    'egrit (73)\n' +
    'dlvttmo (95)\n' +
    'xikbq (18)\n' +
    'xgmrufk (56)\n' +
    'cbmkl (78)\n' +
    'jqwaifx (24)\n' +
    'qowepn (33)\n' +
    'clizzo (227) -> dfrzb, zjxjhwc\n' +
    'tbakk (935) -> wctihs, vszpkfs, iqtdzrh\n' +
    'qvzjgne (36) -> dlvttmo, wfcqzm, mfslhp\n' +
    'mvybmye (207) -> awnafxx, xqrrpu, ktffksv, csbgxs\n' +
    'mkslglr (189) -> dmkhzgg, sykmuwo, bsxtebe, yjyyq, znmav\n' +
    'jkfrln (342) -> jbhohbx, jvtky\n' +
    'znswber (40)\n' +
    'rqvifq (53)\n' +
    'fnkrew (53)\n' +
    'jabfysb (91) -> gzriygp, eubjf, qluzb, ugplhkq\n' +
    'dresofi (346)\n' +
    'zpkhzqb (50)\n' +
    'hwraaxu (89) -> majskr, nchgm\n' +
    'uebmnqa (88) -> ymxqafr, skrsezs\n' +
    'qeoetnp (173) -> evvfcyi, pmpxq\n' +
    'sddoa (46)\n' +
    'qdemebr (37)\n' +
    'kobwktw (62)\n' +
    'fogmaih (75)\n' +
    'wgevvca (79)\n' +
    'phhumfd (35) -> ulkdq, ulvbf\n' +
    'zpuwyqp (59)\n' +
    'txdprek (83) -> gsbmh, iizpgi\n' +
    'cqmvs (14) -> bntzksk, mvpqv, pthnz, xinxep, qnhvjec, znztzxd, silwwua\n' +
    'wazlg (92)\n' +
    'unpdcwm (153) -> yktye, sklld, tdrdq\n' +
    'uknqlj (92)\n' +
    'qwror (369)\n' +
    'awxygg (89)\n' +
    'uwrcgnq (1176) -> uybuil, vqrrii, arejh\n' +
    'nvrpd (83)\n' +
    'znuldtj (30)\n' +
    'wxyaqte (27)\n' +
    'xbywgft (55)\n' +
    'iwidsj (95)\n' +
    'kcxllz (43) -> mdlubuq, dhecgkl, uvpwrf\n' +
    'arejh (188) -> lbkrk, jxhhc\n' +
    'qbaig (84)\n' +
    'mvpqv (5522) -> ojnxwzq, qlchz, awyhreh, ikyzq\n' +
    'lpfahc (97)\n' +
    'fadkfic (36)\n' +
    'xvwgxm (63) -> wazlg, vmkfcpw\n' +
    'tewltq (4134) -> cviwy, wknmdh, bcnqhw, vmkib, ezaobs, gewlsr, yevywe\n' +
    'rfwgt (78)\n' +
    'wsjizsy (33) -> bsiwtqq, uzprj, mwvbcqg\n' +
    'rbbkdj (191) -> rjqjwjy, egrit\n' +
    'cwwwcge (20)\n' +
    'ejbtu (58) -> qnepf, dsuchz\n' +
    'hefjuue (24)\n' +
    'coxpxpj (5) -> cbgnzhz, uofuvf\n' +
    'nhcmgrr (17)\n' +
    'iktev (194) -> chcnreg, olnfe\n' +
    'vhnnnv (79)\n' +
    'kmwkft (88) -> edfxg, xaovjvs\n' +
    'kdqctmq (7)\n' +
    'slntf (309) -> dmxlfzb, phdeae, vfdulx, bzorz, nogoyp\n' +
    'ohqivu (82) -> yjmjnm, taxky\n' +
    'lqasevp (26)\n' +
    'roojn (57)\n' +
    'ojrixty (97)\n' +
    'xmjpazn (5)\n' +
    'salxel (5)\n' +
    'lhlgijf (54)\n' +
    'zatfti (60) -> phkzo, ghqixh, rulju, ksnxlcl, isispf\n' +
    'znmav (95) -> byvwheg, kefudoj\n' +
    'myzut (91)\n' +
    'cekchxh (59) -> lcwqdxx, nkdbmjv, pfekvok\n' +
    'ukbzl (14)\n' +
    'bwrpc (41) -> jzbnq, fezoyaj, birtjxh, fcjjqev\n' +
    'ytadaxm (26) -> nlkwsrn, qtcnfy\n' +
    'qlryl (10)\n' +
    'vytlfm (33)\n' +
    'jswxshd (127) -> teapi, ugssydn\n' +
    'emqwt (50)\n' +
    'ugssydn (35)\n' +
    'iumsmx (20)\n' +
    'kigpl (89)\n' +
    'cdfij (68)\n' +
    'esmbu (8)\n' +
    'izpta (84)\n' +
    'jviven (416) -> gujegtc, owtswi, haayebg, yjcevge, mgoym, iqckb, gkqxb\n' +
    'qhiav (99)\n' +
    'ixoas (5)\n' +
    'dmxlfzb (16) -> afqwh, klexq, tiyvea\n' +
    'redeub (57) -> hxhguzh, vkmxs\n' +
    'fymyi (35)\n' +
    'mdcxis (39)\n' +
    'lcjjc (70)\n' +
    'acfnchg (246) -> advjges, cftggo\n' +
    'ldkojcj (8)\n' +
    'nwlkk (84)\n' +
    'kzocw (2306) -> umsrz, mbzzt, uilvahq\n' +
    'meqla (86)\n' +
    'drwwnwd (139) -> vrhltmp, njaig\n' +
    'vspquqe (79)\n' +
    'uymdj (76)\n' +
    'eutun (192) -> iumsmx, snsyzbk, wkxyxtf\n' +
    'ezaobs (434) -> lngdxkd, brmvw, hdvcgn, ufdbsy, qsxqwub, rkswk\n' +
    'iljkad (14)\n' +
    'ryeiot (41)\n' +
    'mwhraq (86) -> lwysj, lmgxknk';
console.log(count2(str1));