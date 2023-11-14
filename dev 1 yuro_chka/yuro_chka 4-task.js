function is_prime (NUM)
{
    let count_of_divisors = 0;
    let result = true;
    if(NUM > 0)
    {
        for(let i = 1; i <= NUM; i++)
        {
            if(NUM % i == 0) count_of_divisors++;
            if(count_of_divisors > 2) 
            {
                result = false;
                break;
            }
        }
        if (count_of_divisors == 1) result = false;
        console.log(result);
    }
    else 
    {
        result = false;
        console.log(result);
    }
}
is_prime(1);