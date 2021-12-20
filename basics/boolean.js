// === Equality operator
// !== NOt Equal operator
// < Less than operator
// > Greater than operator
// <= Less than or equal to
// >= Greater than or equal to

let temp = 180;
let isFreezing = temp <= 32

if (isFreezing) {
    console.log("It is freezing outside!");
}

if (temp >= 110) {
    console.log('It is way too hot outside!');
}

let age = 67;
/*let isChild = age <= 7
let isSenior = age >= 65

console.log(isChild);
console.log(isSenior);
*/

if (age <= 7) {
    console.log('You are qualified for child pricing!');
}

if (age >= 65) {
    console.log('You are qualified to senior discount!');
}