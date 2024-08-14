import { ofetch } from "ofetch";
import { City } from "../interfaces/City";
import { FetchCitiesConfig } from "../interfaces/FetchCitiesConfig";

export const useFetchCities = async (postalCode: string, config: FetchCitiesConfig = {}): Promise<City[]> => {
    const { apiUrl = 'https://geo.api.gouv.fr/communes', transformFunction = (data: any) => data } = config;
    
    const url = `${apiUrl}?codePostal=${postalCode}`;
    try {
        const data = await ofetch(url);
        
        return transformFunction ? transformFunction(data) : data;
    } catch (error) {
        throw new Error('Erreur lors de la récupération des villes');
    }
}