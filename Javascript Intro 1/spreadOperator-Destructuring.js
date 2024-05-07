// Spread operator dan Destructuring

let data = {
    id : 1,
    name : "Leane Graham",
    username : "Bret",
    email : "sincere@april.biz",
    address : {
        street : "Kulas Light",
        suite : "apt 556",
        city : "Gwenborough",
        zipcode : "92998-3874",
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org",
}

// Mengubah data menggunkan spread operator
let newData = {
    ... data,
    name : "M Gilang Defriza",
    username : "mgilangdefriza",
    hobby : "Music",
}
console.log(newData);


// destructuring berdasarkan key
let = { address : {street: jalan, city :kota} } = data;

console.log(jalan, kota)

