// Task 1 
// Requirements :
// Sambung program dengan then & catch

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

    cekHariKerja('senin')
    .then((result) => {
        console.log(`${result} adalah hari kerja`)
    })
    // .then bekerja dengan resolve
    // Ketika promise berhasil dipenuhi resolved dipanggil
    // Kemudian, nilai tersebut diteruskan ke .then untuk di eksekusi


    .catch(function (error){
        console.log(`${error}`)
    })
    // sementara .catch bekerja dengan reject
    // jika promise ditolak (rejected), reject dipanggil 
    // Kemudian objek Error yang mengandung informasi tentang alasan penolakan diteruskan ke .catch
