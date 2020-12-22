const printSegitiga = (Arg) => {
    let text = '';
    for( i = Arg; i > 0; i-- ){
        for( j = 1; j <= i; j++ ){
            text += j;
        }
        console.log(text);
        text = '';
    }
}

printSegitiga(5);