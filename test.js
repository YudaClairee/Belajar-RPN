// Cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

// Variabel bisa menampung banyak tipe data seperti string, number, boolean, object, array, dll. 
let nama = 'Yuda'; // string
let umur = 19; // number
let apakahBenar = true; // boolean
let uang = 10000 // number

// operator aritmatika 
let angka1 = 10;
let angka2 = 5;
console.log(angka1 + angka2); // 15
console.log(angka1 - angka2); // 10
console.log(angka1 * angka2); // 50
console.log(angka1 / angka2); // 2
console.log(angka1 % angka2); // 0


// assignment 
let hasilPenampungAritmatika = angka1 + angka2;
console.log(hasilPenampungAritmatika); 
hasilPenampungAritmatika = angka1 - angka2;
console.log(hasilPenampungAritmatika);
hasilPenampungAritmatika = angka1 / angka2;
console.log(hasilPenampungAritmatika);
hasilPenampungAritmatika = angka1 * angka2;
console.log(hasilPenampungAritmatika);

// string bisa ditambah namun tidak bisa dikurang
let namaDepan = 'Yuda';
let namaBelakang = 'Febri';
let namaLengkap = namaDepan + ' ' + namaBelakang;
console.log(namaLengkap); 
console.log(namaDepan - namaBelakang); // NaN

// alur pembacaan code
// membaca dar kiri ke kanan dan atas ke bawah

let number = 10;
console.log(number + 10); // 20
number = 20;
console.log(number + 10); // 30

// false itu 0 dan true itu 1
console.log(true + number); // 21
console.log(false + number); // 20

// membaca error penting karena pasti ada kalanya programmer menemukan error. Justru takut kalau tidak ada error karena jika ada bug tetapi tidak ada error itu yang bikin pusing. 
// const hewan = 'kucing';
// console.log(hewan); // kucing
// hewan = 'kuda';
// console.log(hewan); // error

// auto komentar mencet ctrl + / 
// tips dalam ngoding adalah selalu teliti dan ngoding itu habbit.