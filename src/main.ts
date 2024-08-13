import { isValidPostalCode, populateCitySelect, useFetchCities } from "../lib/main";

const postalCodeInput = document.querySelector('#postalCode') as HTMLInputElement;

postalCodeInput.addEventListener('blur', async (e: Event) => {
    e.preventDefault();

    const postalCode = postalCodeInput.value;
    if (isValidPostalCode(postalCode)) {
        const config = {
            apiUrl: 'https://geo.api.gouv.fr/communes',
            transformFunction: (data: any) => data.map((city: any) => ({ name: city.nom, codePostal: city.codesPostaux[0] }))
        };
        try {
            const result = await useFetchCities(postalCode, config)
            populateCitySelect(result, '#city');
        } catch (error) {
            alert('Erreur lors de la récupération des villes');
        }
    } else {
        alert('Code postal invalide');
    }
});