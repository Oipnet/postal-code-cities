import { City } from "../interfaces/City";
import { FetchCitiesConfig } from "../interfaces/FetchCitiesConfig";

export const useFetchCities = async (postalCode: string, config: FetchCitiesConfig = {}): Promise<City[]> => {
    const { apiUrl = 'https://geo.api.gouv.fr/communes', transformFunction = (data: any) => data } = config;
    
    const url = `${apiUrl}?codePostal=${postalCode}`;

    const response = await fetch(url)
    const jsonData = await response.json()
    
    return transformFunction(jsonData)
}