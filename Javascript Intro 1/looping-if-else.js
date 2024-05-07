const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

// Validasi jika nilai tidak boleh kosong
if (mtk === undefined || bahasaIndonesia === undefined || bahasaInggris === undefined || ipa === undefined){
    console.log("Semua nilai harus diisi!");
}else {

// Kumpulan variabel nilaiUN 
const nilaiUN = [mtk, bahasaIndonesia, bahasaInggris, ipa]; 

// Menghitung total nilai UN siswa dengan for loop untuk array
let totalNilai = 0;
for (let i = 0; i < nilaiUN.length; i++){
    totalNilai += nilaiUN[i]
}

// Menghitung nilai rata-rata UN siswa
const nilaiRataRata = totalNilai / nilaiUN.length;


// Menentukan Grade siswa
let grade
    if (nilaiRataRata >= 90 && nilaiRataRata <=100){
        grade = "A";
    } else if (nilaiRataRata >= 80 && nilaiRataRata <=89){
        grade = "B";
    } else if (nilaiRataRata >= 70 && nilaiRataRata <=79) {
        grade = "C";
    } else if (nilaiRataRata >= 60 && nilaiRataRata <=69) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log(nilaiRataRata);
    console.log(grade);
}


