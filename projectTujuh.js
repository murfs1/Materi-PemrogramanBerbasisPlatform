const orang = {};

//Menambah Atau Mengubah
orang["nama"] = "Eko Kurniawan";
orang["alamat"] = "Indonesia";
orang["umur"] = 70;

//Menghapus
delete orang["umur"];

console.table(orang);