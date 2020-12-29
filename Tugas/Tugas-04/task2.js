const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if (!error){
            callback(null, month);
        } else {
            callback(new Error('Sorry, data not found!', []));
        }
    }, 4000);
}

const printMonth = (error, month) => {
    if (!error){
        month.map(e => console.log(e));
    } else {
        throw new Error('Sorry, data not found!');
    }
}

getMonth(printMonth);