// Task 1
// Requirments :
// program untuk check apakah sebuah string adalah palindrome atau bukan palindrom.

function checkPalindrom(string) {
    const lenString = string.length;

    for (let i = 0; i < lenString / 2; i++) {
        // pengecekan apakah karakter pertama dan terakhir dari string sama?
        if (string[i].toLowerCase() !== string[lenString - 1 - i].toLowerCase()) {
            return 'Ini bukan Palindrom';  
        }
    }
    return 'Ini Palindrom';
    
}

// Penggunaan fungsi
const output = checkPalindrom('Malam');
console.log(output);
