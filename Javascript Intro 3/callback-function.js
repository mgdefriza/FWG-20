//Task 2
//Requirements :
//menampilkan Data months dengan cb method .map


const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000);
};

//Callback function menampilkan semua bulan.
function showMonth(error,months){
    if(!error){
        months.map((month, index)=>{
            console.log(`${index + 1}. Bulan ${month}`) //metode map untuk menampilkan semua bulan dalam huruf kapital
        })
    } else console.log(error.message);
}


// Penggunaan fungsi.
getMonth(showMonth);