import { City } from "./City";

export interface FetchCitiesConfig {
    apiUrl?: string;
    transformFunction?: (data: any) => City[];
}