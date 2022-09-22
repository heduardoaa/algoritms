import {twoFer} from '../exercises/ex2';
import assert = require("assert");

describe('TwoFer', () => {
    it('no name given', () => {
        const expected = 'One for you, one for me.';
        assert(twoFer('') === (expected));
    })
    it('a name given', () => {
        const expected = 'One for Alice, one for me.';
        assert(twoFer('Alice') === expected);
    })
    it('another name given', () => {
        const expected = 'One for Bob, one for me.';
        assert(twoFer('Bob') === expected);
    })
})
