const searchName = (keyword, limit, callback) => {
    const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirde', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ];

    const result = name.filter(e => e.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit);

    callback(result)
}

const printResult = (result) => {
    console.log(result);
}

searchName('an', 4, printResult);