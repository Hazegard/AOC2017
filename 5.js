function solve(str) {
    let tab = str.split('\n').map(nb => Number(nb));
    let val = tab[0];
    let count = 0;

    // console.log("==========");
    // console.log("val : " + val);
    // console.log(tab);
    // console.log("tab[val] : " + tab[val]);
    // console.log("count : " + count);
    while (tab[val] !== undefined) {
    //     if (tab[val] === 0) {
    //         tab[val] = tab[val] + 1;
    //         count++;
    //         console.log("==========");
    //         console.log("val : " + val);
    //         console.log(tab);
    //         console.log("tab[val] : " + tab[val]);
    //         console.log("count : " + count);
    //     }
        tab[val] = tab[val] + 1;
        // val = tab[tab[val] - 1] + val ;
        val = tab[val] - 1 + val;
        count++;

    //     console.log("==========");
    //     console.log("val : " + val);
    //     console.log(tab);
    //     console.log("tab[val] : " + tab[val]);
    //     console.log("count : " + count);
    }
    // while (val >= 0 && val < tab.length) {
    //     val += tab[val]++;
    //     count++;
    // }
    // while(val >=0 && val < tab.length) {
    //     let jump = tab[val]++;
    //     val +=jump;
    //     count++
    // }
    return count;
}

function solve2(str) {
    let tab = str.trim().split('\n').map(nb => Number(nb));
    let val = tab[0];
    let count = 0;

    while (tab[val] !== undefined) {
        if(tab[val] >=3){

            tab[val] = tab[val] - 1;
            val = tab[val] + 1 + val;
        } else {

            tab[val] = tab[val] + 1;
            val = tab[val] - 1 + val;
        }
        count++;
    }
    return count;
}

let str = '0\n' +
    '3\n' +
    '0\n' +
    '1\n' +
    '-3';
// console.log(solve2(str));

str = '0\n' +
'0\n' +
'0\n' +
'2\n' +
'2\n' +
'-1\n' +
'-3\n' +
'-3\n' +
'0\n' +
'-6\n' +
'-9\n' +
'0\n' +
'-1\n' +
'-12\n' +
'-9\n' +
'-2\n' +
'0\n' +
'-14\n' +
'-6\n' +
'-2\n' +
'-10\n' +
'-12\n' +
'-10\n' +
'-13\n' +
'-2\n' +
'1\n' +
'-6\n' +
'-14\n' +
'-2\n' +
'-11\n' +
'-7\n' +
'-9\n' +
'-15\n' +
'-22\n' +
'-25\n' +
'-26\n' +
'-19\n' +
'-28\n' +
'1\n' +
'-2\n' +
'-38\n' +
'-39\n' +
'-30\n' +
'-18\n' +
'0\n' +
'-26\n' +
'-1\n' +
'-24\n' +
'-1\n' +
'-30\n' +
'-44\n' +
'-35\n' +
'-9\n' +
'-32\n' +
'-5\n' +
'-34\n' +
'-4\n' +
'-15\n' +
'-21\n' +
'-30\n' +
'-10\n' +
'-32\n' +
'-19\n' +
'-40\n' +
'-12\n' +
'-49\n' +
'-58\n' +
'-2\n' +
'-14\n' +
'-51\n' +
'-37\n' +
'-9\n' +
'-4\n' +
'-48\n' +
'-64\n' +
'-37\n' +
'-55\n' +
'-40\n' +
'-37\n' +
'2\n' +
'-22\n' +
'-68\n' +
'-57\n' +
'-57\n' +
'-83\n' +
'-65\n' +
'-38\n' +
'-22\n' +
'-20\n' +
'-78\n' +
'-27\n' +
'-40\n' +
'-4\n' +
'-83\n' +
'-33\n' +
'-47\n' +
'-74\n' +
'-41\n' +
'-74\n' +
'-68\n' +
'-18\n' +
'-8\n' +
'-27\n' +
'-23\n' +
'-53\n' +
'-70\n' +
'-43\n' +
'-99\n' +
'-48\n' +
'-90\n' +
'1\n' +
'-74\n' +
'-9\n' +
'-80\n' +
'-96\n' +
'-33\n' +
'-7\n' +
'-53\n' +
'-98\n' +
'-54\n' +
'-47\n' +
'-84\n' +
'-81\n' +
'-79\n' +
'-86\n' +
'-14\n' +
'-115\n' +
'-121\n' +
'-30\n' +
'-28\n' +
'-13\n' +
'-113\n' +
'-41\n' +
'-20\n' +
'-34\n' +
'-19\n' +
'-71\n' +
'-39\n' +
'-17\n' +
'-91\n' +
'-115\n' +
'-108\n' +
'-74\n' +
'-134\n' +
'-12\n' +
'-91\n' +
'-27\n' +
'-59\n' +
'-27\n' +
'-132\n' +
'-34\n' +
'-8\n' +
'-52\n' +
'-93\n' +
'-17\n' +
'-151\n' +
'-93\n' +
'-102\n' +
'-62\n' +
'-62\n' +
'-120\n' +
'-25\n' +
'-75\n' +
'-35\n' +
'-162\n' +
'-61\n' +
'-107\n' +
'-83\n' +
'-106\n' +
'-23\n' +
'-168\n' +
'-42\n' +
'-13\n' +
'-74\n' +
'-52\n' +
'-169\n' +
'-123\n' +
'-95\n' +
'-174\n' +
'-56\n' +
'-43\n' +
'-84\n' +
'-21\n' +
'-5\n' +
'-120\n' +
'-130\n' +
'-55\n' +
'-3\n' +
'-93\n' +
'-158\n' +
'-61\n' +
'-4\n' +
'-74\n' +
'-65\n' +
'-157\n' +
'-112\n' +
'-147\n' +
'-24\n' +
'-23\n' +
'-155\n' +
'-82\n' +
'-73\n' +
'-25\n' +
'-82\n' +
'-42\n' +
'-200\n' +
'-120\n' +
'-57\n' +
'-96\n' +
'-38\n' +
'-121\n' +
'-25\n' +
'-211\n' +
'-117\n' +
'-42\n' +
'-181\n' +
'-56\n' +
'-204\n' +
'-193\n' +
'-88\n' +
'-143\n' +
'-167\n' +
'-42\n' +
'-178\n' +
'-204\n' +
'-57\n' +
'-120\n' +
'-33\n' +
'-164\n' +
'-122\n' +
'-219\n' +
'-136\n' +
'-174\n' +
'0\n' +
'-36\n' +
'-64\n' +
'-77\n' +
'-34\n' +
'-158\n' +
'-163\n' +
'-194\n' +
'-212\n' +
'-101\n' +
'-48\n' +
'-216\n' +
'-141\n' +
'-142\n' +
'-189\n' +
'-101\n' +
'-144\n' +
'-158\n' +
'-114\n' +
'-88\n' +
'-251\n' +
'-172\n' +
'-173\n' +
'-94\n' +
'-89\n' +
'-12\n' +
'-188\n' +
'-218\n' +
'-130\n' +
'-33\n' +
'-117\n' +
'-39\n' +
'-245\n' +
'-195\n' +
'-20\n' +
'-37\n' +
'-183\n' +
'-24\n' +
'-48\n' +
'-159\n' +
'-36\n' +
'-68\n' +
'-96\n' +
'-215\n' +
'-127\n' +
'-241\n' +
'-171\n' +
'-44\n' +
'-2\n' +
'-203\n' +
'-27\n' +
'-37\n' +
'-241\n' +
'-173\n' +
'-193\n' +
'-143\n' +
'-52\n' +
'-187\n' +
'-54\n' +
'-236\n' +
'-219\n' +
'-71\n' +
'-197\n' +
'-162\n' +
'-245\n' +
'-133\n' +
'-153\n' +
'-240\n' +
'-250\n' +
'-91\n' +
'-128\n' +
'-20\n' +
'-263\n' +
'-124\n' +
'-46\n' +
'-290\n' +
'-194\n' +
'-191\n' +
'-60\n' +
'-92\n' +
'-97\n' +
'-284\n' +
'-60\n' +
'-44\n' +
'-208\n' +
'-59\n' +
'-6\n' +
'-40\n' +
'-292\n' +
'-1\n' +
'-14\n' +
'-27\n' +
'-71\n' +
'-144\n' +
'-289\n' +
'-16\n' +
'-266\n' +
'-80\n' +
'-138\n' +
'-215\n' +
'-249\n' +
'-104\n' +
'-29\n' +
'-260\n' +
'-124\n' +
'-178\n' +
'-331\n' +
'-283\n' +
'-47\n' +
'-253\n' +
'-80\n' +
'-316\n' +
'-62\n' +
'-15\n' +
'-327\n' +
'-64\n' +
'-201\n' +
'-26\n' +
'-60\n' +
'-110\n' +
'-117\n' +
'-13\n' +
'-99\n' +
'-139\n' +
'-124\n' +
'-25\n' +
'-242\n' +
'-92\n' +
'-10\n' +
'-322\n' +
'-110\n' +
'-169\n' +
'-26\n' +
'-353\n' +
'-284\n' +
'-234\n' +
'-361\n' +
'-95\n' +
'-37\n' +
'-93\n' +
'-186\n' +
'-90\n' +
'-26\n' +
'-90\n' +
'-268\n' +
'-179\n' +
'-305\n' +
'-378\n' +
'-145\n' +
'-238\n' +
'-358\n' +
'-186\n' +
'-108\n' +
'-120\n' +
'-75\n' +
'-109\n' +
'-279\n' +
'-192\n' +
'-308\n' +
'-197\n' +
'-373\n' +
'-19\n' +
'-38\n' +
'-238\n' +
'-133\n' +
'-60\n' +
'-334\n' +
'-45\n' +
'-169\n' +
'-167\n' +
'-257\n' +
'-107\n' +
'-222\n' +
'-380\n' +
'-321\n' +
'-99\n' +
'-177\n' +
'-268\n' +
'-224\n' +
'-45\n' +
'-323\n' +
'-407\n' +
'-167\n' +
'-125\n' +
'-243\n' +
'-331\n' +
'-268\n' +
'-132\n' +
'-254\n' +
'-204\n' +
'-191\n' +
'-280\n' +
'-242\n' +
'-223\n' +
'-313\n' +
'-237\n' +
'-234\n' +
'-274\n' +
'-327\n' +
'-271\n' +
'-362\n' +
'-39\n' +
'-194\n' +
'-184\n' +
'-16\n' +
'-214\n' +
'-46\n' +
'-199\n' +
'-108\n' +
'-332\n' +
'-316\n' +
'-29\n' +
'-327\n' +
'-200\n' +
'-52\n' +
'-260\n' +
'-128\n' +
'-103\n' +
'-67\n' +
'-109\n' +
'-432\n' +
'-399\n' +
'-153\n' +
'-403\n' +
'-176\n' +
'-434\n' +
'1\n' +
'-225\n' +
'-286\n' +
'-375\n' +
'-206\n' +
'-395\n' +
'-275\n' +
'-120\n' +
'-404\n' +
'-381\n' +
'-156\n' +
'-215\n' +
'-350\n' +
'-257\n' +
'-293\n' +
'-231\n' +
'-114\n' +
'-52\n' +
'-149\n' +
'-296\n' +
'-440\n' +
'-413\n' +
'-285\n' +
'-400\n' +
'-265\n' +
'-378\n' +
'-75\n' +
'-381\n' +
'-281\n' +
'-436\n' +
'-137\n' +
'-335\n' +
'-111\n' +
'-92\n' +
'-12\n' +
'-27\n' +
'-20\n' +
'-208\n' +
'-322\n' +
'-151\n' +
'-264\n' +
'-207\n' +
'-361\n' +
'-314\n' +
'-258\n' +
'-81\n' +
'-327\n' +
'-440\n' +
'-286\n' +
'-108\n' +
'-272\n' +
'-392\n' +
'-17\n' +
'-40\n' +
'-486\n' +
'-287\n' +
'-205\n' +
'-211\n' +
'-160\n' +
'1\n' +
'-216\n' +
'-114\n' +
'-32\n' +
'-143\n' +
'-113\n' +
'-489\n' +
'-109\n' +
'-56\n' +
'-371\n' +
'-258\n' +
'-430\n' +
'-29\n' +
'-475\n' +
'-141\n' +
'-477\n' +
'-169\n' +
'-473\n' +
'-264\n' +
'-225\n' +
'-123\n' +
'-412\n' +
'-395\n' +
'-391\n' +
'-28\n' +
'-527\n' +
'-493\n' +
'-471\n' +
'-401\n' +
'-510\n' +
'-430\n' +
'-154\n' +
'-34\n' +
'-533\n' +
'-544\n' +
'-39\n' +
'-535\n' +
'-553\n' +
'-447\n' +
'-144\n' +
'-517\n' +
'-482\n' +
'-362\n' +
'-265\n' +
'-434\n' +
'-504\n' +
'-526\n' +
'-31\n' +
'-53\n' +
'-170\n' +
'-44\n' +
'-126\n' +
'-75\n' +
'-163\n' +
'-136\n' +
'-508\n' +
'-564\n' +
'-289\n' +
'-68\n' +
'-541\n' +
'-165\n' +
'-496\n' +
'-78\n' +
'-117\n' +
'-268\n' +
'-326\n' +
'-361\n' +
'-194\n' +
'-483\n' +
'-495\n' +
'-560\n' +
'-215\n' +
'-363\n' +
'-275\n' +
'-426\n' +
'-160\n' +
'-333\n' +
'-182\n' +
'-457\n' +
'-96\n' +
'-200\n' +
'-569\n' +
'-236\n' +
'-31\n' +
'-365\n' +
'-419\n' +
'-43\n' +
'-366\n' +
'-385\n' +
'-322\n' +
'-430\n' +
'-334\n' +
'-156\n' +
'-377\n' +
'-184\n' +
'-522\n' +
'-289\n' +
'-129\n' +
'-87\n' +
'-501\n' +
'-606\n' +
'-84\n' +
'-163\n' +
'-318\n' +
'-552\n' +
'-442\n' +
'-590\n' +
'-137\n' +
'-517\n' +
'-161\n' +
'-333\n' +
'-497\n' +
'-150\n' +
'-188\n' +
'-401\n' +
'-613\n' +
'-131\n' +
'-595\n' +
'-18\n' +
'-591\n' +
'-134\n' +
'-44\n' +
'-637\n' +
'-500\n' +
'0\n' +
'-349\n' +
'-483\n' +
'-258\n' +
'-124\n' +
'-449\n' +
'-260\n' +
'-150\n' +
'-269\n' +
'-305\n' +
'-650\n' +
'-619\n' +
'-328\n' +
'-478\n' +
'-5\n' +
'-514\n' +
'-73\n' +
'-261\n' +
'-503\n' +
'-101\n' +
'-480\n' +
'-37\n' +
'-192\n' +
'-497\n' +
'-298\n' +
'-464\n' +
'-514\n' +
'-515\n' +
'-203\n' +
'-17\n' +
'-302\n' +
'-9\n' +
'-409\n' +
'-285\n' +
'-140\n' +
'-46\n' +
'-136\n' +
'-470\n' +
'-544\n' +
'-666\n' +
'-590\n' +
'-382\n' +
'-546\n' +
'-619\n' +
'-194\n' +
'-543\n' +
'-323\n' +
'-264\n' +
'-673\n' +
'-177\n' +
'-342\n' +
'-539\n' +
'-507\n' +
'-660\n' +
'-655\n' +
'-272\n' +
'-28\n' +
'-181\n' +
'-266\n' +
'-242\n' +
'-337\n' +
'-116\n' +
'-421\n' +
'-537\n' +
'-24\n' +
'-6\n' +
'-241\n' +
'-110\n' +
'-255\n' +
'-429\n' +
'-31\n' +
'-380\n' +
'-214\n' +
'-337\n' +
'-514\n' +
'-68\n' +
'-102\n' +
'-320\n' +
'-12\n' +
'-648\n' +
'-180\n' +
'-192\n' +
'-554\n' +
'-182\n' +
'-303\n' +
'-623\n' +
'-583\n' +
'-686\n' +
'-367\n' +
'-325\n' +
'-488\n' +
'-71\n' +
'-466\n' +
'-625\n' +
'-402\n' +
'-104\n' +
'-348\n' +
'-690\n' +
'-714\n' +
'-708\n' +
'-212\n' +
'-302\n' +
'-286\n' +
'-44\n' +
'-386\n' +
'-455\n' +
'-456\n' +
'-353\n' +
'-469\n' +
'-145\n' +
'-116\n' +
'-412\n' +
'-273\n' +
'-705\n' +
'-331\n' +
'-519\n' +
'-592\n' +
'-630\n' +
'-396\n' +
'-82\n' +
'-434\n' +
'-35\n' +
'-436\n' +
'-490\n' +
'-471\n' +
'-738\n' +
'-488\n' +
'-476\n' +
'-295\n' +
'-399\n' +
'-262\n' +
'-44\n' +
'-761\n' +
'-121\n' +
'-643\n' +
'-383\n' +
'-221\n' +
'-11\n' +
'-380\n' +
'-555\n' +
'-382\n' +
'-68\n' +
'-554\n' +
'-621\n' +
'-27\n' +
'-549\n' +
'-661\n' +
'-197\n' +
'-116\n' +
'-339\n' +
'-577\n' +
'-206\n' +
'-790\n' +
'-283\n' +
'-248\n' +
'-163\n' +
'-503\n' +
'-481\n' +
'-573\n' +
'-308\n' +
'-650\n' +
'-42\n' +
'-23\n' +
'-451\n' +
'-72\n' +
'-470\n' +
'-709\n' +
'-589\n' +
'-495\n' +
'-377\n' +
'-246\n' +
'-5\n' +
'-667\n' +
'-697\n' +
'-585\n' +
'-511\n' +
'0\n' +
'-787\n' +
'-559\n' +
'-320\n' +
'-81\n' +
'-782\n' +
'-660\n' +
'-153\n' +
'-111\n' +
'-162\n' +
'-584\n' +
'-103\n' +
'-774\n' +
'-827\n' +
'-453\n' +
'-815\n' +
'-290\n' +
'-794\n' +
'-667\n' +
'-524\n' +
'-281\n' +
'-230\n' +
'-205\n' +
'-333\n' +
'-495\n' +
'-705\n' +
'-568\n' +
'-519\n' +
'-132\n' +
'-819\n' +
'-190\n' +
'-736\n' +
'-135\n' +
'-649\n' +
'-712\n' +
'-126\n' +
'-233\n' +
'-827\n' +
'-353\n' +
'-197\n' +
'-803\n' +
'-19\n' +
'-124\n' +
'-691\n' +
'-234\n' +
'-96\n' +
'-690\n' +
'-500\n' +
'-321\n' +
'-277\n' +
'-56\n' +
'-838\n' +
'-512\n' +
'-6\n' +
'-70\n' +
'-611\n' +
'-285\n' +
'-253\n' +
'-14\n' +
'-545\n' +
'-143\n' +
'-193\n' +
'-352\n' +
'-755\n' +
'-634\n' +
'-572\n' +
'-320\n' +
'-132\n' +
'-522\n' +
'-688\n' +
'-273\n' +
'-194\n' +
'-613\n' +
'-492\n' +
'-715\n' +
'-624\n' +
'-581\n' +
'-505\n' +
'-185\n' +
'-468\n' +
'-853\n' +
'-445\n' +
'-407\n' +
'-605\n' +
'-86\n' +
'-583\n' +
'-160\n' +
'-746\n' +
'-436\n' +
'-673\n' +
'-597\n' +
'-479\n' +
'-278\n' +
'-259\n' +
'-503\n' +
'-121\n' +
'-710\n' +
'-169\n' +
'-363\n' +
'-639\n' +
'-325\n' +
'-146\n' +
'-760\n' +
'-673\n' +
'-177\n' +
'-400\n' +
'-431\n' +
'-782\n' +
'-756\n' +
'-166\n' +
'-300\n' +
'-461\n' +
'-917\n' +
'-872\n' +
'-786\n' +
'-921\n' +
'-346\n' +
'-137\n' +
'-638\n' +
'-396\n' +
'-812\n' +
'-107\n' +
'-303\n' +
'-55\n' +
'-70\n' +
'-675\n' +
'-477\n' +
'-520\n' +
'-843\n' +
'-632\n' +
'-290\n' +
'-497\n' +
'-758\n' +
'-20\n' +
'-636\n' +
'-166\n' +
'-681\n' +
'-459\n' +
'-591\n' +
'-332\n' +
'-65\n' +
'-814\n' +
'-373\n' +
'-909\n' +
'-72\n' +
'-71\n' +
'-513\n' +
'-387\n' +
'-209\n' +
'-199\n' +
'-777\n' +
'-663\n' +
'-635\n' +
'-874\n' +
'-596\n' +
'-733\n' +
'-226\n' +
'-950\n' +
'-845\n' +
'-321\n' +
'-94\n' +
'-450\n' +
'-672\n' +
'-665\n' +
'-469\n' +
'-369\n' +
'-415\n' +
'-210\n' +
'-290\n' +
'-911\n' +
'-140\n' +
'-413\n' +
'-823\n' +
'-74\n' +
'-833\n' +
'-163\n' +
'-577\n' +
'-576\n' +
'-926\n' +
'-683\n' +
'-417\n' +
'-970\n' +
'-11\n' +
'-460\n' +
'-689\n' +
'-493\n' +
'-879\n' +
'-797\n' +
'-578\n' +
'-918\n' +
'-633\n' +
'-591\n' +
'-915\n' +
'-550\n' +
'-646\n' +
'-33\n' +
'-122\n' +
'-184\n' +
'-324\n' +
'-1006\n' +
'-937\n' +
'-215\n' +
'-253\n' +
'-420\n' +
'-495\n' +
'-797\n' +
'-950\n' +
'-631\n' +
'-409\n' +
'-528\n' +
'-312\n' +
'-282\n' +
'-594\n' +
'-377\n' +
'-258\n' +
'-1017\n' +
'-354\n' +
'-871\n' +
'-25\n' +
'-650\n' +
'-765\n' +
'-246\n' +
'-710\n' +
'-815\n' +
'-772\n' +
'-733\n' +
'-920\n' +
'-1001\n' +
'-355\n' +
'-581\n' +
'-782\n' +
'-711\n' +
'-1044\n' +
'-922\n' +
'-74\n' +
'-391\n' +
'-3\n' +
'-847\n' +
'-1020\n' +
'-963\n' +
'-1036\n' +
'-1007\n' +
'-123\n' +
'-605\n' +
'-642\n' +
'-591\n' +
'-648\n' +
'-688\n' +
'-555\n' +
'-937\n' +
'-862\n' +
'-885\n' +
'-553\n' +
'-509\n' +
'-723\n' +
'-696\n' +
'-406\n' +
'-960\n' +
'-160\n' +
'-633\n' +
'-823\n' +
'-874\n' +
'-1076\n' +
'-962\n' +
'-736\n' +
'-984\n' +
'-486\n' +
'-645\n' +
'-932\n' +
'-734\n' +
'-744\n' +
'-21\n' +
'-20\n' +
'-506';
console.log(solve2(str));