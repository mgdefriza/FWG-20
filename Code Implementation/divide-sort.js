// Task 4
// Requirements :
// Pisah dengan pemisah bilangan "0"
// Urutkan bilangan itu sendiri

 function bilanganInteger(nilai) {

    const numString = nilai.toString()
    const numPisah= numString.split("0");
    const numTerpisah = numPisah.map(num => num.split('').sort() .join(''))
    const numGabung = numTerpisah.join('');
    const numDigabung = parseInt(numGabung);
    
    console.log("Ubah bilangan jadi string          :", numString);
    console.log("Pisahkan, dengan 0 sebagai pemisah :", numPisah);
    console.log("Mengurutkan bilangan tiap elemen   :",numTerpisah);
    console.log("Gabungkan kembali jadi satu string :",numGabung);
    console.log("Output (Convert Integer)           :",numDigabung);

    return numDigabung;
 }

// Penggunaan fungsi
bilanganInteger(5956560159466056);
