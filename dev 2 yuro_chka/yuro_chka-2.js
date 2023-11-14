function find_index (ARR)
{
    index = -1;
    for (let i = 0; i < ARR.length; i++)
    {
       let sum1 = 0;
       let sum2 = 0;
       for (let j = 0; j<i; j++) sum1+=ARR[j]; 
       for (let j = ARR.length-1; j>i; j--) sum2+=ARR[j]; 
        if(sum1==sum2) {index = i; break;}
    }
    return index;
}
console.log (find_index([1,2,3,4,3,2,1]));