describe('testando multiplas páginas', () => {
  it('deve conseguir acessar a página de cartões', () => {
    cy.visit('/');

    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('josue@gmail.com');
    cy.getByData('senha-input').type('josue');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('app-home').find('a').eq(1).click();
    cy.getByData('titulo-cartoes')
      .should('exist')
      .and('have.text', 'Meus cartões');

    cy.location('pathname').should('eq', '/home/cartoes');
  });
});