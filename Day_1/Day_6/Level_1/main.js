// 1

for(let i = 0; i <= 10; i++){
  console.log(i)
}

let i = 0
while (i <= 10) {
  console.log(i)
  i++
}

let I = 0
do {
  console.log(I)
  i++
} while (I <= 10)

// 2


for(let i = 10; i > 0; i--){
  console.log(i)
}


let j = 10
while (j > 0) {
  console.log(j)
  j--
}

let J = 10
do {
  console.log(J)
  j--
} while (J >0)

// 3
let n=12

for(let i = 0; i <= n; i++){
  console.log(i)
}
// 4

// 5
for(let i = 0; i <= 10; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}

// 6
for(let i = 0; i <= 10; i++){
  console.log(`${i} * ${i} * ${i} = ${i * i * i}`)
}

// 7
for(i=0; i<=100; i++){
 
  if(i % 2 == 0){
    console.log(i);
  }
}

// 8
for(i=0; i<=100; i++){
 
  if(i % 2 == 1){
    console.log(i);
  }
}

// 9
// for(var i = 0; i < 100; i++){
//   if(isPrime(i)) 
//   console.log(i);
// }

// 10

function isEven(n) {
  return n % 2 == 0;
}

function findSum(no) {
  let sum = 0;
  let i = 1;

  while (i <= no) {
    if (isEven(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(findSum(100));

//**
function isOdd(n) {
  return Boolean(n % 2);
}

function findSum(no) {
  let sum = 0;

  for ( i = 0; i < no; i++) {
    if (isOdd(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(findSum(100));

// 13
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));

// 14
arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

// 15
console.log(generateString(6))



















