let isAccountLocked = false
let userRole = 'user'



if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

let temp = 70;
 
if(temp <= 32) {
    console.log('It is too cold to go outside!');
} else if (temp >= 110) {
    console.log('It is too hot to go outside!');
} else {
    console.log('It is okay to go outside!');
}