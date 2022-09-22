import {decodedResistorValue} from '../exercises/ex4';
import * as assert from "assert";

describe('Resistor Colors', () => {
    it('Orange and orange and black', () => {
        // @ts-ignore
        assert(decodedResistorValue(['orange', 'orange', 'black']) === '33 ohms');
    })
    it('Blue and grey and brown', () => {
        // @ts-ignore
        assert(decodedResistorValue(['blue', 'grey', 'brown']) === '680 ohms');
    })
    it('Red and black and red', () => {
        // @ts-ignore
        assert(decodedResistorValue(['red', 'black', 'red']) === '2 kiloohms');
    })
    it('Green and brown and orange', () => {
        // @ts-ignore
        assert(decodedResistorValue(['green', 'brown', 'orange']) === '51 kiloohms');
    })
    it('Yellow and violet and yellow', () => {
        // @ts-ignore
        assert(decodedResistorValue(['yellow', 'violet', 'yellow']) === '470 kiloohms');
    })
})
