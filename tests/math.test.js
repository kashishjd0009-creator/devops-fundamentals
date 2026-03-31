import { describe, it, expect } from 'vitest';
import { add, subtract, multiply } from '../src/math.js';

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