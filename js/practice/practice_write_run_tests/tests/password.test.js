
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
import { Password } from '../src/MyCustomBug'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const passwordWith11Characters = 'abcdefghij1'
    const passwordWith12Characters = 'abcdefghijk1'
    const expectedHashFor12Characters = 8061291001640368000
    const passwordWithSpaces = '  abcdefghijk1  '
    const passwordA = 'abcdefghijk1'
    const passwordB = 'lmnopqrstuv2'
    const passwordWithoutNumbers = 'abcdefghijkl'
    
    test('constructor should throw Too short password Error for a 11 characters password', () => {
       expect(() => new Password(passwordWith11Characters)).toThrow('Too short password')
    })

    test('getPasswordHash should return correct Hash for 12 characters password', () => {
        // Act
        const password = new Password(passwordWith12Characters)
        const actualHash = password.getPasswordHash()

        // Assert
        expect(actualHash).toBe(expectedHashFor12Characters)
    })

    test('getPasswordHash should return same hash for password with leading and trailing spaces', () => {
        // Arrange
        const passwordWithoutSpaces = new Password(passwordWith12Characters)
        const expectedHash = passwordWithoutSpaces.getPasswordHash()

        // Act
        const passwordWithSpacesObject = new Password(passwordWithSpaces)
        actualHash = passwordWithSpacesObject.getPasswordHash()

        // Assert
        expect(actualHash).toBe(expectedHash)
    })

    test('isPasswordSame should return false for different passwords', () => {
        // Arrange
        const password1 = new Password(passwordA)
        const password2 = new Password(passwordB)

        // Act
        const result = password1.isPasswordSame(password2)

        // Assert
        expect(result).toBe(false)
    })

    test('constructor should throw No number found error for password without a number', () => {
        // Act & Assert
        expect(() => new Password(passwordWithoutNumbers)).toThrow('No number found')
    })

    test ('isPasswordSame should throw Invalid argument error for a non password argument', () => {
        // Arrange
        const password = new Password(passwordWith12Characters)
        const notAPassword = 'just a string'

        // Act and Assert
        expect(() => password.isPasswordSame(notAPassword)).toThrow('Invalid argument')
    })
})