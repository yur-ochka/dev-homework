function descendingOrder(NUM)
{
    let split_num = NUM.split("");
    for (let i = 0; i < split_num.length; i++)
    {
        for (let j = 0; j < split_num.length-1; j++)
        {
        if(Number(split_num[j])<Number(split_num[j+1]))
        {
            let temp_num = split_num[j];
            split_num[j] = split_num[j+1];
            split_num[j+1] = temp_num;
        }
        }
    }
    // split_num = split_num.sort();
    // split_num = split_num.reverse();
    let newNum = split_num.join("");
    console.log(newNum);
}
descendingOrder("42894378634145");