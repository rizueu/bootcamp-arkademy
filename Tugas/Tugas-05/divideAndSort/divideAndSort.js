/**
 * Function divideAndSort()
 * @params randomNum: number | string
 * @return random number
 */
function divideAndSort(randomNum) {
    if (typeof randomNum == 'number') {
        randomNum = randomNum.toString().split('0');
    } else if(typeof randomNum == 'string') {
        randomNum = randomNum.split('0');
    }
    let result = randomNum.map(element => element.split('').sort((min, max) => min - max).join(''));
    return Number(result.join(''));
}

const randomNum = 5956560159466056;

console.log(divideAndSort(randomNum));;