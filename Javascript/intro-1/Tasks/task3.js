const printSegitiga = (Arg) => {
    let str = '';
    for( let vertical = Arg; vertical > 0; vertical-- ){
        for( let horizontal = 1; horizontal <= vertical; horizontal++ ){
            str += horizontal;
        }
        console.log(str);
        str = '';
    }
}

printSegitiga(5);