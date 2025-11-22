import { SSNHelper } from '../src/correct/SSNHelper';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'
// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowDayUpTo30";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn";

describe('SSNHelper Tests', () => {
    const validLengthSSN = '031006-1234'
    const tooLongSSN = '031006-12345'
    const invalidFormatSSN = '0310061234'
    const monthZero = '00'
    const day31 = '31'
    const validLuhnSSN = '811218-9876'

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

    test('isCorrectFormat should return false for a string without dash', () => {
        // Arrange
        const helper = new SSNHelper()

        // Act
        const result = helper.isCorrectFormat(invalidFormatSSN)

        // Assert
        expect(result).toBe(false)
    })

    test('isValidMonth should return false for month zero', () => {
        // Arrange
        const helper = new SSNHelper()

        // Act
        const result = helper.isValidMonth(monthZero)

        // Assert
        expect(result).toBe(false)
    })

    test('isValidDay should return true for day 31', () => {
        // Arrange
        const helper = new SSNHelper()

        // Act
        const result = helper.isValidDay(day31)

        // Assert
        expect(result).toBe(true)
    })

    test('luhnisCorrect should return true for valid luhn', () => {
        // Arrange
        const helper = new SSNHelper()

        // Act
        const result = helper.luhnisCorrect(validLuhnSSN)

        // Asset
        expect(result).toBe(true)
    })
});