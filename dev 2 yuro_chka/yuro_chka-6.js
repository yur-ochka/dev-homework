function total_land_perimeter(ARR)
{
    let total = 0;
    for(let i = 0; i<ARR.length; i++)
    {
        for (let j = 0; j < ARR[i].length; j++)
        {
            if (ARR[i][j]=='X')
            {
                total += 4;
                if (j != ARR[i].length-1 && ARR[i][j+1]=='X') total--;
                if (i != ARR.length-1 && ARR[i+1][j]=='X') total--;
                if (j != 0 && ARR[i][j-1]=='X') total--;
                if (i != 0 && ARR[i-1][j]=='X') total--;
            }
        }
    }
    return "Total land perimeter: "+ total;
}
console.log(total_land_perimeter(
['XOOXO',
'XOOXO',
'OOOXO',
'XXOXO',
'OXOOO']
));
