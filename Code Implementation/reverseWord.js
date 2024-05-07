//Task 2
//Requirements:
//Ubah urutan kata-kata pada kalimat menjadi terbalik (ReverseWord)

function reverseWords(input) {

    let reversedKata = ""; // String hasil akhir dengan urutan kata terbalik
    let tempKata = ""; // Variabel sementara untuk membangun kata
    let savedKata = []; // Array untuk menyimpan kata yang dipisahkan

    // Memisahkan kata dan menyimpannya dalam array
    for (let i = 0; i < input.length; i++) {

        if (input[i] === ' ') {
            savedKata[savedKata.length] = tempKata; // Menyimpan kata ke dalam array
            tempKata = ""; // Mereset variabel kata untuk membangun kata baru

            continue;
        } 
        tempKata += input[i]; // Membangun kata dengan menambahkan karakter satu per satu   
    }

    savedKata[savedKata.length] = tempKata; // Menambahkan kata terakhir ke dalam array

    // Membalik urutan kata
    for (let i = savedKata.length - 1; i >= 0; i--) {
        
        reversedKata += savedKata[i]; // Menambahkan kata ke variabel reversed kata
        
        if (i !== 0) reversedKata += ' '; // Menambahkan spasi jika bukan kata terakhir
        
    }
    console.log(reversedKata);
    return reversedKata; // Mengembalikan string dengan urutan kata terbalik

}

// Penggunaan fungsi.
reverseWords('Saya belajar javascript');









