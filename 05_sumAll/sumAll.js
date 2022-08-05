const sumAll = function(start, end) {
    let sum = 0;

    if(typeof(start) === 'number' && typeof(end) === 'number')
    {
        for(let i = start; i <= end; i++)
        {
            sum+= i;
        }

        return sum;
    }

    return 'ERROR';

};

// Do not edit below this line
module.exports = sumAll;
