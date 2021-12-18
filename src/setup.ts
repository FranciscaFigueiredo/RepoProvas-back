import dotenv from 'dotenv';

let envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';

envFile = process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test';
console.log(process.env.NODE_ENV)
console.log(envFile)
dotenv.config({
    path: envFile,
});
