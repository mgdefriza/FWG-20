function printSegitiga(input) {
    
    // Validasi untuk memeriksa apakah input merupakan angka
    if (typeof input !== 'number') {
      console.log("Data harus number");
      return;
    } else {

    let hasil = '';  // Deklarasi variabel result sebagai string kosong (" ") sebagai tempat menyimpan hasilprintSegitiga
    for (let i = input; i >= 1; i--) { // Jumlah tiap baris
      for (let j = 1; j <= i; j++) { // Mencetak angka-angka dalam satu baris
        hasil += j + ' '; // memberikan spasi di antara angka-angka yang dicetak
      }
      hasil += '\n'; // pindah kebaris berikutnya
    }
    
    console.log(hasil);
  }
    }
   
  
  printSegitiga(5);
  printSegitiga("enam");
  