const fibonacci = function(number) {
    
    if(number == 1 || number == 2)
    {
        return 1;
    }

    if(number < 1)
    {
        return 'OOPS';
    }

    if(typeof(number) == 'string')
    {
        number = Number(number);
    }

    let firstNumber = 1;
    let secondNumber = 1;
    let FibNumber = 0;

    for(let i = 0; i < number - 2; i++)
    {
        FibNumber = firstNumber+secondNumber;
        firstNumber = secondNumber;
        secondNumber = FibNumber;
    }

    return FibNumber;
};

// Do not edit below this line
module.exports = fibonacci;
