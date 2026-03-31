import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, getAppInfo } from '../src/math.js';
import 'dotenv/config'; //Do we need this here? Because we are assigning mock data to process.env in the test!

describe('math', () =>{
    it('adds two numbers', () =>{
        expect(add(10,20)).toBe(30);
    });

    it('subtracts two numbers', () =>{
        expect(subtract(30,10)).toBe(20);
    });

    it('multiplies two numbers', ()=>{
        expect(multiply(20,10)).toBe(200);
    });
});

describe('config', () => {
        it('reads app name from environment', ()=>{
            process.env.APP_NAME = 'test-app';
            const info = getAppInfo();
            expect(info.name).toBe('test-app');
        });

        it('falls gracefully when env vars are missing', () =>{
            delete process.env.APP_NAME; //WHY? To ensure that the test is not affected by any existing environment variable and to test the default behavior of getAppInfo when APP_NAME is not set.
            const info =  getAppInfo();
            expect(info.name).toBe('unknown');
        });
    }
);