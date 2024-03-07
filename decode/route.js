"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var jwt = require("jsonwebtoken");

// Replace `encodedToken` with the actual encoded token you received
var encodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmlyYXRlZXAgQXRvbSIsImVtYWlsIjoibXlHbWFpbEBHbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzA5ODExNTYxfQ.DZPNkvdlcP0Au1ZGmqtrm4DIpyeiq0AgjS1qHqDJT1Y";

// Secret key used for signing the token (must match the one used for encoding)
var secretKey = "ThisisAsecretKey";

var decodedPayload = jwt.verify(encodedToken, secretKey, { algorithms: ['HS256'] });

console.log("This is my decode", decodedPayload);
