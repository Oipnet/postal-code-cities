import { populateCitySelect } from './populateCitySelect';
import { City } from '../interfaces/City';
import '@testing-library/jest-dom';

describe('populateCitySelect', () => {
    let selectElement: HTMLSelectElement;

    beforeEach(() => {
        // Créer un élément select pour chaque test
        document.body.innerHTML = '<select id="city-select"></select>';
        selectElement = document.querySelector('#city-select') as HTMLSelectElement;
    });

    it('should populate the select element with city options', () => {
        const cities: City[] = [
            { codePostal: '75001', name: 'Paris' },
            { codePostal: '69001', name: 'Lyon' }
        ];

        populateCitySelect(cities, '#city-select');

        expect(selectElement).toHaveLength(2); // Vérifie qu'il y a 2 options
        expect(selectElement.options[0].value).toBe('75001');
        expect(selectElement.options[0].text).toBe('Paris');
        expect(selectElement.options[1].value).toBe('69001');
        expect(selectElement.options[1].text).toBe('Lyon');
    });

    it('should throw an error if no element is found with the given selector', () => {
        expect(() => populateCitySelect([], '#non-existent-select')).toThrowError(
            'No element found with selector #non-existent-select'
        );
    });

    it('should disable the select element if no cities are provided', () => {
        populateCitySelect([], '#city-select');

        expect(selectElement).toBeDisabled();
        expect(selectElement).toBeEmptyDOMElement(); // Vérifie que le select est vide
    });

    it('should set the select element to inert and enabled if exactly one city is provided', () => {
        const cities: City[] = [{ codePostal: '75001', name: 'Paris' }];

        populateCitySelect(cities, '#city-select');

        expect(selectElement).toHaveLength(1);
        expect(selectElement).toBeEnabled();
        expect(selectElement.inert).toBeTruthy(); // Vérifie que l'élément est inert
    });

    it('should enable the select element and remove inert if more than one city is provided', () => {
        const cities: City[] = [
            { codePostal: '75001', name: 'Paris' },
            { codePostal: '69001', name: 'Lyon' }
        ];

        populateCitySelect(cities, '#city-select');

        expect(selectElement).toBeEnabled();
        expect(selectElement.inert).toBeFalsy(); // Vérifie que l'élément n'est pas inert
    });
});