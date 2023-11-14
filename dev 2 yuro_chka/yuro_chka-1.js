function council (ARR, num)
{
    let q = ARR.length / num;
    let max_sum = 0;
    for (let i = 0; i < q; i++)
    {
        let temp_sum = 0;
        for (let j = i; j < ARR.length; j+=q)
        {
            temp_sum += ARR[j];
        }
        max_sum = Math.max (max_sum, temp_sum);
    }
    return max_sum;
}
console.log (council ([1, 5, 6, 3, 4, 2], 3));