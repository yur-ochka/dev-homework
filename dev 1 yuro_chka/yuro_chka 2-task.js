const NUM_OF_DISKS = 5;
let COUNT_OF_MOVES = 0;
COUNT_OF_MOVES =(2**NUM_OF_DISKS) - 1; //формула для знаходження мінімальної кількості ходів виглядає як 2^n-1
console.log(COUNT_OF_MOVES);