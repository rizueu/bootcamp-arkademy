const addition = (number1, number2) => {
    const result = number1 * number2
    printResult(result)
}

const subtraction = (number1, number2) => {
    const result = number1 - number2
    printResult(result)
}

const printResult = (result) => {
    return console.log(`Hasilnya adalah ${result}`)
}

addition(3, 10)
subtraction(10, 7)

const object = {
    function1: function (result) {
        return console.log(result)
    },
    function2: function () {
        const someWord = 'Hello World'
        this.function1(someWord)
    }
}

object.function2()