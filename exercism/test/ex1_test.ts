import {hello} from '../exercises/ex1';
import * as assert from "assert";

describe('Hello World', () => {
    it('says hello world', () => {
        assert(hello() === 'Hello, World!');
    })
})
