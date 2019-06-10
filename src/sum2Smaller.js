const sum2Smaller = (arr = []) => {
    console.log(arr);
    if (arr.length === 0) return 0;
    const quickSort = arr => {
        if (arr.length === 0) return 0;
        const [x, ...xs] = arr;
        const smaller = quickSort(xs.filter(el => el <= x));
        const bigger = quickSort(xs.filter(el => el > x));
        return []
            .concat(smaller)
            .concat(x)
            .concat(bigger);
    };
    const [min1, min2] = quickSort(arr);
    let sum = 0;
    [min1, min2].forEach(item => {
        typeof item === "number" ? (sum += item) : (sum += 0);
    });
    return sum;
};

module.exports = {
    sum2Smaller: sum2Smaller
}