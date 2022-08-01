
// 2
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words);
console.log(words.length);
// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('meat');
console.log(shoppingCart);

const ShoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
ShoppingCart.push('sugar');
console.log(ShoppingCart);

const Shoppingcart = ['Milk', 'Coffee', 'Tea', 'Honey']
Shoppingcart.pop('Honey');
console.log(Shoppingcart);


const ShoppinGcart = ['Milk', 'Coffee', 'Tea', 'Honey']
ShoppinGcart['Tea'] = 'greentea';
let lastindex = ShoppinGcart.length - 2
console.log(ShoppinGcart);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
countries[4] = 'ETHOPIA'  // Replacing Ethopia by ETHOPIA

console.log(countries);

  let index = countries.indexOf('Ethopia')  // 4

if(index === -1){
   console.log('This country does not exist in the array')  
} else {
    console.log('This country does exist in the array')
}

// 6


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack=frontEnd.concat(backEnd);

console.log(fullStack);


