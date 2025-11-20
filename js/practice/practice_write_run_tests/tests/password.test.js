
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
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const passwordWith11Characters = 'abcdefghij1'
    const passwordWith12Characters = 'abcdefghijk1'
    const expectedHashFor12Characters = 8061291001640368000
    const passwordWithSpaces = '  abcdefghijk1  '
    
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
})