function highAndLow(STR)
{
    const split_str= STR.split(" ");
    let min =Number(split_str[0]);
    let max =Number(split_str[0]);
    for(let i = 0; i < split_str.length; i++)
    {
        if(Number(split_str[i]) > max) max = split_str[i];
        if(Number(split_str[i]) < min) min = split_str[i];
    }
    console.log(max + " " + min);
}
highAndLow("1 2 -3 4 -5 9 10");