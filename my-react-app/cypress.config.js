import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173/', // Altere para a URL base do seu projeto
    specPattern: 'cypress/integration/**/*.spec.{js,jsx,ts,tsx}', // Caminho correto para os arquivos de especificação
    supportFile: 'cypress/support/e2e.js', // Altere se necessário
    fixturesFolder: 'cypress/fixtures', // Pasta de fixtures
  },
});
