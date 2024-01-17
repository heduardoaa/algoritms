import {decodedResistorValue} from '../exercises/ex4';
import * as assert from "assert";

describe('Resistor Colors', () => {
    it('Orange and orange and black', () => {
        assert(decodedResistorValue(['orange', 'orange', 'black']) === '33 ohms');
    })
    it('Blue and grey and brown', () => {
        assert(decodedResistorValue(['blue', 'grey', 'brown']) === '680 ohms');
    })
    it('Red and black and red', () => {
        assert(decodedResistorValue(['red', 'black', 'red']) === '2 kiloohms');
    })
    it('Green and brown and orange', () => {
        assert(decodedResistorValue(['green', 'brown', 'orange']) === '51 kiloohms');
    })
    it('Yellow and violet and yellow', () => {
        assert(decodedResistorValue(['yellow', 'violet', 'yellow']) === '470 kiloohms');
    })
})
