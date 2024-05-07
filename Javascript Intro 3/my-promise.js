// Task 3 
// Requirements :
// Buat 2 Program dengan promise


// Program Promise 1

// let holiday = new Promise(function(resolve, reject) {
//   let liburan = false;
//   setTimeout(() => {
//     if (liburan) return resolve("Anak-anak menjadi senang");
//     return reject(new Error ("Anak-anak kecewa"));
//   }, 3000);
// });

// holiday.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error.message);
// });


// // // Program Promise 2
function dateWith(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dateWith = true
      if (dateWith) resolve('Jalan-jalan naik mobil') ; reject('Kamu ga jadi keluar & Pulang')
    }, 1000);
  })
}

function watchMovie(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const watchMovie = true
      if (watchMovie) resolve('Nonton di bioskop') ; reject('Kamu ga jadi nonton & Pulang')
    }, 2000);
  })
}

function eatFood(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const eatFood = false
     if (eatFood) resolve('Makan bakso') ; reject('Kamu ga jadi makan bakso & Pulang')
    }, 2000);
  })
}

function coffeTime(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ('Ngopi dulu')
    }, 1000);
  })
}

dateWith()
.then(value => {console.log(value); return watchMovie()})
.then(value => {console.log(value); return eatFood()})
.then(value => {console.log(value); return coffeTime()})
.then(value => {console.log(value); return ('Pulang Kerumah')})
.catch(error =>(console.log(error)))

