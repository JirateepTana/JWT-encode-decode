import * as jwt from 'jsonwebtoken';

// Replace `encodedToken` with the actual encoded token you received
const encodedToken = "your_encoded_token";

// Secret key used for signing the token (must match the one used for encoding)
const secretKey = "ThisisAsecretKey";

// Decode the token and get the payload data
type DecodedPayload = { [key: string]: any }; // Define interface for decoded payload

const decodedPayload: DecodedPayload = jwt.verify(encodedToken, secretKey, { algorithms: ['HS256'] });

console.log(decodedPayload);
