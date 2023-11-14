function sosiski(ARR) {
    let salary = 0;
    let ans = "";
    for (let i = 0; i < ARR.length; i++) 
    {
        for (let q = 0; q < ARR[i].length; q++) 
        {
            if (ARR[i][q][0] == "[" && ARR[i][q][5] == "]") 
            {
                if (ARR[i][q].length == 6) 
                {
                    if (ARR[i][q][1] == ARR[i][q][2] && ARR[i][q][2] == ARR[i][q][3] && ARR[i][q][3] == ARR[i][q][4]) 
                    {
                        salary++;
                        if (salary % 5 != 0) ans += ARR[i][q].slice(1).slice(0, -1).split('').join(' ') + " ";
                    }
                }
            }
        }
    }
    return ans;
}
console.log(sosiski([ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU",
"[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]));