const user = {
    namaDepan : "Raffi",
    namaBelakang : "Ahmad",
    age : 19,
};

// const{namaDepan, age, isMale} = user;
// console.log(namaDepan);
// console.log(age);
// console.log(isMale);

const{namaDepan, age, isMale = false} = user;
console.log(namaDepan);
console.log(age);
console.log(isMale);
