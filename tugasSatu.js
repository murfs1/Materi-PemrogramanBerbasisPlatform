function dataMahasiswa(parm1, parm2) {
    let result = (parm1 + parm2)/2
    return result
}

let namaMahasiswa = "Muhamad Rifda Firdaus. S"
let kelasMahasiswa = "TI 22 H"
let jurusan = "Teknik Informatika"
let universitas = "Universitas Nusa Putra"
let NIM = 20220040211
let ipkPertama = 3.2
let ipkKedua = 3.4

let totalIpk = dataMahasiswa(ipkPertama, ipkKedua)

console.log(`Nama        : ${namaMahasiswa}`);
console.log(`Universitas : ${universitas}`);
console.log(`Jurusan     : ${jurusan}`);
console.log(`NIM         : ${NIM}`);
console.log(`IPK         : ${totalIpk}`);