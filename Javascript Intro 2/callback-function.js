// Task 2 Requirements:
// - Jumlah ouput dibatasi.
// - Menerapkan callback function.

const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
  ];
  

  // Memfilter array names dengan parameter query.
  // Menentukan hasil pencarian sesuai dengan batasan yang ditentukan oleh limit.
  function searchName(query, limit, cb) {
    const results = names.filter(name => name
      .toLowerCase()
      .includes(query.toLowerCase())) 
      .slice(0, limit);
    
      // Memanggil fungsi callback dengan hasil pencarian.
      cb(results);
  }
  
  // Fungsi callback untuk mengonversi hasil pencarian menjadi tipe string dan huruf kapital
  // dan menampilkan total hasil pencarian dengan literals
  function upperCase (results) {
    const upperCaseResults = results.map(name => name.toUpperCase()) .toString();
    console.log(`Total hasil: ${results.length}`)
    console.log(upperCaseResults);
  }

  // Fungsi callback untuk menambahkan teks "Nama: " ke setiap hasil pencarian
  function addText(results) {
    const addTextResults = results.map(name => `Nama: ${name}`);
    console.log(`Total hasil: ${results.length}`);
    console.log(addTextResults);
  }
  

  searchName("o", 6, upperCase);
  searchName("o", 6, addText);