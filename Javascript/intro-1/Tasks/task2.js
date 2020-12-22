const score = {
    matematika: 100,
    bahasaIndonesia: 100,
    bahasaInggris: 100,
    ipa: 100
}

const {matematika, bahasaIndonesia, bahasaInggris, ipa} = score;

const gradingScore = (...nilai) => {
    const average = nilai.reduce((acc, curr) => acc + curr) / nilai.length;
    if (average < 60){
        console.log(`Rata-Rata = ${average}`);
        console.log('Grade = E')
    } else if (average < 70){
        console.log(`Rata-Rata = ${average}`);
        console.log('Grade = D')
    } else if (average < 80){
        console.log(`Rata-Rata = ${average}`);
        console.log('Grade = C')
    } else if (average < 90){
        console.log(`Rata-Rata = ${average}`);
        console.log('Grade = B')
    } else if (average <= 100){
        console.log(`Rata-Rata = ${average}`);
        console.log('Grade = A')
    } else {
        console.log('Maaf, tolong inputkan nilai dengan benar!');
    }
}

gradingScore(matematika, bahasaIndonesia, bahasaInggris, ipa);