// 1
let arr=[];
console.log(arr);

//2
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);
// 3
console.log("No.of numbers", numbers.length);
// 4
const fruits=['apple','banana','orange','mango','grapes'];
let firstfruit=fruits[0];
console.log(firstfruit);

let middle=math.floor(fruits.length/2);
let middleIndex=fruits[middle];
console.log(middleIndex);

let lastindex=fruits.length-1
lastfruit=fruits[lastindex];
console.log(lastfruit);

// 5
mixedatatype = [3, 10, 5,"bini", 9.81, 0.56,"orange"];
console.log(mixedatatype.length);

// 6
let itCompanies = ["Facebook", "Google","microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// 7
console.log(itCompanies);
//8
console.log("No. of Companies:", itCompanies.length);
//9
firstIndex = itCompanies[0];
console.log(firstIndex);


middleCompany = Math.floor(itCompanies.length / 2);
middleIndex = itCompanies[middleCompany];
console.log(middleIndex);


lastIndex = itCompanies.length - 1;
lastCompany = itCompanies[lastIndex];
console.log(lastCompany);

//10
console.log(itCompanies.slice(0, itCompanies.length));
// 11

let companies=itCompanies.toString();
companies=companies.toUpperCase();

console.log(companies.split(','));

//12
let sentence=['Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies']
// sentence=sentence.split();
console.log(sentence);
//13
company=companies.includes('HP');
if (company==false) {
    console.log('not found')
}
// 14

//15
console.log(itCompanies.sort());
//16
console.log(itCompanies.reverse());


//17
itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
console.log(itCompanies.slice(0,3));

//18
console.log(itCompanies.splice(itCompanies.length-3,itCompanies.length));
// 19

middleCompany = Math.floor(itCompanies.splice(itCompanies.length / 2));
middleIndex = itCompanies[middleCompany];
console.log(middleIndex);


// 20
console.log(itCompanies.shift(0));
// 21

middleCompany = Math.floor(itCompanies.shift(itCompanies.length / 2));
middleIndex = itCompanies[middleCompany];
console.log(middleIndex);

// 22
 console.log(itCompanies.shift(itCompanies.length-1));



