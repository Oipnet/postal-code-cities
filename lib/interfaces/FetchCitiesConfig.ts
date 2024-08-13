
export interface FetchCitiesConfig {
    apiUrl?: string;
    transformFunction?: (data: any) => City[];
}