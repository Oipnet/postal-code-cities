import * as Module from './main';
import { isValidPostalCode } from './validation/isValidPostalCode';
import { useFetchCities } from './composables/useFetchCities';
import { populateCitySelect } from './presenter/dom.presenter';

// Mock de `ofetch`
jest.mock('ofetch', () => {
    return {
        ofetch: jest.fn(),
    };
});

describe('Module Exports', () => {
  it('should re-export isValidPostalCode', () => {
    expect(Module.isValidPostalCode).toBe(isValidPostalCode);
  });

  it('should re-export useFetchCities', () => {
    expect(Module.useFetchCities).toBe(useFetchCities);
  });

  it('should re-export populateCitySelect', () => {
    expect(Module.populateCitySelect).toBe(populateCitySelect);
  });
});