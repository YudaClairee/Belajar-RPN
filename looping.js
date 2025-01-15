//  while ()
//  for ()

// 1. while
// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// };

// dalam looping itu ada yang namanya arah, ke kiri atau ke kanan. Kalau ke kiri itu decrement dan kalau ke kanan itu increment.
// hati-hati akan infinite loop

// 2. for
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// };

// let nama = "Djibrani";

// for (let i = 0; i < nama.length; i++) {
//   console.log(nama[i]);
// }

// console.log(nama[nama.length - 1]);

// for(let i = 0; i < 5; i++) {
//   for(let j = 0; j < 5; j++) {
//     console.log(j);
//   }

//   console.log(i);
// }

// console.log('selesai');

// counter pada looping
// let i = 0;
// while(i < 55) {
//   console.log(i);
//   i += 2;
// }
// console.log(i);

// meneggabungkan looping dengan if else
// let i = 0;
// while(i <= 100) {
//   if(i % 2 === 0) {
//     console.log(`${i} adalah bilangan genap`);
//   } else {
//     console.log(`${i} adalah bilangan ganjil`);
//   }
//   i++;
// }

// console.log(i);

// Fizzbuzz

let fizzBuzz = [];

for(let i = 0 ; i < 20; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    fizzBuzz.push('Fizzbuzz');
  } else if(i % 3 === 0) {
    fizzBuzz.push('Fizz');
  } else if(i % 5 === 0) {
    fizzBuzz.push("Buzz");
  } else {
    fizzBuzz.push(i);
  }
} 

console.log(fizzBuzz);

// break itu stop
// continue itu skip
