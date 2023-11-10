import { multiplication } from "./multiplication"

describe('multiplication unit tests', () => {
    
    it('Should mul 2 * 4 = 8', () => {
        let result = 0;
        result = multiplication(2, 4);
        expect(result).toBe(8);
    })

    it(' Should mul 0 * -2 = 0', () => {
        let result = 0;
        result = multiplication(0, -2);
        expect(result).toBe(0);
    })

    it(' Should mul 3.0 * 0.5 = 1.5', () => {
        let result = 0;
        result = multiplication(3.0, 0.5);
        expect(result).toBe(1.5);
    })

    it(' Should mul 2.0 * 1.5 = 3.0', () => {
        let result = 0;
        result = multiplication(2.0, 1.5);
        expect(result).toBe(3.0);
    })

})