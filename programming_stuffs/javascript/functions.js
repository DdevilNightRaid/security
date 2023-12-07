function printUserName(userName){
    console.log('Hey, ' + userName);
    console.log(userName + ' you study in grade 12');
}

function findSum(x, y){
    let sum = x + y
    console.log(`The sum of ${x} + ${y} = ${sum}`)
}

findSum(5,2);
findSum(2,2);


const findSumT = (x, y) => {
    let sum = x + y
    console.log(`The sum of ${x} + ${y} = ${sum}`)
}