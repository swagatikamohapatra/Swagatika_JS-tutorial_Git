
// 1

let b=20
let h=10

const areaoftriangle=0.5*b*h
console.log(areaoftriangle);

// 2

let sideA=5
let sideB=4
let sideC=3
const Triangleperimeter=sideA+sideB+sideC
console.log(Triangleperimeter);

// 3
let l=10
let w=20
const areaofrectangle=l*w
const perimeterofrectangle=2*(l+w)
console.log(areaofrectangle,perimeterofrectangle);


// 4
let r=6
const pi=3.14
const areaofcircle=pi*r*r
const circumferenceofcircle=2*pi*r
console.log(areaofcircle,circumferenceofcircle);

// 5
let x=10
const yIntercept=2*x-2
console.log(yIntercept);

// 6
let y1=2
let y2=2
let x1=10
let x2=6
const m=(y2-y1)/(x2-x1)
console.log(m);

// 7


// 8
let X= -2
const y= X**X + 6*X + 9
console.log(y);


// 9
let hours=40
let rateperhour=28
const weeklyearning=hours*rateperhour
console.log(weeklyearning);

// 10
// 11
let firstName='swagatika';
let secondName='bini';

if (firstName.length > secondName.length) {
    console.log("Your first name swagatika longer than family name bini.");
}
// 12
let myAge = 250
let yourAge = 25

if (myAge.length > yourAge.length){
    console.log("I am 225 years older than you.");
}

// 15
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const Hours = now.getHours()
const minutes = now.getMinutes()



console.log(`${year}-${month}-${date} ${Hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${Hours}:${minutes}`) 

console.log(`${date}-${month}-${year} ${Hours}:${minutes}`)
