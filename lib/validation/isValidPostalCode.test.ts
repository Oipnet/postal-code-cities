import { isValidPostalCode } from './isValidPostalCode';

describe('isValidPostalCode', () => {
    it('Should be numeric', () => {
        expect(isValidPostalCode('A1234')).toBe(false);
        expect(isValidPostalCode('12345')).toBe(true);
    });

    it('Should lenght 5 charactere', () => {
        expect(isValidPostalCode('1234')).toBe(false);
        expect(isValidPostalCode('123456')).toBe(false);
        expect(isValidPostalCode('12345')).toBe(true);
    });
})
