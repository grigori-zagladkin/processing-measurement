const getMathExpec = (arr: Array<number>): number => arr.reduce((prev, curr) => (prev += curr)) / arr.length;

const getDisperison = (arr: Array<number>): number =>
    arr.reduce((prev, curr) => (prev += Math.abs(getMathExpec(arr) - curr) ** 2)) / arr.length;

const getStandardDeviation = (arr: Array<number>): number => Math.sqrt(getDisperison(arr));

export default {
    getMathExpec,
    getDisperison,
    getStandardDeviation,
};
