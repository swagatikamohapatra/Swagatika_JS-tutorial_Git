// 1

// 2

// 3

// 4

const countries=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
console.log(countries);

// 5
countries.map((c) => c.length);

// 6
// 7
let coun = countries.find((a) => a.includes("land"));
console.log(coun);

// 8
coun = countries.find((a) => a.includes("ia"));
console.log(coun);

// 9
longest = countries.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  }, "");
  console.log(longest);

//   10
minLength = 4;
maxLength = 6;
res= countries.filter(function (countries) {
  if (countries.length > minLength && countries.length < maxLength) {
    return countries;
  }
});

console.log(res);
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

// 13
mernStack = "mernStack";
mern = mernStack.substring(0, 4);
accr=mern.toLocaleUpperCase();
console.log(accr);



//14
  iterate = webTechs.length;
  for (var i = 0; i < iterate; i++) {
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


  



  