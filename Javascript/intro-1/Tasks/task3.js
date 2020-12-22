const printSegitiga = (Arg) => {
    let str = '';
    for( i = Arg; i > 0; i-- ){
        for( j = 1; j <= i; j++ ){
            str += j;
        }
        console.log(str);
        str = '';
    }
}

printSegitiga(5);