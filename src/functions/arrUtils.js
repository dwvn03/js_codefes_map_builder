export function array1DTo2D(srcArr, colCount) {
    let resultArr = [];

    for (let i = 0; i < srcArr.length; i += colCount) {
        resultArr.push(srcArr.slice(i, i + colCount));
    }

    return resultArr;
}

export function array2DTo1D(srcArr) {
    let resultArr = [];

    for (let row of srcArr) {
        resultArr = resultArr.concat(row);
    }

    return resultArr;
    // return [].concat(...srcArr);
}

export function gen2DArr(width, height, defaultValue = 3) {
    return Array.from(Array(height), () => new Array(width).fill(defaultValue));
}