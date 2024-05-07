// Task 1 
// Requirements :
// Sambung program dengan try & catch


const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay =  ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek){
                resolve (cek)
            } else{
                reject(new Error ('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}
// Async
// membuat fungsi asynchronous berjalan seolah-olah synchronous
async function doAsync(){
    try{
        const result = await cekHariKerja('minggu');
        // await digunakan untuk menunggu hasil dari fungsi promise cekHariKerja sebelum melanjutkan eksekusi .
        console.log(`${result} adalah hari kerja`);
        // Jika promise berhasil (resolve), hasilnya akan dicetak sebagai hari kerja.
    } catch(error) {
        console.log(`${error}`);
        // Jika promise ditolak (reject), error akan ditangkap dan dicetak.
    }
}

doAsync();