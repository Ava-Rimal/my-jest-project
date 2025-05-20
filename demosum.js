const sum = (a, b = 0) => {
    if (a === undefined || a === null) {
        throw new Error('ei parametreja'); // no parameters
    }
    const result = Number(a) + Number(b);
    if (Number.isNaN(result)) {
        throw new Error('ei lukuja'); // not numbers
    }
    return result;
};

module.exports = sum;