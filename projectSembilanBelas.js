var a = 1;
var b = 2;
var temp;

console.log("Sebelum swap");
console.log("Nilai a = " + a);
console.log("Nilai b = "+ b);
[a , b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a
console.log("Setelah swap");
console.log("Nilai a = " + a);
console.log("Nilai b = " + b);