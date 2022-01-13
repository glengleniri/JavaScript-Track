for (let number = 1; number <= 100; number++){
    let result = '';
    if (number % 3 ==0) result += 'Fizz';
    if (number % 5 ==0) result += 'Buzz';
    if (number % 3 == 0 && number % 5 == 0) result = 'FizzBuzz';
    console.log( result || number);
}