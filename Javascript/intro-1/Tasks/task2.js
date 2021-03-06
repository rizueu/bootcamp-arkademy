const score = {
    matematika: 50,
    bahasaIndonesia: 100,
    bahasaInggris: 100,
    ipa: 100
}

const {matematika, bahasaIndonesia, bahasaInggris, ipa} = score;

[10 ,80, 90, 95, 100]

const gradingScore = (...nilai) => {
    let average = nilai.reduce((acc, curr) => acc + curr) / nilai.length;
    average = Math.floor(average);
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