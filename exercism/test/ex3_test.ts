import assert = require("assert");
import {decodedValue} from "../exercises/ex3";

describe('Resistor Colors', () => {
    it('Brown and black', () => {
        assert(decodedValue(['brown', 'black']) === 10);
    })
    it('Blue and grey', () => {
        assert(decodedValue(['blue', 'grey']) === 68);
    })
    it('Yellow and violet', () => {
        assert(decodedValue(['yellow', 'violet']) === 47);
    })
    it('Orange and orange', () => {
        assert(decodedValue(['orange', 'orange']) === 33);
    })
    it('Ignore additional colors', () => {
        assert(decodedValue(['green', 'brown', 'orange']) === 51);
    })
})
