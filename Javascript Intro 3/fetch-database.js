// Task 4
// Requirements :
// Tampilkan data name nya saja


fetch('https://jsonplaceholder.typicode.com/users') //Get data method fetch API
  .then(response => response.json()) //Ubah data response menjadi JSON
  .then(data => {
    data.forEach(user => { //Iterasi object user
      console.log(user .name); //print key name
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });