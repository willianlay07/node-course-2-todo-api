const {SHA256}      = require('crypto-js');


// var message       = 'I am user number 1';
// var hash        = SHA256(message).toString();
//
//
// console.log(`Message : ${message}`);
// console.log(`Hash Message : ${hash}`);

// var data  = {
//       id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
//
// // token.data.id   = 5;
// // token.hash      = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash    = SHA256(JSON.stringify(token.data)+ 'somesecret').toString();
//
// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed! Do not trust!');
// }

// const jwt           = require('jsonwebtoken');
// var data      = {
//     id: 10
// }
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded   = jwt.verify(token, '123abc');
// console.log('decoded :', decoded);

const bcrypt    = require('bcryptjs');

var password    = '123abc';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hashed) => {
        console.log(hashed);
    })
});


var hashedPassword    = "$2a$10$IkYZ8.SB9KpqhQUBlSOmh.7uzTmzmlpk/bUUiD6.LkZzxywZpzyz2";

bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result);
});
