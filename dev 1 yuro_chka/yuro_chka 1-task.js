const NUM = 10;
let SUM_OF_MULTIPLES = 0;
if (NUM <= 0) return 0;
else
{
    for (let i = 0; i < NUM; i++)
    {
        if(i % 3 == 0||i % 5 == 0)
        {
        SUM_OF_MULTIPLES+=i;
        }
    }
console.log(SUM_OF_MULTIPLES);
}