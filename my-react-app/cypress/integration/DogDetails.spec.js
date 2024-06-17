
describe('Testes de Avaliação de Produtos', () => {
    beforeEach(() => {
      // Simular autenticação
      cy.login('phg.garbim@gmail.com', '123123'); // Comando customizado de login
      cy.url().should('include', '/cachorros');
    });
  
    it('Deve carregar a página de detalhes do cachorro e exibir as avaliações', () => {
      cy.get('a[href="/detalhes/Rex"]').click(); 
      cy.contains('Avaliações').should('be.visible');
    });
  
    it('Deve permitir que um usuário autenticado envie uma avaliação', () => {
      cy.get('a[href="/detalhes/Rex"]').click(); 
      cy.get('input[name="rating"]').type('5');
      cy.get('textarea[name="comment"]').type('Cachorro excelente!');
      cy.get('button[type="submit"]').click();
      
      cy.contains('Avaliação enviada com sucesso!').should('be.visible');
    });
  });
  