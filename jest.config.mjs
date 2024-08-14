export default {
  preset: "ts-jest", // Utilise ts-jest pour compiler les fichiers TypeScript
  testEnvironment: "jsdom", // Environnement de test, ici Node.js
  moduleFileExtensions: ["ts", "js"], // Extensions de fichiers supportées
  testMatch: ["**/?(*.)+(spec|test).ts"], // Les fichiers de test à détecter
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "tsconfig-test.json",
        // Ajoutez ici d'autres configurations spécifiques à `ts-jest` si nécessaire
      },
    ],
  },
  coverageDirectory: "./coverage", // Dossier de sortie pour le rapport
  collectCoverageFrom: [
    "lib/**/*.ts", // Fichiers à inclure dans la couverture
    "!lib/**/*.d.ts", // Exclure les fichiers de définition TypeScript
  ],
  coverageReporters: ["json", "lcov", "text", "clover"],
  // Optionnel : Exclure certains dossiers de la couverture de test
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
};
