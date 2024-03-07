const jwt = require('jsonwebtoken');

// Secret key for signing the token (replace with your own)
const secretKey = "ThisisAsecretKey";

// Payload data to be encoded in the token
const payload = {
    name: "Jirateep Atom",
    email: "myGmail@Gmail.com",
    admin: true,
};

// Encode the payload and create the JWT with H2 algorithm (HS256)
const encodedToken = jwt.sign(payload, secretKey, { algorithm: 'HS256' });

console.log("This is my encoded", encodedToken);