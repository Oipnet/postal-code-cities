export const isValidPostalCode = (codePostal: string): boolean => {
    return /^\d{5}$/.test(codePostal);
}