const user = {
    namaDepan : "Raffi",
    namaBelakang : "Ahmad",
    age : 19,
};

let namaDepan = "Dimas";
let age = 20;
//menginisialisasi object baru melalui destructing object
console.log(namaDepan);
console.log(age);
({namaDepan, age} = user );
