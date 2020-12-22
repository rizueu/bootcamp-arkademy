function sayHello(name, callback) {
    let word = `Hello, ${name}`
    callback(word)
}

function showGreeting(greeting) {
    console.log(greeting)
}

sayHello('Rizki', showGreeting);