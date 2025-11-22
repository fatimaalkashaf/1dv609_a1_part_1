import { expect, jest } from '@jest/globals'
// import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber';
import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'


//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    const validSSN = '031006-1234'
    const ssnWithSpaces = '  031006-1234  '

    test('constructor should accept valid SSN', () => {
        // Arrange
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }
        
        // Act
        expect(() => new SwedishSocialSecurityNumber(validSSN, mockHelper)).not.toThrow();
    });

    test('constructor should trim leading and trailing spaces', () => {
        // Arrange
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        // Act
        const ssn = new SwedishSocialSecurityNumber(ssnWithSpaces, mockHelper)

        // Assert
        expect(mockHelper.isCorrectLength).toHaveBeenCalledWith('031006-1234')
    })
});