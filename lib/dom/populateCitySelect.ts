import { City } from "../interfaces/City";

export const populateCitySelect = (cities: City[], selectElementSelector: string) => {
    const selectElement = document.querySelector(selectElementSelector) as HTMLSelectElement;
    if (!selectElement) {
        throw new Error(`No element found with selector ${selectElementSelector}`);
    }

    selectElement.innerHTML = '';
    cities.forEach(city => {
        const option = document.createElement('option') as HTMLOptionElement;
        option.value = city.codePostal;
        option.text = city.name;
        selectElement.appendChild(option);
    });

    if (cities.length === 0) {
        selectElement.disabled = true;
    }

    if (cities.length === 1) {
        selectElement.inert = true;
        selectElement.disabled = false;
    }

    if (cities.length > 1) {
        selectElement.inert = false;
        selectElement.disabled = false;
    }
}