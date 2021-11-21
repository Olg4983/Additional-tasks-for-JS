// #1
const luckyNumberIs = () => {
    const start = 1016;
    const finish = 1937;
    let masAllNumbers = [];
    for(let i=start; i<=finish; i++){
        masAllNumbers.push(i);
    }
    return Math.max(...masAllNumbers.filter(number => {
        return number%3 === 0 && number%7 === 0 && number%5 != 0 && number%2 != 0;
    })); 

}

console.log('lucky number is ', luckyNumberIs());

// #2
/*
const isEqualSymbols = (word1, word2) => {
    let count = 0;
    for(let i=0; i< word1.length; i++){
        for(let j=0; j< word2.length; j++){
           if(word1[i] === word2[j]){
               count++;
           }
        }
    }
    if(count === Math.max(word1.length, word2.length)){
        return true;
     } else {return false;} 
}

console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) //false
*/

// #3
/*
const unique = (mas) => {
    let masUnique = [];
    mas.forEach(element => {
        if(!masUnique.includes(element)){
            masUnique.push(element);
        }
    });
    return console.log(masUnique);
}

unique([1, 1, 2, 4, 1, 1, 2, 3, 7, 3, 8, 8, 1, 1, 1, 2, 8, 4, 1,9]);
*/

// #4
/*
    const isPalindrome =(word) => {
        let count = 0;
        for(let i=0; i<Math.floor(word.length/2); i++){
            if(word[i] === word[word.length-i-1]){
                count ++;
            }
        }
        if(count === Math.floor(word.length/2)){
            return console.log(true);
        }else{return console.log(false)}

 }

isPalindrome('drac card') // true
isPalindrome('programmer') // false
*/