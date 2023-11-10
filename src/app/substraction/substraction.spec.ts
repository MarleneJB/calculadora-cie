import { substraction } from "./substraction"

describe('substraction unit tests', () => {
    
    it('Should subs 0 - 4 = -4', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = substraction(0, -4);

        // Assert
        expect(result).toBe(-4);
    })

    it('Should subs 9 - 3 = 6', () => {
        // Arrange
        let result = 0;
        // Act
        result = substraction(9, 3);
        // Assert
        expect(result).toBe(6);
    })

    it('Should subs 3.1416 - 0.1416 = 3.0', () => {
        // Arrange
        let result = 0;
        // Act
        result = substraction(3.1416, 0.1416);
        // Assert
        expect(result).toBe(3.0);
    })

    it('Should subs 5 - 2.5 = 2.5', () => {
        // Arrange
        let result = 0;
        // Act
        result = substraction(5, 2.5);
        // Assert
        expect(result).toBe(2.5);
    })

})
