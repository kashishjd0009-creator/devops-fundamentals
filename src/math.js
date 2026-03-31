import 'dotenv/config';

export function add(a,b) {
    return a + b;
}

export function subtract(a,b){
    return a - b;
}

export function multiply(a,b){
    return a*b;
}

export function getAppInfo(){
    return{
        name: process.env.APP_NAME || 'unknown',
        env: process.env.NODE_ENV || 'unknown',
        port: process.env.PORT || 3000,
    };
}