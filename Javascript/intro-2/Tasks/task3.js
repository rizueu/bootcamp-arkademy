const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    // Validation
    if (nilaiAwal > nilaiAkhir) return "Nilai akhir harus lebih besar dari nilai awal!";
    if (dataArray.length < 5) return "Jumlah angka dalam dataArray harus lebih dari 5!";

    return dataArray.filter(e => e >= nilaiAwal && e <= nilaiAkhir)
                    .sort((min, max) => min - max);
}

const dataArray = [2,25,4,14,17,30,8];

console.log(seleksiNilai(5, 20, dataArray));