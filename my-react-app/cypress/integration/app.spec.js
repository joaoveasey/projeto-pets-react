describe('Testes de Integração', () => {
    it('Deve carregar a página inicial', () => {
      cy.visit('/');
      cy.url().should('eq', Cypress.config('baseUrl') + ''); // Verifica se a URL é igual a baseUrl
      cy.contains('Encontre o par perfeito para o seu cão.', { timeout: 1000 }).should('be.visible'); // Verifica se o texto está visível
    });
  
    it('Deve navegar para a página de detalhes do cachorro', () => {
      cy.visit('/');
      // Selecionar o card do Rex pelo href ou outro atributo único
      cy.get('a[href="/detalhes/Rex"]').click(); 
      cy.url().should('include', '/detalhes/Rex'); // Verifica se a URL inclui /detalhes/Rex
      cy.contains('Rex, Beagle', { timeout: 10000 }).should('be.visible'); // Verifica se o texto está visível
    });
  });
  