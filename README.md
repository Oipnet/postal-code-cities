
# Geo Code Postal

`geo-codepostal` est une bibliothèque JavaScript/TypeScript simple et flexible pour récupérer une liste de villes en fonction d'un code postal. La bibliothèque est conçue pour être modulaire et permet d'intégrer facilement différentes API grâce à des fonctions de transformation configurables.

## Installation

Vous pouvez installer cette bibliothèque via npm :

```bash
npm install geo-codepostal
```

## Utilisation

### 1. Importation des modules

Voici comment importer et utiliser les fonctions de la bibliothèque dans un projet TypeScript :

```typescript
import { isValidPostalCode, useFetchCities, populateCitySelect } from 'geo-codepostal';
```

### 2. Validation du code postal

Utilisez la fonction `isValidPostalCode` pour vérifier si un code postal est valide (5 chiffres) :

```typescript
const postalCode = '75001';

if (isValidPostalCode(postalCode)) {
    console.log('Le code postal est valide.');
} else {
    console.log('Le code postal est invalide.');
}
```

### 3. Récupération des villes

Utilisez `useFetchCities` pour récupérer les villes associées à un code postal. Vous pouvez spécifier une fonction de transformation pour adapter les données retournées par l'API :

```typescript
const config = {
    apiUrl: 'https://api.example.com/villes',
    transformFunction: (data: any) => data.map((city: any) => ({
        code: city.id, // ou city.code selon l'API
        nom: city.name // ou city.nom selon l'API
    }))
};

useFetchCities(postalCode, config)
    .then(cities => {
        console.log('Villes récupérées:', cities);
    })
    .catch(error => {
        console.error('Une erreur est survenue lors de la récupération des villes:', error);
    });
```

### 4. Remplissage du `select` avec les villes

Utilisez `populateCitySelect` pour remplir un élément `select` avec les villes récupérées :

```typescript
fetchCities(postalCode, config)
    .then(cities => {
        populateCitySelect(cities, 'cities-select');
    })
    .catch(error => {
        alert('Une erreur est survenue lors de la récupération des villes.');
    });
```

Dans cet exemple, `'cities-select'` est l'ID de l'élément `select` dans le DOM.

### Exemple complet

Voici un exemple complet combinant toutes les fonctionnalités ci-dessus :

```typescript
import { isValidPostalCode, useFetchCities, populateCitySelect } from 'geo-codepostal';

const postalCodeInput = document.getElementById('postal-code') as HTMLInputElement;

postalCodeInput.addEventListener('blur', function() {
    const postalCode = postalCodeInput.value;

    if (isValidPostalCode(postalCode)) {
        const config = {
            apiUrl: 'https://api.example.com/villes',
            transformFunction: (data: any) => data.map((city: any) => ({
                code: city.id,
                nom: city.name
            }))
        };

        useFetchCities(postalCode, config)
            .then(cities => populateCitySelect(cities, 'cities-select'))
            .catch(error => {
                alert('Une erreur est survenue lors de la récupération des villes.');
            });
    } else {
        alert('Veuillez saisir un code postal valide de 5 chiffres.');
    }
});
```

## Configuration API

La fonction `useFetchCities` accepte un objet de configuration qui vous permet de personnaliser l'URL de l'API et la manière dont les données sont transformées :

- `apiUrl`: L'URL de l'API à interroger.
- `transformFunction`: Une fonction facultative pour transformer les données retournées par l'API avant qu'elles ne soient utilisées par la bibliothèque.

### Exemple de configuration API

```typescript
const config = {
    apiUrl: 'https://autre-api.com/villes',
    transformFunction: (data: any) => data.map((item: any) => ({
        code: item.code_postal,
        nom: item.nom_ville
    }))
};
```

## TypeScript

Cette bibliothèque est écrite en TypeScript et fournit des types pour une intégration facile dans vos projets TypeScript.

### Types disponibles

- `City`: Interface représentant une ville avec les propriétés `code` (string) et `nom` (string).
- `FetchCitiesConfig`: Interface pour la configuration de l'API, avec les propriétés `apiUrl` (string) et `transformFunction` (fonction optionnelle).

## Contribution

Les contributions sont les bienvenues ! Si vous trouvez un bug ou souhaitez ajouter une fonctionnalité, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Cette bibliothèque est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.
