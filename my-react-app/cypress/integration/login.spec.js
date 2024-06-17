// cypress/integration/login.spec.js

describe('Testes de Login', () => {
    it('Deve permitir que o usuário faça login e redirecionar para a página do cachorro', () => {
      cy.visit('/entrar');
      cy.get('input[name="email"]').type('phg.garbim@gmail.com');
      cy.get('input[name="password"]').type('123123');
      cy.get('button[class="_button_1j82j_137"]').click();
      
      // Verificar se redirecionou para a página de detalhes do cachorro
      cy.url().should('include', '/cachorros');
    cy.contains('Encontre um Parceiro').should('be.visible');
  });
  
    it('Deve exibir mensagem de erro para credenciais inválidas', () => {
      cy.visit('/entrar');
      cy.get('input[name="email"]').type('usuario@exemplo.com');
      cy.get('input[name="password"]').type('senha_incorreta');
      cy.get('button[class="_button_1j82j_137"]').click();
      
      cy.contains('Ocorreu um erro, tente novamente mais tarde.').should('be.visible');
    });
  });
  