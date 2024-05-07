// Task 3 Requirments :
// - Buat fungsi dengan parameter nilaiAwal,nilaiAkhir,dataArray.
// - Validasi nilaiAkhir > nilaiAwal.
// - Validasi jumlah dataArray harus > 5.
// - Hasil Output diurutkan.


function seleksiNilai(nilaiAwal,nilaiAkhir,dataArray){
    if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number")
        return "Nilai harus bertipe number";

    if (nilaiAwal >= nilaiAkhir)
        return "Nilai akhir harus lebih besar dari nilai Awal!";

    if (!Array.isArray(dataArray))
        return "Data array harus bertipe array";

    if (dataArray.length <= 5)
        return "Data array harus lebih dari 5!";


    const filterNilai = dataArray
     .filter(nilai => nilai > nilaiAwal && nilai < nilaiAkhir);
    
    
    if (filterNilai.length > 0){
        filterNilai.sort();
        return filterNilai; 
    }
        
    return "Nilai tidak ditemukan !";
}

console.log(seleksiNilai(3, 10 , [7,5,4,55,98,1000])); //[ 4, 5, 7 ]
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])); // Nilai akhir harus lebih besar dari nilai Awal!
console.log(seleksiNilai(4, 17 , [2, 25, 4])); // Data array harus lebih dari 5!
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])); // Nilai tidak ditemukan !
console.log(seleksiNilai(4, 17 , 2, 25, 4)); // Data array harus bertipe array
