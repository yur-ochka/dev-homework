function findNb(m)
{
    let n = 0;
    let temp_sum = 0;
    while (temp_sum < m)
    {
        n++;
        temp_sum += n**3;      
    }
    if (temp_sum == m) console.log(n);
    else console.log(-1);
}
findNb(1071225);