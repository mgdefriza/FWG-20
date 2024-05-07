// Task 3 
//Requirements :
//Buatlah sebuah function yang menerima 4 parameter
//FazzFood(harga, voucher, jarak, pajak)



function hitungDiskon(harga,voucher){
    let diskon = 0;
    if (voucher === 'FAZZFOOD50' && harga >= 50000){ //Jika menggunakan FAZZFOOD50
        diskon = Math.min(harga* 0.5, 50000); //diskon max Rp.50000,-
    } else if (voucher === 'DITRAKTIR60' && harga >= 25000){ //Jika menggunakan DITRAKTIR60
        diskon = Math.min(harga * 0.6, 30000); //diskon max Rp. 60000,-
    }
    return (diskon);
}

function biayaPengiriman(jarak){
    const biayaPertama = 5000;
    const biayaKmSelanjutnya = 3000;
    let ongkir = biayaPertama;
    if (jarak > 2) { //Jika jarak lebih dari 2 km maka ongkir + biaya per/km
        ongkir += (jarak -2) * biayaKmSelanjutnya;
    }
    return ongkir;
}

// Pajak Restaurant
function pajakResto(harga, kenaPajak){
    const pajak = 0.05; //Pajak 5%
    if (kenaPajak) return harga * pajak; //Menghitung pajak jika kenaPajak (true)
    return 0; //(false)
}

// Fungsi fazzFood
function fazzFood(harga, voucher, jarak, pajak){
    const diskon = hitungDiskon(harga,voucher); //Menghitung Diskon
    const biayaOngkir = biayaPengiriman(jarak); //Menghitung Ongkir
    const pajakRestaurant = pajakResto(harga, pajak); //Menghitung Pajak
    const hargaDiskon = harga - diskon; //Potongan setelah didiskon
    const totalHarga = hargaDiskon + biayaOngkir + pajakRestaurant; //Total yang harus dibayar

    //Output
    console.log('Harga       :', harga);
    console.log('Potongan    :', diskon);
    console.log('Biaya antar :', biayaOngkir);
    console.log('Pajak       :', pajakRestaurant);
    console.log('Subtotal    :', totalHarga);

    return totalHarga;
}

fazzFood(75000, "FAZZFOOD50", 5, true);