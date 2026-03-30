import { describe, it, expect } from 'vitest';
import { add, subtract } from '../src/math.js';

describe('math', () =>{
    it('adds two numbers', () =>{
        expect(add(10,20)).toBe(30);
    });

    it('subtracts two numbers', () =>{
        expect(subtract(30,10)).toBe(20);
    });
});