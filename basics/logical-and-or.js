let temp = 55;

if(temp >= 60 && temp <= 90) {
    console.log('It is nice outside!');
} else if (temp >= 100 || temp <= 32) {
    console.log('It is miserable out there!');
} else {
    console.log('Eh.. Do what you want!');
}

let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan == true && isGuestTwoVegan == true) {
    console.log('The Vegan Menu!');
} else if(isGuestOneVegan == true || isGuestTwoVegan == true) {
    console.log('A bit Vegan menu!');
} else {
    console.log('Non Vegan Menu!');
}

