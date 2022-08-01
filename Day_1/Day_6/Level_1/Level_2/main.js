//1
let char = "23456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefnkjnjfghiklmnopqrstuvwxyz";
let randChar = "";
let r2 = Math.floor(Math.random() * char.length);
for (let i = 0; i < r2; i++) {
    let random1 = Math.floor(Math.random() * char.length);
    randChar += char[random1];
}
console.log(randChar);
//2
var letters = '0123456789ABCDEF';
var color = '#';
for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
}
console.log(color);
// 3
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var rbgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(rbgColor);

//4
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
const newArr = [];
for (const country of countries) {
    newArr.push(country.toUpperCase());
}

console.log(newArr);
// 5
let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length);
}
console.log(countriesLength);

// 6
let newCountries = [];
for (let i = 0; i < countries.length; i++) {
    newCountries.push([countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length]);
}
console.log(newCountries);
// 7
let countWithoutLand = [];
let countWithLand = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
        countWithLand.push(countries[i]);
    } else {
        countWithoutLand.push(countries[i]);
    }
}
console.log(countWithLand);
// 8
let countWithIa = [];
let countWithoutIa = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("ia")) {
        countWithIa.push(countries[i]);
    } else {
        countWithoutIa.push(countries[i]);
    }
}

console.log("countries with ia:"+""+countWithIa );
console.log("countries without  ia:"+""+countWithoutIa );

// 9
longest = countries.reduce(function (a, b) {
    return a.length > b.length ? a : b;
}, "");
console.log(longest);

//   10
minLength = 4;
maxLength = 6;
let con = countries.filter(function (countries) {
    if (countries.length > minLength && countries.length < maxLength) {
        return countries;
    }
});

console.log(con);
// 11

const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];
longest = webTechs.reduce(function (a, b) {
    return a.length > b.length ? a : b;
}, "");
console.log(longest);

//   12
let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    newWebTechs.push([webTechs[i].toUpperCase(), webTechs[i].length])
}
console.log(newWebTechs);

// 13
mernStack = "mernStack";
mern = mernStack.substring(0, 4);
accr = mern.toLocaleUpperCase();
console.log(accr);



//14
Techs = webTechs.length;
for (let i = 0; i < Techs; i++) {
    console.log(webTechs[i]);
}
//15
fruits = ["Banana", "Orange", "Mango", "Lemon"];
for (i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
console.log(fullStack.join())






