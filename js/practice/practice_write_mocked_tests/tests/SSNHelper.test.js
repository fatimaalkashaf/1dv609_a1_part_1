// import { SSNHelper } from '../src/correct/SSNHelper';
import {SSNHelper} from '../src/bugs/BuggySSNHelperWrongLength'

describe('SSNHelper Tests', () => {
    const validLengthSSN = '031006-1234'
    const tooLongSSN = '031006-12345'

    test('isCorrectLength should return true for a 11 character string', () => {
        // Arrange
        const helper = new SSNHelper()
        
        //Act
        const result = helper.isCorrectLength(validLengthSSN)

        // Assert
        expect(result).toBe(true);
    });

    test('isCorrectLength should return false for a 12 character string', () => {
        // Arrange
        const helper = new SSNHelper()
        
        //Act
        const result = helper.isCorrectLength(tooLongSSN)

        // Assert
        expect(result).toBe(false);
    });
});